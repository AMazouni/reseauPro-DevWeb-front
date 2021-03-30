
export class SexeVo {
  public libelle: string;
  public icon: string;
  public ref: string;
  public id: string;


  get __libelle(): string {
    return this.libelle;
  }

  set __libelle(value: string) {
    this.libelle = value;
  }

  get __icon(): string {
    return this.icon;
  }

  set __icon(value: string) {
    this.icon = value;
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
