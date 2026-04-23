# Changelog

Todas as mudanças notáveis neste pacote são registradas aqui. Formato baseado em
[Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e versionamento conforme
[Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.2.1] — 2026-04-23

### Corrigido
- Adicionado script `"prepare": "[ -d dist ] || tsup"` ao `package.json` — consumidores
  instalando via `npm install github:melazzo/vehicles#v0.2.1` agora têm `dist/` buildado
  automaticamente durante o install. A v0.2.0 publicou `dist/` como release assets mas
  não tinha o hook `prepare`, impedindo consumo via git+https.
- Expandido campo `files` em `package.json` para incluir `src/`, `tsconfig.json` e
  `tsup.config.ts` — necessário para que o `prepare` consiga rebuildar no consumidor
  quando `dist/` não está presente.
- Bump de `VERSION` em `src/index.ts` para `"0.2.1"`.

### Observações / Não-regressão
- Release puramente operacional: nenhum símbolo público novo, removido ou alterado
  em relação à v0.2.0. Plataformas que consumirem direto a v0.2.0 via release assets
  (download manual do `dist/`) continuam funcionais sem mudança.

## [0.2.0] — 2026-04-22

### Adicionado
- `NavLink` (`src/components/NavLink.tsx`) — componente de navegação com suporte a
  `activeClassName` / `pendingClassName`. Extraído das plataformas Car With, Duo
  Motors e Tayco Motors após verificação byte-a-byte (arquivo idêntico nos 3
  repositórios, shortPath git `a561a95`).
- `NavLinkCompatProps` — tipo público da prop de `NavLink`.
- `cn` (`src/lib/utils.ts`) — helper para mesclar classes Tailwind, mesmo
  contrato usado internamente pelos apps via shadcn/ui.
- `react-router-dom` como `peerDependency` (`^6.20.0 || ^7.0.0`) — consumidor
  continua resolvendo a versão que já usa em produção.
- `clsx` e `tailwind-merge` como `dependencies` — suporte do `cn`.

### Observações / Não-regressão
- Nenhuma plataforma consome ainda `@melazzo/vehicles`; esta versão apenas
  **adiciona exports** e não altera a API pública existente (`theme`,
  `tailwind-preset`, `styles.css`).
- `ProtectedRoute`, `Button` (shadcn) e `KpiCard` **não foram extraídos** nesta
  versão. `ProtectedRoute` diverge semanticamente entre as três plataformas
  (contratos de `useAuth` diferentes) e exige decisão arquitetural antes de
  entrar no pacote.

## [0.1.0] — 2026-04-22

### Adicionado
- Scaffold inicial do pacote (`theme`, `tailwind-preset`, `styles.css`, build
  tsup → ESM + CJS + dts, workflow `release.yml` automatizando tag → GitHub
  Release).
