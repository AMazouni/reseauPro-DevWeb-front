import {UtilisateurVo} from './Utilisateur.model';
import {PublicationVo} from './Publication.model';

export class CommentaireVo {
  public comref: string;
  public contenu: string;
  public id: string;
  public publicationVo: PublicationVo ;
  public posteParVo: UtilisateurVo;


    get __comref(): string {
        return this.comref;
    }

    get __contenu(): string {
        return this.contenu;
    }

    get __id(): string {
        return this.id;
    }

    get __publicationVo(): PublicationVo {
        if (this.publicationVo == null) { return new PublicationVo(); }
        return this.publicationVo;
    }

    get __posteParVo(): UtilisateurVo {
        if (this.posteParVo == null) { return new UtilisateurVo(); }
        return this.posteParVo;
    }


    set __comref(value: string) {
        this.comref = value;
    }

    set __contenu(value: string) {
        this.contenu = value;
    }

    set __id(value: string) {
        this.id = value;
    }

    set __publicationVo(value: PublicationVo) {
        this.publicationVo = value;
    }

    set __posteParVo(value: UtilisateurVo) {
        this.posteParVo = value;
    }
}
