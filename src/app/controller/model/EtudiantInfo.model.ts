import {FonctionVo} from './Fonction.model';
import {DemandeVo} from './Demande.model';
import {SexeVo} from './Sexe.model';
import {FormationVo} from './Formation.model';
import {UtilisateurVo} from './Utilisateur.model';

export class EtudiantInfoVo {
  public anneFinEtude: string;
  public prenom: string;
  public nom: string;
  public linkedIn: string;
  public cne: string;
  public codeApogee: string;
  public id: string;
     public anneFinEtudeMax: string ;
     public anneFinEtudeMin: string ;
      public sexeVo: SexeVo = new SexeVo();
      public formationActuelleVo: FormationVo = new FormationVo();
      public fonctionActuelleVo: FonctionVo = new FonctionVo();
      public compteVo: UtilisateurVo = new UtilisateurVo();
  public experiencesProVo: Array<FonctionVo> = new Array<FonctionVo>();
  public formationsVo: Array<FormationVo> = new Array<FormationVo>();
  public demandeRecuVo: Array<DemandeVo> = new Array<DemandeVo>();
  public demandesEnvoyeVo: Array<DemandeVo> = new Array<DemandeVo>();


}