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


  get __lettreMotivation(): string {
    return this.lettreMotivation;
  }

  set __lettreMotivation(value: string) {
    this.lettreMotivation = value;
  }

  get __ref(): string {
    return this.ref;
  }

  set __ref(value: string) {
    this.ref = value;
  }

  get __id(): string {
    return this.id;
  }

  set __id(value: string) {
    this.id = value;
  }

  get __candidatVo(): EtudiantInfoVo {
    if (this.candidatVo == null) { return new EtudiantInfoVo(); }
    return this.candidatVo;
  }

  set __candidatVo(value: EtudiantInfoVo) {
    this.candidatVo = value;
  }

  get __statusVo(): StatusVo {
    if (this.statusVo == null) { return new StatusVo(); }
    return this.statusVo;
  }

  set __statusVo(value: StatusVo) {
    this.statusVo = value;
  }

  get __offreConcerneVo(): OffreVo {
    if (this.offreConcerneVo == null) { return new OffreVo(); }
    return this.offreConcerneVo;
  }

  set __offreConcerneVo(value: OffreVo) {
    this.offreConcerneVo = value;
  }
}
