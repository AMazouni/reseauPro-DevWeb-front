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


    get __contenu(): string {
        return this.contenu;
    }

    set __contenu(value: string) {
        this.contenu = value;
    }

    get __ref(): string {
        return this.ref;
    }

    set __ref(value: string) {
        this.ref = value;
    }

    get __objet(): string {
        return this.objet;
    }

    set __objet(value: string) {
        this.objet = value;
    }

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __emetteurVo(): UtilisateurVo {
        if (this.emetteurVo == null) { return new UtilisateurVo(); }
        return this.emetteurVo;
    }

    set __emetteurVo(value: UtilisateurVo) {
        this.emetteurVo = value;
    }

    get __demandeConcerneVo(): DemandeVo {
        if (this.demandeConcerneVo == null) { return new DemandeVo(); }
        return this.demandeConcerneVo;
    }

    set __demandeConcerneVo(value: DemandeVo) {
        this.demandeConcerneVo = value;
    }

    get __destinataireVo(): Array<UtilisateurVo> {
        if (this.destinataireVo == null) { return new Array<UtilisateurVo>(); }
        return this.destinataireVo;
    }

    set __destinataireVo(value: Array<UtilisateurVo>) {
        this.destinataireVo = value;
    }
}
