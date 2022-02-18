import {Seed} from "../types/seed.type";
import {Offspring} from "../types/offspring.type";
import {Photo} from "../types/photo.type";

export class Hybrid {
  private _id: number;
  private _code: string;
  private _mother: Hybrid | null;
  private _father: Hybrid | null;
  private _description: string | null;
  private _seed: Seed | null;
  private _offspring: Offspring | null;
  private _photo: Photo | null;
  private _comment: string | null;

  constructor(id: number, code: string, mother: Hybrid | null = null, father: Hybrid | null = null,
              description: string | null = null, seed: Seed | null = null, offspring: Offspring | null = null,
              photo: Photo | null = null, comment: string | null = null) {
    this._id = id;
    this._code = code;
    this._mother = mother;
    this._father = father;
    this._description = description;
    this._seed = seed;
    this._offspring = offspring;
    this._photo = photo;
    this._comment = comment;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get mother(): Hybrid | null {
    return this._mother;
  }

  set mother(value: Hybrid | null) {
    this._mother = value;
  }

  get father(): Hybrid | null {
    return this._father;
  }

  set father(value: Hybrid | null) {
    this._father = value;
  }

  get description(): string | null {
    return this._description;
  }

  set description(value: string | null) {
    this._description = value;
  }

  get seed(): string {
    return this._seed ? this._seed.valueOf() : '';
  }

/*
  set seed(value: string) {
    this._seed = value;
  }
*/

  get offspring(): string {
    return this._offspring ? this._offspring?.valueOf() : '';
  }

/*
  set offspring(value: Offspring | null) {
    this._offspring = value;
  }
*/

  get photo(): Photo | null {
    return this._photo;
  }

  set photo(value: Photo | null) {
    this._photo = value;
  }

  get comment(): string | null {
    return this._comment;
  }

  set comment(value: string | null) {
    this._comment = value;
  }
}
