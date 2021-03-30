import {FonctionVo} from './Fonction.model';

export class EntrepriseVo {
  public Localisation: string;
  public description: string;
  public ref: string;
  public nom: string;
  public id: string;
  public fonctionsLaureatVo: Array<FonctionVo> = new Array<FonctionVo>();


  get __Localisation(): string {
    return this.Localisation;
  }

  set __Localisation(value: string) {
    this.Localisation = value;
  }

  get __description(): string {
    return this.description;
  }

  set __description(value: string) {
    this.description = value;
  }

  get __ref(): string {
    return this.ref;
  }

  set __ref(value: string) {
    this.ref = value;
  }

  get __nom(): string {
    return this.nom;
  }

  set __nom(value: string) {
    this.nom = value;
  }

  get __id(): string {
    return this.id;
  }

  set __id(value: string) {
    this.id = value;
  }

  get __fonctionsLaureatVo(): Array<FonctionVo> {
    if (this.fonctionsLaureatVo == null) {return new Array<FonctionVo>(); }
    return this.fonctionsLaureatVo;
  }

  set __fonctionsLaureatVo(value: Array<FonctionVo>) {
    this.fonctionsLaureatVo = value;
  }
}
