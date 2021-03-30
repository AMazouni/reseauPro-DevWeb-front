import {FormationVo} from './Formation.model';

export class EtablissementVo {
  public nom: string;
  public description: string;
  public id: string;
  public ref: string;
  public formationsVo: Array<FormationVo> = new Array<FormationVo>();


}