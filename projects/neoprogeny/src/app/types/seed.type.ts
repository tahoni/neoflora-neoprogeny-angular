const Seed = {
  SEED_NONE: 'seed-none',
  SEED_DULL: 'seed-dull',
  SEED: 'seed',
} as const;

export type Seed = typeof Seed[keyof typeof Seed];

export function getSeed(value: string): Seed | null {
  switch (value.toLowerCase()) {
    case 'seed-none': return Seed.SEED_NONE;
    case 'seed-dull': return Seed.SEED_DULL;
    case 'seed': return Seed.SEED;
    default: return null;
  }
}
