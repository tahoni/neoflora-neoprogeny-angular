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

export function getSeed(value: string): Seed | null {
  const seed = Object.keys(Seed).find(it => it.valueOf() == value);
  return seed as Seed;
}

export function getSeedLegend(value: string): SeedLegend | null {
  const seed = Object.keys(Seed).find(it => it.valueOf() == value);
  return seed as SeedLegend;
}
