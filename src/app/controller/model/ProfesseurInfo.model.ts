import {FormationVo} from './Formation.model';
import {UtilisateurVo} from './Utilisateur.model';
import {EtablissementVo} from './Etablissement.model';

export class ProfesseurInfoVo {
  public code: string;
  public prenom: string;
  public nom: string;
  public id: string;
      public etablissementVo: EtablissementVo = new EtablissementVo();
      public compteVo: UtilisateurVo = new UtilisateurVo();
  public responsableDeVo: Array<FormationVo> = new Array<FormationVo>();


    get __code(): string {
        return this.code;
    }


    set __code(value: string) {
        this.code = value;
    }

    get __prenom(): string {
        return this.prenom;
    }

    set __prenom(value: string) {
        this.prenom = value;
    }

    get __nom(): string {
        return this.nom;
    }

    set __nom(value: string) {
        this.nom = value;
    }

    get __id(): string {
        return this.id;
    }

    set __id(value: string) {
        this.id = value;
    }

    get __etablissementVo(): EtablissementVo {
        if (this.etablissementVo == null) { return new EtablissementVo(); }
        return this.etablissementVo;
    }

    set __etablissementVo(value: EtablissementVo) {
        this.etablissementVo = value;
    }

    get __compteVo(): UtilisateurVo {
        if (this.compteVo == null) { return new UtilisateurVo(); }
        return this.compteVo;
    }

    set __compteVo(value: UtilisateurVo) {
        this.compteVo = value;
    }

    get __responsableDeVo(): Array<FormationVo> {
        if (this.responsableDeVo == null) { return new Array<FormationVo>(); }
        return this.responsableDeVo;
    }

    set __responsableDeVo(value: Array<FormationVo>) {
        this.responsableDeVo = value;
    }
}
