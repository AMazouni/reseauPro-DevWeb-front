
export class StatusVo {
  public _code: string;
  public _libelle: string;
  public _ref: string;
  public _id: string;


  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
