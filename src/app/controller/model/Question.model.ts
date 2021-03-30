
export class QuestionVo {
  public formule: string;
  public reponseCorrecte: string;
  public ref: string;
  public id: string;


  get __formule(): string {
    return this.formule;
  }

  set __formule(value: string) {
    this.formule = value;
  }

  get __reponseCorrecte(): string {
    return this.reponseCorrecte;
  }

  set __reponseCorrecte(value: string) {
    this.reponseCorrecte = value;
  }

  get __ref(): string {
    return this.ref;
  }

  set __ref(value: string) {
    this.ref = value;
  }

  get __id(): string {
    return this.id;
  }

  set __id(value: string) {
    this.id = value;
  }
}
