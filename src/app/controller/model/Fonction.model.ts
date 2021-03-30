import {EntrepriseVo} from './Entreprise.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';

export class FonctionVo {
  public deteFin: string;
  public titre: string;
  public dateDebut: string;
  public description: string;
  public ref: string;
  public id: string;
     public deteFinMax: string ;
     public deteFinMin: string ;
     public dateDebutMax: string ;
     public dateDebutMin: string ;
      public entrepriseVo: EntrepriseVo = new EntrepriseVo();
      public occupeParVo: EtudiantInfoVo = new EtudiantInfoVo();


}