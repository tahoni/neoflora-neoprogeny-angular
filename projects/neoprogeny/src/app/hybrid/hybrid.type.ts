import {Photo} from "../types/photo.type";
import {Seed} from "../types/seed.type";
import {Offspring} from "../types/offspring.type";

export class Hybrid {
  id: number;
  code: string;
  mother: Hybrid | null;
  father: Hybrid | null;
  description: string | null;
  seed: Seed | null;
  offspring: Offspring | null;
  photo: Photo | null;
  comment: string | null;

  constructor(id: number, code: string, mother: Hybrid | null = null, father: Hybrid | null = null,
              description: string | null = null, seed: Seed | null = null, offspring: Offspring | null = null,
              photo: Photo | null = null, comment: string | null = null) {
    this.id = id;
    this.code = code;
    this.mother = mother;
    this.father = father;
    this.description = description;
    this.seed = seed;
    this.offspring = offspring;
    this.photo = photo;
    this.comment = comment;
  }

}
