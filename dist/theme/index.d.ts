// @melazzo/vehicles/theme v0.2.2 — types
declare const tokens: {
  readonly color: { readonly [key: string]: string };
  readonly radius: { readonly [key: string]: string };
  readonly spacing: { readonly [key: string]: string };
  readonly font: { readonly sans: string; readonly mono: string };
};
type Tokens = typeof tokens;
declare const cssVariables: { readonly [key: string]: string };
declare const theme: { readonly tokens: Tokens; readonly cssVariables: typeof cssVariables };
export { tokens, type Tokens, cssVariables, theme };
export default theme;
