export enum HybridSeedType {
  seedNone = 'seed-none',
  seedDull = 'seed-dull',
  seed = 'seed',
}

export enum HybridOffspringType {
  offspringNone = 'offspring-none',
  offspring = 'offspring',
}

export class HybridBaseType {
  id: number;
  code: string;
}

export class HybridType extends HybridBaseType {
  id: number;
  code: string;
  mother: HybridBaseType;
  father: HybridBaseType;
  description: string;
  seed: HybridSeedType;
  offspring: HybridOffspringType;
  image: string;
  comment: string;
}
