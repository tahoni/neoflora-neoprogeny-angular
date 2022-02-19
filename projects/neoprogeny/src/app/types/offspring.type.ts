const Offspring = {
  OFFSPRING_NONE: 'offspring-none',
  OFFSPRING_GERMINATE: 'offspring-germinate',
  OFFSPRING: 'offspring',
} as const;

const OffspringLegend = {
  OFFSPRING_NONE: 'Geen nageslag',
  OFFSPRING_GERMINATE: 'Saad ontkiem',
  OFFSPRING: 'Nageslag',
} as const;

export type Offspring = typeof Offspring[keyof typeof Offspring];
export type OffspringLegend = typeof OffspringLegend[keyof typeof OffspringLegend];

export function getOffspring(value: string): Offspring | null {
  switch (value.toLowerCase()) {
    case 'offspring-none': return Offspring.OFFSPRING_NONE;
    case 'offspring-germinate': return Offspring.OFFSPRING_GERMINATE;
    case 'offspring': return Offspring.OFFSPRING;
    default: return null;
  }
}

export function getOffspringLegend(value: string): OffspringLegend | null {
  switch (value) {
    case 'offspring-none': return OffspringLegend.OFFSPRING_NONE;
    case 'offspring-germinate': return OffspringLegend.OFFSPRING_GERMINATE;
    case 'offspring': return OffspringLegend.OFFSPRING;
    default: return null;
  }
}
