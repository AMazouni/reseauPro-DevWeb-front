import {UtilisateurVo} from './Utilisateur.model';
import {PublicationVo} from './Publication.model';

export class CommentaireVo {
  public _comref: string;
  public _contenu: string;
  public _id: string;
  public _publicationVo: PublicationVo ;
  public _posteParVo: UtilisateurVo;


    get comref(): string {
        return this._comref;
    }

    get contenu(): string {
        return this._contenu;
    }

    get id(): string {
        return this._id;
    }

    get publicationVo(): PublicationVo {
        if (this._publicationVo == null) { return new PublicationVo(); }
        return this._publicationVo;
    }

    get posteParVo(): UtilisateurVo {
        if (this._posteParVo == null) { return new UtilisateurVo(); }
        return this._posteParVo;
    }


    set comref(value: string) {
        this._comref = value;
    }

    set contenu(value: string) {
        this._contenu = value;
    }

    set id(value: string) {
        this._id = value;
    }

    set publicationVo(value: PublicationVo) {
        this._publicationVo = value;
    }

    set posteParVo(value: UtilisateurVo) {
        this._posteParVo = value;
    }
}
