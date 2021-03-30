import {FonctionVo} from './Fonction.model';

export class EntrepriseVo {
  public _Localisation: string;
  public _description: string;
  public _ref: string;
  public _nom: string;
  public _id: string;
  public _fonctionsLaureatVo: Array<FonctionVo> = new Array<FonctionVo>();


  get Localisation(): string {
    return this._Localisation;
  }

  set Localisation(value: string) {
    this._Localisation = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get fonctionsLaureatVo(): Array<FonctionVo> {
    if (this._fonctionsLaureatVo == null) {return new Array<FonctionVo>(); }
    return this._fonctionsLaureatVo;
  }

  set fonctionsLaureatVo(value: Array<FonctionVo>) {
    this._fonctionsLaureatVo = value;
  }
}
