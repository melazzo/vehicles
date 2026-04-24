// @melazzo/vehicles v0.2.2
// ESM bundle — hand-compiled (equivalent to tsup output for this source)

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";

// ---------- src/theme/index.ts ----------
const tokens = {
  color: {
    background: "hsl(0 0% 100%)",
    foreground: "hsl(222 47% 11%)",
    muted: "hsl(210 40% 96%)",
    mutedForeground: "hsl(215 16% 47%)",
    border: "hsl(214 32% 91%)",
    input: "hsl(214 32% 91%)",
    ring: "hsl(222 84% 5%)",
    primary: "hsl(222 47% 11%)",
    primaryForeground: "hsl(210 40% 98%)",
    secondary: "hsl(210 40% 96%)",
    secondaryForeground: "hsl(222 47% 11%)",
    accent: "hsl(210 40% 96%)",
    accentForeground: "hsl(222 47% 11%)",
    destructive: "hsl(0 84% 60%)",
    destructiveForeground: "hsl(210 40% 98%)",
    success: "hsl(142 71% 45%)",
    successForeground: "hsl(210 40% 98%)",
    warning: "hsl(38 92% 50%)",
    warningForeground: "hsl(222 47% 11%)",
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  font: {
    sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
  },
};

const cssVariables = {
  "--background": tokens.color.background,
  "--foreground": tokens.color.foreground,
  "--muted": tokens.color.muted,
  "--muted-foreground": tokens.color.mutedForeground,
  "--border": tokens.color.border,
  "--input": tokens.color.input,
  "--ring": tokens.color.ring,
  "--primary": tokens.color.primary,
  "--primary-foreground": tokens.color.primaryForeground,
  "--secondary": tokens.color.secondary,
  "--secondary-foreground": tokens.color.secondaryForeground,
  "--accent": tokens.color.accent,
  "--accent-foreground": tokens.color.accentForeground,
  "--destructive": tokens.color.destructive,
  "--destructive-foreground": tokens.color.destructiveForeground,
  "--success": tokens.color.success,
  "--success-foreground": tokens.color.successForeground,
  "--warning": tokens.color.warning,
  "--warning-foreground": tokens.color.warningForeground,
  "--radius": tokens.radius.md,
};

const theme = { tokens, cssVariables };

// ---------- src/lib/utils.ts ----------
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ---------- src/components/NavLink.tsx ----------
const NavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return jsx(RouterNavLink, {
      ref,
      to,
      className: ({ isActive, isPending }) =>
        cn(className, isActive && activeClassName, isPending && pendingClassName),
      ...props,
    });
  },
);
NavLink.displayName = "NavLink";

// ---------- src/index.ts ----------
const VERSION = "0.2.2";

export { NavLink, cn, tokens, cssVariables, theme, VERSION };
