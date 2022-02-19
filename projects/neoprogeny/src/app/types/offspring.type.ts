const Offspring = {
  OFFSPRING_NONE: 'offspring-none',
  OFFSPRING_GERMINATE: 'offspring-germinate',
  OFFSPRING: 'offspring',
} as const;

export type Offspring = typeof Offspring[keyof typeof Offspring];

export function getOffspring(value: string): Offspring | null {
  switch (value.toLowerCase()) {
    case 'offspring-none': return Offspring.OFFSPRING_NONE;
    case 'offspring-germinate': return Offspring.OFFSPRING_GERMINATE;
    case 'offspring': return Offspring.OFFSPRING;
    default: return null;
  }
}
