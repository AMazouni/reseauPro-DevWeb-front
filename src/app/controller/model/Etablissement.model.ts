import {FormationVo} from './Formation.model';

export class EtablissementVo {
  public nom: string;
  public description: string;
  public id: string;
  public ref: string;
  public formationsVo: Array<FormationVo>;


  get __nom(): string {
    return this.nom;
  }

  set __nom(value: string) {
    this.nom = value;
  }

  get __description(): string {
    return this.description;
  }

  set __description(value: string) {
    this.description = value;
  }

  get __id(): string {
    return this.id;
  }

  set __id(value: string) {
    this.id = value;
  }

  get __ref(): string {
    return this.ref;
  }

  set __ref(value: string) {
    this.ref = value;
  }

  get __formationsVo(): Array<FormationVo> {
    if (this.formationsVo == null) { return new Array<FormationVo>(); }
    return this.formationsVo;
  }

  set __formationsVo(value: Array<FormationVo>) {
    this.formationsVo = value;
  }
}
