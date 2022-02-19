const Seed = {
  SEED_NONE: 'seed-none',
  SEED_DULL: 'seed-dull',
  SEED: 'seed',
} as const;
const SeedLegend = {
  SEED_NONE: 'Geen saad',
  SEED_DULL: 'Dowwe saad',
  SEED: 'Saad',
} as const;

export type Seed = typeof Seed[keyof typeof Seed];
export type SeedLegend = typeof SeedLegend[keyof typeof SeedLegend];

export function getSeed(value: string): Seed | null {
  switch (value.toLowerCase()) {
    case 'seed-none': return Seed.SEED_NONE;
    case 'seed-dull': return Seed.SEED_DULL;
    case 'seed': return Seed.SEED;
    default: return null;
  }
}

export function getSeedLegend(value: string): SeedLegend | null {
  switch (value.toLowerCase()) {
    case 'seed-none': return SeedLegend.SEED_NONE;
    case 'seed-dull': return SeedLegend.SEED_DULL;
    case 'seed': return SeedLegend.SEED;
    default: return null;
  }
}
