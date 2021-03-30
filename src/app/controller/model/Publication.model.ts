import {CommentaireVo} from './Commentaire.model';
import {UtilisateurVo} from './Utilisateur.model';

export class PublicationVo {
  public contenu: string;
  public verified: string;
  public ref: string;
  public id: string;
  public posteParVo: UtilisateurVo = new UtilisateurVo();
  public commentaireVo: Array<CommentaireVo> = new Array<CommentaireVo>();


  get __contenu(): string {
    return this.contenu;
  }

  set __contenu(value: string) {
    this.contenu = value;
  }

  get __verified(): string {
    return this.verified;
  }

  set __verified(value: string) {
    this.verified = value;
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

  get __posteParVo(): UtilisateurVo {
    if (this.posteParVo == null) { return new UtilisateurVo(); }
    return this.posteParVo;
  }

  set __posteParVo(value: UtilisateurVo) {
    this.posteParVo = value;
  }

  get __commentaireVo(): Array<CommentaireVo> {
    if (this.commentaireVo == null) { return new Array<CommentaireVo>(); }
    return this.commentaireVo;
  }

  set __commentaireVo(value: Array<CommentaireVo>) {
    this.commentaireVo = value;
  }
}
