import {StatusVo} from './Status.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {OffreVo} from './Offre.model';

export class CandidatureVo {
  public lettreMotivation: string;
  public ref: string;
  public id: string;
      public candidatVo: EtudiantInfoVo = new EtudiantInfoVo();
      public statusVo: StatusVo = new StatusVo();
      public offreConcerneVo: OffreVo = new OffreVo();


}