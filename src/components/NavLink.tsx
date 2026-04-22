import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "../lib/utils.js";

/**
 * Assinatura espelhando o `NavLink` compartilhado pelos apps Car With, Duo
 * Motors e Tayco Motors (template Lovable original, idêntico byte-a-byte
 * nos três repos — shortPath `a561a95`). Extraído na v0.2.0.
 *
 * Consumidor troca `import { NavLink } from "@/components/NavLink"` por
 * `import { NavLink } from "@melazzo/vehicles"` sem alterar chamadas.
 */
export interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
