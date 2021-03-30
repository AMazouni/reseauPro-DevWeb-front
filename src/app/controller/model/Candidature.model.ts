import {StatusVo} from './Status.model';
import {EtudiantInfoVo} from './EtudiantInfo.model';
import {OffreVo} from './Offre.model';
import {PublicationVo} from "./Publication.model";

export class CandidatureVo {
  public _lettreMotivation: string;
  public _ref: string;
  public _id: string;
  public _candidatVo: EtudiantInfoVo = new EtudiantInfoVo();
  public _statusVo: StatusVo = new StatusVo();
  public _offreConcerneVo: OffreVo = new OffreVo();


  get lettreMotivation(): string {
    return this._lettreMotivation;
  }

  set lettreMotivation(value: string) {
    this._lettreMotivation = value;
  }

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get candidatVo(): EtudiantInfoVo {
    if (this._candidatVo == null) { return new EtudiantInfoVo(); }
    return this._candidatVo;
  }

  set candidatVo(value: EtudiantInfoVo) {
    this._candidatVo = value;
  }

  get statusVo(): StatusVo {
    if (this._statusVo == null) { return new StatusVo(); }
    return this._statusVo;
  }

  set statusVo(value: StatusVo) {
    this._statusVo = value;
  }

  get offreConcerneVo(): OffreVo {
    if (this._offreConcerneVo == null) { return new OffreVo(); }
    return this._offreConcerneVo;
  }

  set offreConcerneVo(value: OffreVo) {
    this._offreConcerneVo = value;
  }
}
