// @melazzo/vehicles v0.2.2 — type declarations
import type { NavLinkProps } from "react-router-dom";
import type { ClassValue } from "clsx";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

// ---------- theme ----------
declare const tokens: {
  readonly color: {
    readonly background: string;
    readonly foreground: string;
    readonly muted: string;
    readonly mutedForeground: string;
    readonly border: string;
    readonly input: string;
    readonly ring: string;
    readonly primary: string;
    readonly primaryForeground: string;
    readonly secondary: string;
    readonly secondaryForeground: string;
    readonly accent: string;
    readonly accentForeground: string;
    readonly destructive: string;
    readonly destructiveForeground: string;
    readonly success: string;
    readonly successForeground: string;
    readonly warning: string;
    readonly warningForeground: string;
  };
  readonly radius: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
    readonly full: string;
  };
  readonly spacing: {
    readonly xs: string;
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
    readonly "2xl": string;
  };
  readonly font: {
    readonly sans: string;
    readonly mono: string;
  };
};

type Tokens = typeof tokens;

declare const cssVariables: {
  readonly [key: string]: string;
};

declare const theme: {
  readonly tokens: Tokens;
  readonly cssVariables: typeof cssVariables;
};

// ---------- components ----------
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

declare const NavLink: ForwardRefExoticComponent<
  NavLinkCompatProps & RefAttributes<HTMLAnchorElement>
>;

// ---------- lib ----------
declare function cn(...inputs: ClassValue[]): string;

// ---------- version ----------
declare const VERSION: "0.2.2";

export {
  NavLink,
  type NavLinkCompatProps,
  cn,
  tokens,
  type Tokens,
  cssVariables,
  theme,
  VERSION,
};
