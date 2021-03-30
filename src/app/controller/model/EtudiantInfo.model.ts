import {FonctionVo} from './Fonction.model';
import {DemandeVo} from './Demande.model';
import {SexeVo} from './Sexe.model';
import {FormationVo} from './Formation.model';
import {UtilisateurVo} from './Utilisateur.model';

export class EtudiantInfoVo {
  public anneFinEtude: string;
  public prenom: string;
  public nom: string;
  public linkedIn: string;
  public cne: string;
  public codeApogee: string;
  public id: string;
     public anneFinEtudeMax: string ;
     public anneFinEtudeMin: string ;
      public sexeVo: SexeVo;
      public formationActuelleVo: FormationVo;
      public fonctionActuelleVo: FonctionVo ;
      public compteVo: UtilisateurVo;
  public experiencesProVo: Array<FonctionVo>;
  public formationsVo: Array<FormationVo> ;
  public demandeRecuVo: Array<DemandeVo> ;
  public demandesEnvoyeVo: Array<DemandeVo> ;


    get __anneFinEtude(): string {
        if (this.anneFinEtude === '') { return '0'; }
        return this.anneFinEtude;
    }

    set __anneFinEtude(value: string) {

        this.anneFinEtude = value;
    }

    get __prenom(): string {
        return this.prenom;
    }

    set __prenom(value: string) {
        this.prenom = value;
    }

    get __nom(): string {
        return this.nom;
    }

    set __nom(value: string) {
        this.nom = value;
    }

    get __linkedIn(): string {
        return this.linkedIn;
    }

    set __linkedIn(value: string) {
        this.linkedIn = value;
    }

    get __cne(): string {
        return this.cne;
    }

    set __cne(value: string) {
        this.cne = value;
    }

    get __codeApogee(): string {
        return this.codeApogee;
    }

    set __codeApogee(value: string) {
        this.codeApogee = value;
    }

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __anneFinEtudeMax(): string {
        return this.anneFinEtudeMax;
    }

    set __anneFinEtudeMax(value: string) {
        this.anneFinEtudeMax = value;
    }

    get __anneFinEtudeMin(): string {
        return this.anneFinEtudeMin;
    }

    set __anneFinEtudeMin(value: string) {
        this.anneFinEtudeMin = value;
    }

    get __sexeVo(): SexeVo {
        if (this.sexeVo == null) { return new SexeVo(); }
        return this.sexeVo;
    }

    set __sexeVo(value: SexeVo) {

        this.sexeVo = value;
    }

    get __formationActuelleVo(): FormationVo {
        if (this.formationActuelleVo == null) { return new FormationVo(); }
        return this.formationActuelleVo;
    }

    set __formationActuelleVo(value: FormationVo) {
        this.formationActuelleVo = value;
    }

    get __fonctionActuelleVo(): FonctionVo {
        if (this.fonctionActuelleVo == null) { return new FonctionVo(); }
        return this.fonctionActuelleVo;
    }

    set __fonctionActuelleVo(value: FonctionVo) {
        this.fonctionActuelleVo = value;
    }

    get __compteVo(): UtilisateurVo {
        if (this.compteVo == null) { return new UtilisateurVo(); }
        return this.compteVo;
    }

    set __compteVo(value: UtilisateurVo) {
        this.compteVo = value;
    }

    get __experiencesProVo(): Array<FonctionVo> {
        if (this.experiencesProVo == null) { return new Array<FonctionVo>(); }
        return this.experiencesProVo;
    }

    set __experiencesProVo(value: Array<FonctionVo>) {
        this.experiencesProVo = value;
    }

    get __formationsVo(): Array<FormationVo> {
        if (this.formationsVo == null) { return new Array<FormationVo>(); }
        return this.formationsVo;
    }

    set __formationsVo(value: Array<FormationVo>) {
        this.formationsVo = value;
    }

    get __demandeRecuVo(): Array<DemandeVo> {
        if (this.demandeRecuVo == null) { return new Array<DemandeVo>(); }
        return this.demandeRecuVo;
    }

    set __demandeRecuVo(value: Array<DemandeVo>) {
        this.demandeRecuVo = value;
    }

    get __demandesEnvoyeVo(): Array<DemandeVo> {
        if (this.demandesEnvoyeVo == null) { return new Array<DemandeVo>(); }
        return this.demandesEnvoyeVo;
    }

    set __demandesEnvoyeVo(value: Array<DemandeVo>) {
        this.demandesEnvoyeVo = value;
    }
}
