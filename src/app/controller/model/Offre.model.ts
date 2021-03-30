import {FonctionVo} from './Fonction.model';
import {CandidatureVo} from './Candidature.model';
import {OffreTagsVo} from './OffreTags.model';
import {DemandeVo} from "./Demande.model";

export class OffreVo {
  public _dateOffre: string;
  public _titre: string;
  public _infoSup: string;
  public _type: string;
  public _dernierDelai: string;
  public _ref: string;
  public _id: string;
     public _dateOffreMax: string ;
     public _dateOffreMin: string ;
     public _dernierDelaiMax: string ;
     public _dernierDelaiMin: string ;
      public _tagsVo: OffreTagsVo = new OffreTagsVo();
      public _fonctionVo: FonctionVo = new FonctionVo();
  public _candidaturesVo: Array<CandidatureVo> = new Array<CandidatureVo>();


    get dateOffre(): string {
        return this._dateOffre;
    }

    set dateOffre(value: string) {
        this._dateOffre = value;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    get infoSup(): string {
        return this._infoSup;
    }

    set infoSup(value: string) {
        this._infoSup = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get dernierDelai(): string {
        return this._dernierDelai;
    }

    set dernierDelai(value: string) {
        this._dernierDelai = value;
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

    get dateOffreMax(): string {
        return this._dateOffreMax;
    }

    set dateOffreMax(value: string) {
        this._dateOffreMax = value;
    }

    get dateOffreMin(): string {
        return this._dateOffreMin;
    }

    set dateOffreMin(value: string) {
        this._dateOffreMin = value;
    }

    get dernierDelaiMax(): string {
        return this._dernierDelaiMax;
    }

    set dernierDelaiMax(value: string) {
        this._dernierDelaiMax = value;
    }

    get dernierDelaiMin(): string {
        return this._dernierDelaiMin;
    }

    set dernierDelaiMin(value: string) {
        this._dernierDelaiMin = value;
    }

    get tagsVo(): OffreTagsVo {
        if (this._tagsVo == null) { return new OffreTagsVo(); }
        return this._tagsVo;
    }

    set tagsVo(value: OffreTagsVo) {
        this._tagsVo = value;
    }

    get fonctionVo(): FonctionVo {
        if (this._fonctionVo == null) { return new FonctionVo(); }
        return this._fonctionVo;
    }

    set fonctionVo(value: FonctionVo) {
        this._fonctionVo = value;
    }

    get candidaturesVo(): Array<CandidatureVo> {
        if (this._candidaturesVo == null) { return new Array<CandidatureVo>(); }
        return this._candidaturesVo;
    }

    set candidaturesVo(value: Array<CandidatureVo>) {
        this._candidaturesVo = value;
    }
}
