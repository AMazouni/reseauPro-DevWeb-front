import {StatusVo} from './Status.model';
import {MessageVo} from './Message.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {CatDemandeVo} from './CatDemande.model';

export class DemandeVo {
  public objetDemande: string;
  public infoSupp: string;
  public ref: string;
  public id: string;
      public categorieDemandeVo: CatDemandeVo = new CatDemandeVo();
      public demandeParVo: EtudiantInfoVo = new EtudiantInfoVo();
      public statusVo: StatusVo = new StatusVo();
      public demandeAVo: EtudiantInfoVo = new EtudiantInfoVo();
  public messagesVo: Array<MessageVo> = new Array<MessageVo>();


}