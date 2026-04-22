import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Helper para mesclar classes Tailwind — mesmo contrato usado pelos apps
 * (Car With, Duo, Tayco) através do shadcn/ui. Expor o `cn` aqui permite
 * que componentes compartilhados usem a mesma convenção.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
