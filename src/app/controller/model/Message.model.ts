import {DemandeVo} from './Demande.model';
import {UtilisateurVo} from './Utilisateur.model';

export class MessageVo {
  public _contenu: string;
  public _ref: string;
  public _objet: string;
  public _id: string;
  public _emetteurVo: UtilisateurVo = new UtilisateurVo();
  public _demandeConcerneVo: DemandeVo = new DemandeVo();
  public _destinataireVo: Array<UtilisateurVo> = new Array<UtilisateurVo>();


    get contenu(): string {
        return this._contenu;
    }

    set contenu(value: string) {
        this._contenu = value;
    }

    get ref(): string {
        return this._ref;
    }

    set ref(value: string) {
        this._ref = value;
    }

    get objet(): string {
        return this._objet;
    }

    set objet(value: string) {
        this._objet = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get emetteurVo(): UtilisateurVo {
        if (this._emetteurVo == null) { return new UtilisateurVo(); }
        return this._emetteurVo;
    }

    set emetteurVo(value: UtilisateurVo) {
        this._emetteurVo = value;
    }

    get demandeConcerneVo(): DemandeVo {
        if (this._demandeConcerneVo == null) { return new DemandeVo(); }
        return this._demandeConcerneVo;
    }

    set demandeConcerneVo(value: DemandeVo) {
        this._demandeConcerneVo = value;
    }

    get destinataireVo(): Array<UtilisateurVo> {
        if (this._destinataireVo == null) { return new Array<UtilisateurVo>(); }
        return this._destinataireVo;
    }

    set destinataireVo(value: Array<UtilisateurVo>) {
        this._destinataireVo = value;
    }
}
