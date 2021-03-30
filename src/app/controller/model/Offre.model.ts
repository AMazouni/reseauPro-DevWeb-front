import {FonctionVo} from './Fonction.model';
import {CandidatureVo} from './Candidature.model';
import {OffreTagsVo} from './OffreTags.model';

export class OffreVo {
  public dateOffre: string;
  public titre: string;
  public infoSup: string;
  public type: string;
  public dernierDelai: string;
  public ref: string;
  public id: string;
     public dateOffreMax: string ;
     public dateOffreMin: string ;
     public dernierDelaiMax: string ;
     public dernierDelaiMin: string ;
      public tagsVo: OffreTagsVo = new OffreTagsVo();
      public fonctionVo: FonctionVo = new FonctionVo();
  public candidaturesVo: Array<CandidatureVo> = new Array<CandidatureVo>();


    get __dateOffre(): string {
        return this.dateOffre;
    }

    set __dateOffre(value: string) {
        this.dateOffre = value;
    }

    get __titre(): string {
        return this.titre;
    }

    set __titre(value: string) {
        this.titre = value;
    }

    get __infoSup(): string {
        return this.infoSup;
    }

    set __infoSup(value: string) {
        this.infoSup = value;
    }

    get __type(): string {
        return this.type;
    }

    set __type(value: string) {
        this.type = value;
    }

    get __dernierDelai(): string {
        return this.dernierDelai;
    }

    set __dernierDelai(value: string) {
        this.dernierDelai = value;
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

    get __dateOffreMax(): string {
        return this.dateOffreMax;
    }

    set __dateOffreMax(value: string) {
        this.dateOffreMax = value;
    }

    get __dateOffreMin(): string {
        return this.dateOffreMin;
    }

    set __dateOffreMin(value: string) {
        this.dateOffreMin = value;
    }

    get __dernierDelaiMax(): string {
        return this.dernierDelaiMax;
    }

    set __dernierDelaiMax(value: string) {
        this.dernierDelaiMax = value;
    }

    get __dernierDelaiMin(): string {
        return this.dernierDelaiMin;
    }

    set __dernierDelaiMin(value: string) {
        this.dernierDelaiMin = value;
    }

    get __tagsVo(): OffreTagsVo {
        if (this.tagsVo == null) { return new OffreTagsVo(); }
        return this.tagsVo;
    }

    set __tagsVo(value: OffreTagsVo) {
        this.tagsVo = value;
    }

    get __fonctionVo(): FonctionVo {
        if (this.fonctionVo == null) { return new FonctionVo(); }
        return this.fonctionVo;
    }

    set __fonctionVo(value: FonctionVo) {
        this.fonctionVo = value;
    }

    get __candidaturesVo(): Array<CandidatureVo> {
        if (this.candidaturesVo == null) { return new Array<CandidatureVo>(); }
        return this.candidaturesVo;
    }

    set __candidaturesVo(value: Array<CandidatureVo>) {
        this.candidaturesVo = value;
    }
}
