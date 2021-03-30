import {UtilisateurVo} from './Utilisateur.model';

export class AdminInfoVo {
  public _nom: string;
  public _prenom: string;
  public _code: string;
  public _id: string;
      public _compteVo: UtilisateurVo ;


    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get compteVo(): UtilisateurVo {
        if (this._compteVo == null) return new UtilisateurVo()
        return this._compteVo;
    }

    set compteVo(value: UtilisateurVo) {

        this._compteVo = value;
    }
}
