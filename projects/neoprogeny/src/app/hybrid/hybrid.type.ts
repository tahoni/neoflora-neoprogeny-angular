import {Photo} from "../types/photo.type";
import {Seed} from "../types/seed.type";
import {Offspring} from "../types/offspring.type";

export class Hybrid {
  id: number;
  code: string;
  mother?: Hybrid | null;
  father?: Hybrid | null;
  description?: string | null;
  seed?: Seed | null;
  offspring?: Offspring | null;
  photo?: Photo | null;
  comments?: string | null;

  constructor(hybrid: {id: number, code: string, mother?: Hybrid | null, father?: Hybrid | null,
              description?: string | null, seed?: Seed | null, offspring?: Offspring | null,
              photos?: Photo[] | null, comments?: string | null}) {
    this.id = hybrid.id;
    this.code = hybrid.code;
    this.mother = hybrid.mother;
    this.father = hybrid.father;
    this.description = hybrid.description;
    this.seed = hybrid.seed;
    this.offspring = hybrid.offspring;
    if ((hybrid.photos) && (hybrid.photos.length > 0)) {
      this.photo = hybrid.photos[0];
    }
    this.comments = hybrid.comments;
  }

}
