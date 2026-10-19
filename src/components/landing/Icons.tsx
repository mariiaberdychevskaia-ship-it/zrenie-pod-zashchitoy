import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function GlassesMark(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 16" {...base} strokeWidth={2} {...p}>
      <circle cx="8" cy="9" r="5.5" />
      <circle cx="24" cy="9" r="5.5" />
      <path d="M13.5 8.5c1.5-1.2 3.5-1.2 5 0M2.5 8 1 4M29.5 8 31 4" />
    </svg>
  );
}

export function PrescriptionIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <rect x="10" y="6" width="28" height="36" rx="3" />
      <path d="M17 15h14M17 21h14M17 27h8" />
      <path d="M27 33l3 3 6-7" />
    </svg>
  );
}

export function FrameIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <rect x="4" y="18" width="16" height="13" rx="5" />
      <rect x="28" y="18" width="16" height="13" rx="5" />
      <path d="M20 22c2.5-2 5.5-2 8 0M4 21 2 15M44 21l2-6" />
    </svg>
  );
}

export function LensIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <ellipse cx="24" cy="24" rx="16" ry="14" />
      <path d="M15 18c2-3 5-4.5 8-4.5" />
      <path d="M28 26l4 4M32 24l-2 6" />
    </svg>
  );
}

export function LostGlassesIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <circle cx="15" cy="29" r="8" />
      <circle cx="33" cy="29" r="8" strokeDasharray="3.2 3.6" />
      <path d="M23 27.5c1.4-1.4 3.2-1.4 4.6 0M7 26l-3-6M41 26l3-6" />
      <path d="M22 9c0-2.2 1.8-3.8 4-3.8s3.9 1.5 3.9 3.4c0 2.5-3.9 2.5-3.9 5.3" />
      <path d="M26 17.4v.5" />
    </svg>
  );
}

export function WearIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <circle cx="24" cy="24" r="15" />
      <path d="M15 17l5 5M21 14l10 10M14 24l6 6M28 33l4 4" />
    </svg>
  );
}

export function WishIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <path d="M24.5 7H11a3 3 0 0 0-3 3v13.5c0 .8.3 1.6.9 2.1l13.5 13.5a3 3 0 0 0 4.2 0l12.9-12.9a3 3 0 0 0 0-4.2L26.6 7.9A3 3 0 0 0 24.5 7Z" />
      <circle cx="15.5" cy="15.5" r="2.4" />
      <path d="M20 27l7 7" />
      <path d="M38 6v6M35 9h6" />
    </svg>
  );
}

export function ContactLensIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <circle cx="19" cy="29" r="11" />
      <circle cx="19" cy="29" r="4.5" />
      <path d="M37 7a9.5 9.5 0 1 0 5.5 12.5A10.5 10.5 0 0 1 37 7Z" />
    </svg>
  );
}

export const coverageIcons = {
  prescription: PrescriptionIcon,
  frame: FrameIcon,
  lens: LensIcon,
} as const;

export const notCoveredIcons = {
  lost: LostGlassesIcon,
  wear: WearIcon,
  wish: WishIcon,
  contact: ContactLensIcon,
} as const;
