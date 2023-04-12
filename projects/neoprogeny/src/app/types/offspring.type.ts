export const Offspring = {
  OFFSPRING_NONE: 'offspring-none',
  OFFSPRING_GERMINATE: 'offspring-germinate',
  OFFSPRING: 'offspring',
} as const;

export const OffspringLegend = {
  OFFSPRING_NONE: 'Geen nageslag',
  OFFSPRING_GERMINATE: 'Saad ontkiem',
  OFFSPRING: 'Nageslag',
} as const;

export type Offspring = typeof Offspring[keyof typeof Offspring];
export type OffspringLegend = typeof OffspringLegend[keyof typeof OffspringLegend];

export const getOffspring = (value: string) => new Map(Object.entries(Offspring)).get(value);
export const getOffspringLegend = (value: string) => new Map(Object.entries(OffspringLegend)).get(value);

export class OffspringType {
  id: number;
  code: string;
  type: string;
  isDefault: boolean | null;

  constructor(offspring: {id: number, code: string, type: string, isDefault: boolean | null}) {
    this.id = offspring.id;
    this.code = offspring.code;
    this.type = offspring.type;
    this.isDefault = offspring.isDefault;
  }
}
