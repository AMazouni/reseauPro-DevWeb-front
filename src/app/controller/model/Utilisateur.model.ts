import {ProfesseurInfoVo} from './ProfesseurInfo.model';
import {MessageVo} from './Message.model';

import {EtudiantInfoVo} from './EtudiantInfo.model';
import {CommentaireVo} from './Commentaire.model';
import {ReponseVo} from './Reponse.model';
import {PublicationVo} from './Publication.model';
import {AdminInfoVo} from "./AdminInfo.model";
import {QuestionVo} from "./Question.model";

export class UtilisateurVo {
  public _verified: string;
  public _about: string;
  public _dateNaissance: string;
  public _profilVisible: string;
  public _tel: string;
  public _password: string;
  public _role: string;
  public _email: string;
  public _id: string;
     public _dateNaissanceMax: string ;
     public _dateNaissanceMin: string ;
      public _adminInfoVo: AdminInfoVo = new AdminInfoVo();
      public _laureatInfoVo: EtudiantInfoVo = new EtudiantInfoVo();
      public _etudiantInfoVo: EtudiantInfoVo = new EtudiantInfoVo();
      public _professeurInfoVo: ProfesseurInfoVo = new ProfesseurInfoVo();
      public _reponsesVo: ReponseVo = new ReponseVo();
  public _messagesRecusVo: Array<MessageVo> = new Array<MessageVo>();
  public _messagesEnvoyeVo: Array<MessageVo> = new Array<MessageVo>();
  public _comRedigesVo: Array<CommentaireVo> = new Array<CommentaireVo>();
  public _publicationsRedigesVo: Array<PublicationVo> = new Array<PublicationVo>();


    get verified(): string {
        return this._verified;
    }

    set verified(value: string) {
        this._verified = value;
    }

    get about(): string {
        return this._about;
    }

    set about(value: string) {
        this._about = value;
    }

    get dateNaissance(): string {
        return this._dateNaissance;
    }

    set dateNaissance(value: string) {
        this._dateNaissance = value;
    }

    get profilVisible(): string {
        return this._profilVisible;
    }

    set profilVisible(value: string) {
        this._profilVisible = value;
    }

    get tel(): string {
        return this._tel;
    }

    set tel(value: string) {
        this._tel = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get dateNaissanceMax(): string {
        return this._dateNaissanceMax;
    }

    set dateNaissanceMax(value: string) {
        this._dateNaissanceMax = value;
    }

    get dateNaissanceMin(): string {
        return this._dateNaissanceMin;
    }

    set dateNaissanceMin(value: string) {
        this._dateNaissanceMin = value;
    }

    get adminInfoVo(): AdminInfoVo {
        if (this._adminInfoVo == null) { return new AdminInfoVo(); }
        return this._adminInfoVo;
    }

    set adminInfoVo(value: AdminInfoVo) {
        this._adminInfoVo = value;
    }

    get laureatInfoVo(): EtudiantInfoVo {
        if (this._laureatInfoVo == null) { return new EtudiantInfoVo(); }
        return this._laureatInfoVo;
    }

    set laureatInfoVo(value: EtudiantInfoVo) {
        this._laureatInfoVo = value;
    }

    get etudiantInfoVo(): EtudiantInfoVo {
        if (this._etudiantInfoVo == null) { return new EtudiantInfoVo(); }
        return this._etudiantInfoVo;
    }

    set etudiantInfoVo(value: EtudiantInfoVo) {
        this._etudiantInfoVo = value;
    }

    get professeurInfoVo(): ProfesseurInfoVo {
        if (this._professeurInfoVo == null) { return new ProfesseurInfoVo(); }
        return this._professeurInfoVo;
    }

    set professeurInfoVo(value: ProfesseurInfoVo) {
        this._professeurInfoVo = value;
    }

    get reponsesVo(): ReponseVo {
        if (this._reponsesVo == null) { return new ReponseVo(); }
        return this._reponsesVo;
    }

    set reponsesVo(value: ReponseVo) {
        this._reponsesVo = value;
    }

    get messagesRecusVo(): Array<MessageVo> {
        if (this._messagesRecusVo == null) { return new Array<MessageVo>(); }
        return this._messagesRecusVo;
    }

    set messagesRecusVo(value: Array<MessageVo>) {
        this._messagesRecusVo = value;
    }

    get messagesEnvoyeVo(): Array<MessageVo> {
        if (this._messagesEnvoyeVo == null) { return new Array<MessageVo>(); }
        return this._messagesEnvoyeVo;
    }

    set messagesEnvoyeVo(value: Array<MessageVo>) {
        this._messagesEnvoyeVo = value;
    }

    get comRedigesVo(): Array<CommentaireVo> {
        if (this._comRedigesVo == null) { return new Array<CommentaireVo>(); }
        return this._comRedigesVo;
    }

    set comRedigesVo(value: Array<CommentaireVo>) {
        this._comRedigesVo = value;
    }

    get publicationsRedigesVo(): Array<PublicationVo> {
        if (this._publicationsRedigesVo == null) { return new Array<PublicationVo>(); }
        return this._publicationsRedigesVo;
    }

    set publicationsRedigesVo(value: Array<PublicationVo>) {
        this._publicationsRedigesVo = value;
    }
}
