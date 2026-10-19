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

export const coverageIcons = {
  prescription: PrescriptionIcon,
  frame: FrameIcon,
  lens: LensIcon,
} as const;
