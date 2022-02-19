export const Seed = {
  SEED_NONE: 'seed-none',
  SEED_DULL: 'seed-dull',
  SEED: 'seed',
} as const;

const SeedLegend = {
  SEED_NONE: 'Geen saad',
  SEED_DULL: 'Dowwe saad',
  SEED: 'Saad',
} as const;

export type SeedType = typeof Seed[keyof typeof Seed];
export type SeedLegend = typeof SeedLegend[keyof typeof SeedLegend];

export function getSeed(value: string): SeedType | null {
  const seed = Object.keys(Seed).find(it => it.valueOf() == value);
  return seed as SeedType;
}

export function getSeedLegend(value: string): SeedLegend | null {
  const seed = Object.keys(Seed).find(it => it.valueOf() == value);
  return seed as SeedLegend;
}
