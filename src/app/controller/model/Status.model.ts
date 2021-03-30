
export class StatusVo {
  public code: string;
  public libelle: string;
  public ref: string;
  public id: string;


  get __code(): string {
    return this.code;
  }

  set __code(value: string) {
    this.code = value;
  }

  get __libelle(): string {
    return this.libelle;
  }

  set __libelle(value: string) {
    this.libelle = value;
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
