import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(100, "Не более 100 символов"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{10,20}$/, "Укажите телефон, например +7 900 000-00-00"),
  consent: z.literal(true, { errorMap: () => ({ message: "Нужно согласие на обработку данных" }) }),
});

type Status = "idle" | "sending" | "success" | "error" | "not-connected";

export function ApplicationDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { form, documents } = siteConfig;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      consent: fd.get("consent") === "on",
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    if (!form.endpoint) {
      setStatus("not-connected");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const fieldErr = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setStatus("idle");
          setErrors({});
        }
      }}
    >
      <DialogContent className="max-w-md rounded-2xl border-0 bg-card p-7 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">{form.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Оставьте контакты — мы свяжемся с вами и расскажем о подключении. Паспортные данные и
            оплата на этом шаге не нужны.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <p role="status" className="rounded-xl bg-surface p-4 font-medium">
            {form.successMessage}
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-2 space-y-5">
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                name="name"
                autoComplete="given-name"
                maxLength={100}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="mt-2 h-12 rounded-xl bg-background"
              />
              {fieldErr("name")}
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+7"
                maxLength={20}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className="mt-2 h-12 rounded-xl bg-background"
              />
              {fieldErr("phone")}
            </div>
            <div>
              <label className="flex items-start gap-3 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  name="consent"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  className="mt-0.5 size-5 shrink-0 accent-primary"
                />
                <span>
                  Я даю согласие на обработку персональных данных в соответствии с{" "}
                  {documents.privacy.url ? (
                    <a
                      href={documents.privacy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      политикой обработки персональных данных
                    </a>
                  ) : (
                    <span>
                      политикой обработки персональных данных{" "}
                      <span className="text-muted-foreground">(документ будет опубликован)</span>
                    </span>
                  )}
                  .
                </span>
              </label>
              {fieldErr("consent")}
            </div>

            {(status === "not-connected" || status === "error") && (
              <p role="alert" className="rounded-xl border border-destructive/40 p-3 text-sm">
                {status === "error" ? form.errorMessage : form.notConnectedMessage}
              </p>
            )}

            <Button type="submit" variant="lime" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sending" ? "Отправляем…" : form.submitLabel}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
