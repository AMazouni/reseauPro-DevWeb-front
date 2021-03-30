import {EntrepriseVo} from './Entreprise.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';

export class FonctionVo {
  public _deteFin: string;
  public _titre: string;
  public _dateDebut: string;
  public _description: string;
  public _ref: string;
  public _id: string;
     public _deteFinMax: string ;
     public _deteFinMin: string ;
     public _dateDebutMax: string ;
     public _dateDebutMin: string ;
      public _entrepriseVo: EntrepriseVo = new EntrepriseVo();
      public _occupeParVo: EtudiantInfoVo = new EtudiantInfoVo();


    get deteFin(): string {
        return this._deteFin;
    }

    set deteFin(value: string) {
        this._deteFin = value;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    get dateDebut(): string {
        return this._dateDebut;
    }

    set dateDebut(value: string) {
        this._dateDebut = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
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

    get deteFinMax(): string {
        return this._deteFinMax;
    }

    set deteFinMax(value: string) {
        this._deteFinMax = value;
    }

    get deteFinMin(): string {
        return this._deteFinMin;
    }

    set deteFinMin(value: string) {
        this._deteFinMin = value;
    }

    get dateDebutMax(): string {
        return this._dateDebutMax;
    }

    set dateDebutMax(value: string) {
        this._dateDebutMax = value;
    }

    get dateDebutMin(): string {
        return this._dateDebutMin;
    }

    set dateDebutMin(value: string) {
        this._dateDebutMin = value;
    }

    get entrepriseVo(): EntrepriseVo {
        if (this._entrepriseVo == null) { return new EntrepriseVo(); }
        return this._entrepriseVo;
    }

    set entrepriseVo(value: EntrepriseVo) {
        this._entrepriseVo = value;
    }

    get occupeParVo(): EtudiantInfoVo {
        if (this._occupeParVo == null) { return new EtudiantInfoVo(); }
        return this._occupeParVo;
    }

    set occupeParVo(value: EtudiantInfoVo) {
        this._occupeParVo = value;
    }
}
