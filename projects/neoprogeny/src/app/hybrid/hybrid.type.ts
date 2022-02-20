import {Photo} from "../types/photo.type";
import {Seed} from "../types/seed.type";
import {Offspring} from "../types/offspring";

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

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get mother() {
    return this._mother;
  }

  set mother(value) {
    this._mother = value;
  }

  get father() {
    return this._father;
  }

  set father(value) {
    this._father = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get seed() {
    return this._seed;
  }

  set seed(value) {
    this._seed = value;
  }

  get offspring() {
    return this._offspring;
  }

  set offspring(value) {
    this._offspring = value;
  }

  get photo() {
    return this._photo;
  }

  set photo(value) {
    this._photo = value;
  }

  get comment() {
    return this._comment;
  }

  set comment(value) {
    this._comment = value;
  }
}
