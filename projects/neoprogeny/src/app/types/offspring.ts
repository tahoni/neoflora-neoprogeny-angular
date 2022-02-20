import {Seed, SeedLegend} from "./seed.type";

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

export function getOffspring(value: string): Offspring | null {
  const offspring = Object.keys(Offspring).find(it => it.valueOf() == value);
  return offspring as Offspring;
}

export function getOffspringLegend(value: string): OffspringLegend | null {
  const offspringLegend = Object.keys(OffspringLegend).find(it => it.valueOf() == value);
  return offspringLegend as OffspringLegend;
}
