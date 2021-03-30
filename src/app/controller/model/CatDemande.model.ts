
export class CatDemandeVo {
  public _id: string;
  public _ref: string;
  public _libellee: string;


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

  get libellee(): string {
    return this._libellee;
  }

  set libellee(value: string) {
    this._libellee = value;
  }
}
