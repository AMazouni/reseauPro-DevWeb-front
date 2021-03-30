import {StatusVo} from './Status.model';
import {MessageVo} from './Message.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {CatDemandeVo} from './CatDemande.model';
import {UtilisateurVo} from "./Utilisateur.model";

export class DemandeVo {
  public _objetDemande: string;
  public _infoSupp: string;
  public _ref: string;
  public _id: string;
  public _categorieDemandeVo: CatDemandeVo = new CatDemandeVo();
  public _demandeParVo: EtudiantInfoVo = new EtudiantInfoVo();
  public _statusVo: StatusVo = new StatusVo();
  public _demandeAVo: EtudiantInfoVo = new EtudiantInfoVo();
  public _messagesVo: Array<MessageVo> = new Array<MessageVo>();


    get objetDemande(): string {
        return this._objetDemande;
    }

    set objetDemande(value: string) {
        this._objetDemande = value;
    }

    get infoSupp(): string {
        return this._infoSupp;
    }

    set infoSupp(value: string) {
        this._infoSupp = value;
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

    get categorieDemandeVo(): CatDemandeVo {
        if (this._categorieDemandeVo == null) {return new CatDemandeVo(); }
        return this._categorieDemandeVo;
    }

    set categorieDemandeVo(value: CatDemandeVo) {
        this._categorieDemandeVo = value;
    }

    get demandeParVo(): EtudiantInfoVo {
        if (this._demandeParVo == null) {return new EtudiantInfoVo(); }
        return this._demandeParVo;
    }

    set demandeParVo(value: EtudiantInfoVo) {
        this._demandeParVo = value;
    }

    get statusVo(): StatusVo {
        if (this._statusVo == null) {return new StatusVo(); }
        return this._statusVo;
    }

    set statusVo(value: StatusVo) {
        this._statusVo = value;
    }

    get demandeAVo(): EtudiantInfoVo {
        if (this._demandeAVo == null) {return new EtudiantInfoVo(); }
        return this._demandeAVo;
    }

    set demandeAVo(value: EtudiantInfoVo) {
        this._demandeAVo = value;
    }

    get messagesVo(): Array<MessageVo> {
        return this._messagesVo;
    }

    set messagesVo(value: Array<MessageVo>) {
        this._messagesVo = value;
    }
}
