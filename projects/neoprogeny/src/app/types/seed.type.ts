export const Seed = {
  SEED_NONE: 'seed-none',
  SEED_DULL: 'seed-dull',
  SEED: 'seed',
} as const;

export const SeedLegend = {
  SEED_NONE: 'Geen saad',
  SEED_DULL: 'Dowwe saad',
  SEED: 'Saad',
} as const;

export type Seed = typeof Seed[keyof typeof Seed];
export type SeedLegend = typeof SeedLegend[keyof typeof SeedLegend];

export const getSeed = (value: string) => new Map(Object.entries(Seed)).get(value);
export const getSeedLegend = (value: string) => new Map(Object.entries(SeedLegend)).get(value);
