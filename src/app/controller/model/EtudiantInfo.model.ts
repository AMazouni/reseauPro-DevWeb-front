import {FonctionVo} from './Fonction.model';
import {DemandeVo} from './Demande.model';
import {SexeVo} from './Sexe.model';
import {FormationVo} from './Formation.model';
import {UtilisateurVo} from './Utilisateur.model';

export class EtudiantInfoVo {
  public _anneFinEtude: string;
  public _prenom: string;
  public _nom: string;
  public _linkedIn: string;
  public _cne: string;
  public _codeApogee: string;
  public _id: string;
     public _anneFinEtudeMax: string ;
     public _anneFinEtudeMin: string ;
      public _sexeVo: SexeVo;
      public _formationActuelleVo: FormationVo;
      public _fonctionActuelleVo: FonctionVo ;
      public _compteVo: UtilisateurVo;
  public _experiencesProVo: Array<FonctionVo>;
  public _formationsVo: Array<FormationVo> ;
  public _demandeRecuVo: Array<DemandeVo> ;
  public _demandesEnvoyeVo: Array<DemandeVo> ;


    get anneFinEtude(): string {
        if (this._anneFinEtude === '') { return '0'; }
        return this._anneFinEtude;
    }

    set anneFinEtude(value: string) {

        this._anneFinEtude = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get linkedIn(): string {
        return this._linkedIn;
    }

    set linkedIn(value: string) {
        this._linkedIn = value;
    }

    get cne(): string {
        return this._cne;
    }

    set cne(value: string) {
        this._cne = value;
    }

    get codeApogee(): string {
        return this._codeApogee;
    }

    set codeApogee(value: string) {
        this._codeApogee = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get anneFinEtudeMax(): string {
        return this._anneFinEtudeMax;
    }

    set anneFinEtudeMax(value: string) {
        this._anneFinEtudeMax = value;
    }

    get anneFinEtudeMin(): string {
        return this._anneFinEtudeMin;
    }

    set anneFinEtudeMin(value: string) {
        this._anneFinEtudeMin = value;
    }

    get sexeVo(): SexeVo {
        if (this._sexeVo == null) { return new SexeVo(); }
        return this._sexeVo;
    }

    set sexeVo(value: SexeVo) {

        this._sexeVo = value;
    }

    get formationActuelleVo(): FormationVo {
        if (this._formationActuelleVo == null) { return new FormationVo(); }
        return this._formationActuelleVo;
    }

    set formationActuelleVo(value: FormationVo) {
        this._formationActuelleVo = value;
    }

    get fonctionActuelleVo(): FonctionVo {
        if (this._fonctionActuelleVo == null) { return new FonctionVo(); }
        return this._fonctionActuelleVo;
    }

    set fonctionActuelleVo(value: FonctionVo) {
        this._fonctionActuelleVo = value;
    }

    get compteVo(): UtilisateurVo {
        if (this._compteVo == null) { return new UtilisateurVo(); }
        return this._compteVo;
    }

    set compteVo(value: UtilisateurVo) {
        this._compteVo = value;
    }

    get experiencesProVo(): Array<FonctionVo> {
        if (this._experiencesProVo == null) { return new Array<FonctionVo>(); }
        return this._experiencesProVo;
    }

    set experiencesProVo(value: Array<FonctionVo>) {
        this._experiencesProVo = value;
    }

    get formationsVo(): Array<FormationVo> {
        if (this._formationsVo == null) { return new Array<FormationVo>(); }
        return this._formationsVo;
    }

    set formationsVo(value: Array<FormationVo>) {
        this._formationsVo = value;
    }

    get demandeRecuVo(): Array<DemandeVo> {
        if (this._demandeRecuVo == null) { return new Array<DemandeVo>(); }
        return this._demandeRecuVo;
    }

    set demandeRecuVo(value: Array<DemandeVo>) {
        this._demandeRecuVo = value;
    }

    get demandesEnvoyeVo(): Array<DemandeVo> {
        if (this._demandesEnvoyeVo == null) { return new Array<DemandeVo>(); }
        return this._demandesEnvoyeVo;
    }

    set demandesEnvoyeVo(value: Array<DemandeVo>) {
        this._demandesEnvoyeVo = value;
    }
}
