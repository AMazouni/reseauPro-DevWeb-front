import {ProfesseurInfoVo} from './ProfesseurInfo.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {EtablissementVo} from './Etablissement.model';

export class FormationVo {
  public intitule: string;
  public ref: string;
  public id: string;
  public description: string;
      public etablissementVo: EtablissementVo = new EtablissementVo();
      public responsableVo: ProfesseurInfoVo = new ProfesseurInfoVo();
  public laureatsVo: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  public etudiantsActVo: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();


}