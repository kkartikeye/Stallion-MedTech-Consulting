import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 text-sm font-semibold transition-[color,background-color,border-color,transform] duration-200 ease-out-quiet hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    secondary: "border border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50",
  },
  dark: {
    primary: "bg-white text-slate-950 hover:bg-slate-100",
    secondary: "border border-white/25 text-white hover:bg-white/10",
  },
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "href"
  >;

type NativeButtonProps = CommonProps &
  { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", tone = "light", className = "", ...rest } = props;
  const classes = `${base} ${styles[tone][variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as Omit<LinkButtonProps, keyof CommonProps>;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<NativeButtonProps, keyof CommonProps>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
