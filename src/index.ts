/**
 * @melazzo/vehicles
 *
 * Base compartilhada para as plataformas de revenda de veículos.
 * Este barrel re-exporta tudo que é público do pacote.
 *
 * Organização prevista (a ser populada na fase de extração):
 *   - ./theme           → tokens de cor, tipografia, espaçamento
 *   - ./components/ui   → primitivos (Button, Card, DataTable, KPICard) replicados do shadcn
 *   - ./components/vehicle → componentes de domínio (VehicleCard, StockTable,
 *                            TestDriveCalendar, FinancingCalculator)
 *   - ./hooks           → hooks compartilhados (useStock, useTestDrive)
 *   - ./lib             → utils (formatters de placa, CPF, moeda BR, CDC)
 *   - ./types           → tipos de domínio (Vehicle, Dealer, Customer, FinancingProposal)
 */

export * from "./theme/index.js";

// Placeholders — componentes e tipos entram na fase 2 (extração do Tayco/Duo).
// export * from "./components/ui/index.js";
// export * from "./components/vehicle/index.js";
// export * from "./hooks/index.js";
// export * from "./lib/index.js";
// export * from "./types/index.js";

export const VERSION = "0.1.0" as const;
