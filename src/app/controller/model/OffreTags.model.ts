
export class OffreTagsVo {
  public ref: string;
  public id: string;
  public libellee: string;


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

  get __libellee(): string {
    return this.libellee;
  }

  set __libellee(value: string) {
    this.libellee = value;
  }
}
