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


}