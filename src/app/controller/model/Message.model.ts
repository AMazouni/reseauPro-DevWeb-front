import {DemandeVo} from './Demande.model';
import {UtilisateurVo} from './Utilisateur.model';

export class MessageVo {
  public contenu: string;
  public ref: string;
  public objet: string;
  public id: string;
      public emetteurVo: UtilisateurVo = new UtilisateurVo();
      public demandeConcerneVo: DemandeVo = new DemandeVo();
  public destinataireVo: Array<UtilisateurVo> = new Array<UtilisateurVo>();


}