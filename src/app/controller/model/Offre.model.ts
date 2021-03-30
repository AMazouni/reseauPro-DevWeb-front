import {FonctionVo} from './Fonction.model';
import {CandidatureVo} from './Candidature.model';
import {OffreTagsVo} from './OffreTags.model';

export class OffreVo {
  public dateOffre: string;
  public titre: string;
  public infoSup: string;
  public type: string;
  public dernierDelai: string;
  public ref: string;
  public id: string;
     public dateOffreMax: string ;
     public dateOffreMin: string ;
     public dernierDelaiMax: string ;
     public dernierDelaiMin: string ;
      public tagsVo: OffreTagsVo = new OffreTagsVo();
      public fonctionVo: FonctionVo = new FonctionVo();
  public candidaturesVo: Array<CandidatureVo> = new Array<CandidatureVo>();


}