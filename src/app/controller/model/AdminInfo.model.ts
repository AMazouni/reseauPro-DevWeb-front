import {UtilisateurVo} from './Utilisateur.model';

export class AdminInfoVo {
  public nom: string;
  public prenom: string;
  public code: string;
  public id: string;
      public compteVo: UtilisateurVo = new UtilisateurVo();


}