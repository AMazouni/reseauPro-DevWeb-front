import {ProfesseurInfoVo} from './ProfesseurInfo.model';
import {MessageVo} from './Message.model';

import {EtudiantInfoVo} from './EtudiantInfo.model';
import {CommentaireVo} from './Commentaire.model';
import {ReponseVo} from './Reponse.model';
import {PublicationVo} from './Publication.model';
import {AdminInfoVo} from './AdminInfo.model';

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
      public adminInfoVo: AdminInfoVo;
      public laureatInfoVo: EtudiantInfoVo;
      public etudiantInfoVo: EtudiantInfoVo;
      public professeurInfoVo: ProfesseurInfoVo;
      public reponsesVo: ReponseVo;
  public messagesRecusVo: Array<MessageVo>;
  public messagesEnvoyeVo: Array<MessageVo>;
  public comRedigesVo: Array<CommentaireVo>;
  public publicationsRedigesVo: Array<PublicationVo>;


    get __verified(): string {
        return this.verified;
    }

    set __verified(value: string) {
        this.verified = value;
    }

    get __about(): string {
        return this.about;
    }

    set __about(value: string) {
        this.about = value;
    }

    get __dateNaissance(): string {
        return this.dateNaissance;
    }

    set __dateNaissance(value: string) {
        this.dateNaissance = value;
    }

    get __profilVisible(): string {
        return this.profilVisible;
    }

    set __profilVisible(value: string) {
        this.profilVisible = value;
    }

    get __tel(): string {
        return this.tel;
    }

    set __tel(value: string) {
        this.tel = value;
    }

    get __password(): string {
        return this.password;
    }

    set __password(value: string) {
        this.password = value;
    }

    get __role(): string {
        return this.role;
    }

    set __role(value: string) {
        this.role = value;
    }

    get __email(): string {
        return this.email;
    }

    set __email(value: string) {
        this.email = value;
    }

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __dateNaissanceMax(): string {
        return this.dateNaissanceMax;
    }

    set __dateNaissanceMax(value: string) {
        this.dateNaissanceMax = value;
    }

    get __dateNaissanceMin(): string {
        return this.dateNaissanceMin;
    }

    set __dateNaissanceMin(value: string) {
        this.dateNaissanceMin = value;
    }

    get __adminInfoVo(): AdminInfoVo {
        if (this.adminInfoVo == null) { return new AdminInfoVo(); }
        return this.adminInfoVo;
    }

    set __adminInfoVo(value: AdminInfoVo) {
        this.adminInfoVo = value;
    }

    get __laureatInfoVo(): EtudiantInfoVo {
        if (this.laureatInfoVo == null) { return new EtudiantInfoVo(); }
        return this.laureatInfoVo;
    }

    set __laureatInfoVo(value: EtudiantInfoVo) {
        this.laureatInfoVo = value;
    }

    get __etudiantInfoVo(): EtudiantInfoVo {
        if (this.etudiantInfoVo == null) { return new EtudiantInfoVo(); }
        return this.etudiantInfoVo;
    }

    set __etudiantInfoVo(value: EtudiantInfoVo) {
        this.etudiantInfoVo = value;
    }

    get __professeurInfoVo(): ProfesseurInfoVo {
        if (this.professeurInfoVo == null) { return new ProfesseurInfoVo(); }
        return this.professeurInfoVo;
    }

    set __professeurInfoVo(value: ProfesseurInfoVo) {
        this.professeurInfoVo = value;
    }

    get __reponsesVo(): ReponseVo {
        if (this.reponsesVo == null) { return new ReponseVo(); }
        return this.reponsesVo;
    }

    set __reponsesVo(value: ReponseVo) {
        this.reponsesVo = value;
    }

    get __messagesRecusVo(): Array<MessageVo> {
        if (this.messagesRecusVo == null) { return new Array<MessageVo>(); }
        return this.messagesRecusVo;
    }

    set __messagesRecusVo(value: Array<MessageVo>) {
        this.messagesRecusVo = value;
    }

    get __messagesEnvoyeVo(): Array<MessageVo> {
        if (this.messagesEnvoyeVo == null) { return new Array<MessageVo>(); }
        return this.messagesEnvoyeVo;
    }

    set __messagesEnvoyeVo(value: Array<MessageVo>) {
        this.messagesEnvoyeVo = value;
    }

    get __comRedigesVo(): Array<CommentaireVo> {
        if (this.comRedigesVo == null) { return new Array<CommentaireVo>(); }
        return this.comRedigesVo;
    }

    set __comRedigesVo(value: Array<CommentaireVo>) {
        this.comRedigesVo = value;
    }

    get __publicationsRedigesVo(): Array<PublicationVo> {
        if (this.publicationsRedigesVo == null) { return new Array<PublicationVo>(); }
        return this.publicationsRedigesVo;
    }

    set __publicationsRedigesVo(value: Array<PublicationVo>) {
        this.publicationsRedigesVo = value;
    }
}
