import {EntrepriseVo} from './Entreprise.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';

export class FonctionVo {
  public deteFin: string;
  public titre: string;
  public dateDebut: string;
  public description: string;
  public ref: string;
  public id: string;
     public deteFinMax: string ;
     public deteFinMin: string ;
     public dateDebutMax: string ;
     public dateDebutMin: string ;
      public entrepriseVo: EntrepriseVo = new EntrepriseVo();
      public occupeParVo: EtudiantInfoVo = new EtudiantInfoVo();


    get __deteFin(): string {
        return this.deteFin;
    }

    set __deteFin(value: string) {
        this.deteFin = value;
    }

    get __titre(): string {
        return this.titre;
    }

    set __titre(value: string) {
        this.titre = value;
    }

    get __dateDebut(): string {
        return this.dateDebut;
    }

    set __dateDebut(value: string) {
        this.dateDebut = value;
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

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __deteFinMax(): string {
        return this.deteFinMax;
    }

    set __deteFinMax(value: string) {
        this.deteFinMax = value;
    }

    get __deteFinMin(): string {
        return this.deteFinMin;
    }

    set __deteFinMin(value: string) {
        this.deteFinMin = value;
    }

    get __dateDebutMax(): string {
        return this.dateDebutMax;
    }

    set __dateDebutMax(value: string) {
        this.dateDebutMax = value;
    }

    get __dateDebutMin(): string {
        return this.dateDebutMin;
    }

    set __dateDebutMin(value: string) {
        this.dateDebutMin = value;
    }

    get __entrepriseVo(): EntrepriseVo {
        if (this.entrepriseVo == null) { return new EntrepriseVo(); }
        return this.entrepriseVo;
    }

    set __entrepriseVo(value: EntrepriseVo) {
        this.entrepriseVo = value;
    }

    get __occupeParVo(): EtudiantInfoVo {
        if (this.occupeParVo == null) { return new EtudiantInfoVo(); }
        return this.occupeParVo;
    }

    set __occupeParVo(value: EtudiantInfoVo) {
        this.occupeParVo = value;
    }
}
