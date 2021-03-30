import {FormationVo} from './Formation.model';
import {UtilisateurVo} from './Utilisateur.model';
import {EtablissementVo} from './Etablissement.model';
import {DemandeVo} from "./Demande.model";

export class ProfesseurInfoVo {
  public _code: string;
  public _prenom: string;
  public _nom: string;
  public _id: string;
      public _etablissementVo: EtablissementVo = new EtablissementVo();
      public _compteVo: UtilisateurVo = new UtilisateurVo();
  public _responsableDeVo: Array<FormationVo> = new Array<FormationVo>();


    get code(): string {
        return this._code;
    }


    set code(value: string) {
        this._code = value;
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

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get etablissementVo(): EtablissementVo {
        if (this._etablissementVo == null) { return new EtablissementVo(); }
        return this._etablissementVo;
    }

    set etablissementVo(value: EtablissementVo) {
        this._etablissementVo = value;
    }

    get compteVo(): UtilisateurVo {
        if (this._compteVo == null) { return new UtilisateurVo(); }
        return this._compteVo;
    }

    set compteVo(value: UtilisateurVo) {
        this._compteVo = value;
    }

    get responsableDeVo(): Array<FormationVo> {
        if (this._responsableDeVo == null) { return new Array<FormationVo>(); }
        return this._responsableDeVo;
    }

    set responsableDeVo(value: Array<FormationVo>) {
        this._responsableDeVo = value;
    }
}
