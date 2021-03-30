import {CommentaireVo} from './Commentaire.model';
import {UtilisateurVo} from './Utilisateur.model';

export class PublicationVo {
  public contenu: string;
  public verified: string;
  public ref: string;
  public id: string;
      public posteParVo: UtilisateurVo = new UtilisateurVo();
  public commentaireVo: Array<CommentaireVo> = new Array<CommentaireVo>();


}