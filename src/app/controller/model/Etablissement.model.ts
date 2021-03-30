import {FormationVo} from './Formation.model';

export class EtablissementVo {
  public _nom: string;
  public _description: string;
  public _id: string;
  public _ref: string;
  public _formationsVo: Array<FormationVo>;


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get formationsVo(): Array<FormationVo> {
    if (this._formationsVo == null) { return new Array<FormationVo>(); }
    return this._formationsVo;
  }

  set formationsVo(value: Array<FormationVo>) {
    this._formationsVo = value;
  }
}
