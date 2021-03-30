
export class QuestionVo {
  public _formule: string;
  public _reponseCorrecte: string;
  public _ref: string;
  public _id: string;


  get formule(): string {
    return this._formule;
  }

  set formule(value: string) {
    this._formule = value;
  }

  get reponseCorrecte(): string {
    return this._reponseCorrecte;
  }

  set reponseCorrecte(value: string) {
    this._reponseCorrecte = value;
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
