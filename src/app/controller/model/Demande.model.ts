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


    get __objetDemande(): string {
        return this.objetDemande;
    }

    set __objetDemande(value: string) {
        this.objetDemande = value;
    }

    get __infoSupp(): string {
        return this.infoSupp;
    }

    set __infoSupp(value: string) {
        this.infoSupp = value;
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

    get __categorieDemandeVo(): CatDemandeVo {
        if (this.categorieDemandeVo == null) {return new CatDemandeVo(); }
        return this.categorieDemandeVo;
    }

    set __categorieDemandeVo(value: CatDemandeVo) {
        this.categorieDemandeVo = value;
    }

    get __demandeParVo(): EtudiantInfoVo {
        if (this.demandeParVo == null) {return new EtudiantInfoVo(); }
        return this.demandeParVo;
    }

    set __demandeParVo(value: EtudiantInfoVo) {
        this.demandeParVo = value;
    }

    get __statusVo(): StatusVo {
        if (this.statusVo == null) {return new StatusVo(); }
        return this.statusVo;
    }

    set __statusVo(value: StatusVo) {
        this.statusVo = value;
    }

    get __demandeAVo(): EtudiantInfoVo {
        if (this.demandeAVo == null) {return new EtudiantInfoVo(); }
        return this.demandeAVo;
    }

    set __demandeAVo(value: EtudiantInfoVo) {
        this.demandeAVo = value;
    }

    get __messagesVo(): Array<MessageVo> {
        if (this.messagesVo == null) {return new Array<MessageVo>(); }
        return this.messagesVo;
    }

    set __messagesVo(value: Array<MessageVo>) {
        this.messagesVo = value;
    }
}
