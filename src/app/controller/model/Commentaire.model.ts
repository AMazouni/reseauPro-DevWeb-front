import {UtilisateurVo} from './Utilisateur.model';
import {PublicationVo} from './Publication.model';

export class CommentaireVo {
  public comref: string;
  public contenu: string;
  public id: string;
      public publicationVo: PublicationVo = new PublicationVo();
      public posteParVo: UtilisateurVo = new UtilisateurVo();


}