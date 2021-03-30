import {CommentaireVo} from './Commentaire.model';
import {UtilisateurVo} from './Utilisateur.model';

export class PublicationVo {
  public _contenu: string;
  public _verified: string;
  public _ref: string;
  public _id: string;
  public _posteParVo: UtilisateurVo = new UtilisateurVo();
  public _commentaireVo: Array<CommentaireVo> = new Array<CommentaireVo>();


  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  get verified(): string {
    return this._verified;
  }

  set verified(value: string) {
    this._verified = value;
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

  get posteParVo(): UtilisateurVo {
    if (this._posteParVo == null) { return new UtilisateurVo(); }
    return this._posteParVo;
  }

  set posteParVo(value: UtilisateurVo) {
    this._posteParVo = value;
  }

  get commentaireVo(): Array<CommentaireVo> {
    if (this._commentaireVo == null) { return new Array<CommentaireVo>(); }
    return this._commentaireVo;
  }

  set commentaireVo(value: Array<CommentaireVo>) {
    this._commentaireVo = value;
  }
}
