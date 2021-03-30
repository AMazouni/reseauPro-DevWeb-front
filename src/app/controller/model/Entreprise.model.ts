import {FonctionVo} from './Fonction.model';

export class EntrepriseVo {
  public Localisation: string;
  public description: string;
  public ref: string;
  public nom: string;
  public id: string;
  public fonctionsLaureatVo: Array<FonctionVo> = new Array<FonctionVo>();


}