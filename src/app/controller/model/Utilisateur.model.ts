import {ProfesseurInfoVo} from './ProfesseurInfo.model';
import {MessageVo} from './Message.model';

import {EtudiantInfoVo} from './EtudiantInfo.model';
import {CommentaireVo} from './Commentaire.model';
import {ReponseVo} from './Reponse.model';
import {PublicationVo} from './Publication.model';
import {AdminInfoVo} from "./AdminInfo.model";

export class UtilisateurVo {
  public verified: string;
  public about: string;
  public dateNaissance: string;
  public profilVisible: string;
  public tel: string;
  public password: string;
  public role: string;
  public email: string;
  public id: string;
     public dateNaissanceMax: string ;
     public dateNaissanceMin: string ;
      public adminInfoVo: AdminInfoVo = new AdminInfoVo();
      public laureatInfoVo: EtudiantInfoVo = new EtudiantInfoVo();
      public etudiantInfoVo: EtudiantInfoVo = new EtudiantInfoVo();
      public professeurInfoVo: ProfesseurInfoVo = new ProfesseurInfoVo();
      public reponsesVo: ReponseVo = new ReponseVo();
  public messagesRecusVo: Array<MessageVo> = new Array<MessageVo>();
  public messagesEnvoyeVo: Array<MessageVo> = new Array<MessageVo>();
  public comRedigesVo: Array<CommentaireVo> = new Array<CommentaireVo>();
  public publicationsRedigesVo: Array<PublicationVo> = new Array<PublicationVo>();


}
