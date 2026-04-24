/**
 * @melazzo/vehicles
 *
 * Base compartilhada para as plataformas de revenda de veículos.
 * Este barrel re-exporta tudo que é público do pacote.
 *
 * Organização atual:
 *   - ./theme           → tokens de cor, tipografia, espaçamento
 *   - ./components      → componentes React compartilhados (NavLink, …)
 *   - ./lib             → utilitários (`cn`, e — previsto — formatters BR)
 *
 * Organização prevista (próximas versões):
 *   - ./components/ui   → primitivos (Button, Card, DataTable, KPICard) replicados do shadcn
 *   - ./components/vehicle → componentes de domínio (VehicleCard, StockTable,
 *                            TestDriveCalendar, FinancingCalculator)
 *   - ./hooks           → hooks compartilhados (useStock, useTestDrive)
 *   - ./types           → tipos de domínio (Vehicle, Dealer, Customer, FinancingProposal)
 */

export * from "./theme/index.js";
export * from "./components/index.js";
export * from "./lib/index.js";

export const VERSION = "0.2.2" as const;
