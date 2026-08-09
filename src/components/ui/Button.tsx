import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "light" | "dark";
type Size = "sm" | "md";

/**
 * Press feedback is on `:active` rather than hover alone, so touch devices
 * get confirmation the moment the finger lands rather than only on release.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-[color,background-color,border-color,transform] duration-200 ease-out-quiet hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.8rem]",
  md: "px-6 py-3 text-sm",
};

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-ink-950 text-white hover:bg-ink-800",
    secondary: "border border-ink-200 text-ink-950 hover:border-ink-300 hover:bg-sand-100",
    ghost: "text-ink-700 hover:text-ink-950 hover:bg-sand-100",
  },
  dark: {
    primary: "bg-white text-ink-950 hover:bg-ink-50",
    secondary: "border border-white/25 text-white hover:bg-white/10",
    ghost: "text-ink-200 hover:text-white hover:bg-white/10",
  },
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  className?: string;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "href"
  >;

type NativeButtonProps = CommonProps &
  { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const {
    children,
    variant = "primary",
    tone = "light",
    size = "md",
    className = "",
    ...rest
  } = props;
  const classes = `${base} ${sizes[size]} ${styles[tone][variant]} ${className}`;

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
