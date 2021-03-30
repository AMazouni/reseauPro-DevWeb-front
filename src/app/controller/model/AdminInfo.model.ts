import {UtilisateurVo} from './Utilisateur.model';

export class AdminInfoVo {
  public nom: string;
  public prenom: string;
  public code: string;
  public id: string;
  public compteVo: UtilisateurVo ;


    get __nom(): string {
        return this.nom;
    }

    set __nom(value: string) {
        this.nom = value;
    }

    get __prenom(): string {
        return this.prenom;
    }

    set __prenom(value: string) {
        this.prenom = value;
    }

    get __code(): string {
        return this.code;
    }

    set __code(value: string) {
        this.code = value;
    }

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __compteVo(): UtilisateurVo {
        if (this.compteVo == null) return new UtilisateurVo()
        return this.compteVo;
    }

    set __compteVo(value: UtilisateurVo) {

        this.compteVo = value;
    }
}
