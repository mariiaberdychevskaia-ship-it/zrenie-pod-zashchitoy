import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import {
  Header, Hero, Coverage, Steps, Terms, Faq, FinalCta, Footer, MobileBar,
} from "@/components/landing/Sections";
import { ApplicationDialog } from "@/components/landing/ApplicationDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.seo.title },
      { name: "description", content: siteConfig.seo.description },
      { property: "og:title", content: siteConfig.seo.title },
      { property: "og:description", content: siteConfig.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const apply = () => setOpen(true);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lime focus:px-4 focus:py-2">
        Перейти к содержанию
      </a>
      <Header onApply={apply} />
      <main id="main">
        <Hero onApply={apply} />
        <Coverage />
        <Steps />
        <Terms />
        <Faq />
        <FinalCta onApply={apply} />
      </main>
      <Footer />
      <MobileBar onApply={apply} />
      <ApplicationDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
