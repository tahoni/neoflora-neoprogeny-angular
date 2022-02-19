const Offspring = {
  OFFSPRING_NONE: 'No offspring',
  OFFSPRING: 'Offspring',
} as const;

export type Offspring = typeof Offspring[keyof typeof Offspring];

export function getOffspring(value: string): Offspring | null {
  switch (value.toLowerCase()) {
    case 'no offspring': return Offspring.OFFSPRING_NONE;
    case 'offspring': return Offspring.OFFSPRING;
    default: return null;
  }
}
