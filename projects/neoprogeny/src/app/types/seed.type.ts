const Seed = {
  SEED_NONE: 'No seed',
  SEED_DULL: 'Dull seed',
  SEED: 'Seed',
} as const;

export type Seed = typeof Seed[keyof typeof Seed];

export function getSeed(value: string): Seed | null {
  switch (value.toLowerCase()) {
    case 'no seed': return Seed.SEED_NONE;
    case 'dull seed': return Seed.SEED_DULL;
    case 'seed': return Seed.SEED_DULL;
    default: return null;
  }
}
