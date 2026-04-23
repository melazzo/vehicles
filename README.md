# @melazzo/vehicles

Base compartilhada (tema, tokens, componentes e utilitários de domínio) para as plataformas de **revenda de veículos** da Melazzo Consultoria: Car With, Duo Motors, Tayco Motors e futuros clientes do mesmo vertical.

> Infraestrutura compartilhada de código (plumbing) — NavLink compat wrapper, helper `cn`, tokens de design. Repo público para destravar builds em qualquer ambiente (Lovable, CI, local). A lógica de negócio e os dados de cada plataforma (Car With, Duo Motors, Tayco Motors) ficam nos respectivos repositórios privados. Distribuído via git+https; pode migrar para o npm registry posteriormente.

## Verticais da Melazzo

Este repo atende **apenas** o vertical de revenda de veículos. Outros verticais moram em repos separados:

- `melazzo/vehicles` — este repo (revendas de carro)
- `melazzo/agro` — gestão agro / produtor rural (futuro)
- `melazzo/legal` — produtos Sartini / jurídico (futuro)

## Instalação

Nas plataformas-cliente (Lovable / Vite), instalar apontando para uma tag do repositório:

```bash
npm install github:melazzo/vehicles#v0.2.0
```

Ou via `package.json`:

```json
{
  "dependencies": {
    "@melazzo/vehicles": "github:melazzo/vehicles#v0.2.0"
  }
}
```

Para apontar para uma branch em desenvolvimento (não recomendado em produção):

```json
{
  "dependencies": {
    "@melazzo/vehicles": "github:melazzo/vehicles#main"
  }
}
```

## Uso

```tsx
// Barrel principal — componentes e utilitários
import { NavLink, cn } from "@melazzo/vehicles";

// Tema / tokens
import { theme } from "@melazzo/vehicles/theme";

// Estilos base (importar uma vez no root da app)
import "@melazzo/vehicles/styles.css";
```

### Exports disponíveis (v0.2.0)

| Export | Origem | Observação |
|--------|--------|------------|
| `NavLink`, `NavLinkCompatProps` | `./components/NavLink` | Navegação com `activeClassName`/`pendingClassName`. Requer `react-router-dom` como peer. |
| `cn` | `./lib/utils` | Helper `clsx + tailwind-merge`, mesmo contrato do shadcn. |
| `theme`, `tokens`, `cssVariables` | `./theme` | Tokens de design neutros, sobrescritíveis por CSS vars. |
| `tailwind-preset` (subpath) | `./tailwind-preset` | Preset do Tailwind para consumo direto em `tailwind.config.ts`. |
| `styles.css` (subpath) | `./styles.css` | CSS base com as variáveis. |
| `VERSION` | `./index` | Constante `"0.2.0"`. |

### Tailwind preset

No `tailwind.config.ts` da plataforma-cliente:

```ts
import type { Config } from "tailwindcss";
import melazzoVehicles from "@melazzo/vehicles/tailwind-preset";

export default {
  presets: [melazzoVehicles],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@melazzo/vehicles/dist/**/*.{js,cjs}",
  ],
} satisfies Config;
```

## Release

Releases são disparados automaticamente por tag:

```bash
git tag v0.2.0
git push origin v0.2.0
```

O workflow `.github/workflows/release.yml` roda typecheck, build (tsup → ESM+CJS+dts) e cria um GitHub Release com os artefatos de `dist/`. Usa o `GITHUB_TOKEN` efêmero do runner — não precisa de PAT.

## Desenvolvimento

```bash
npm install
npm run dev        # watch mode
npm run build      # build production
npm run typecheck  # verificar tipos sem emitir
```

## Roadmap de migração

1. **Car With** — primeira plataforma a consumir o pacote (cobaia)
2. **Duo Motors** — após validação em Car With
3. **Tayco Motors** — por último (plataforma mais madura)

Cada migração troca implementações locais por imports de `@melazzo/vehicles` e bumpa a versão do pacote quando necessário.
