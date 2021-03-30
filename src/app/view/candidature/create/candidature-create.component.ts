import {Component, OnInit} from '@angular/core';
import {CandidatureService} from '../../../controller/service/Candidature.service';
import {CandidatureVo} from '../../../controller/model/candidature.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {OffreVo} from '../../../controller/model/Offre.model';

@Component({
  selector: 'app-candidature-create',
  templateUrl: './candidature-create.component.html',
  styleUrls: ['./candidature-create.component.css']
})
export class CandidatureCreateComponent implements OnInit {
  constructor(private candidatureService: CandidatureService) { }

   ngOnInit(): void {
      this.findAllcandidats();
      this.findAllstatuss();
      this.findAlloffreConcernes();
    }

   get candidature(): CandidatureVo {
    return this.candidatureService.candidature;
  }

  get candidats(): Array<EtudiantInfoVo> {
   return this.candidatureService.candidats;
  }
  get statuss(): Array<StatusVo> {
   return this.candidatureService.statuss;
  }
  get offreConcernes(): Array<OffreVo> {
   return this.candidatureService.offreConcernes;
  }

   saveCandidature() {
    this.candidatureService.saveCandidature();
  }

   findAllcandidats() {
     this.candidatureService.findAllcandidats();
   }
   findAllstatuss() {
     this.candidatureService.findAllstatuss();
   }
   findAlloffreConcernes() {
     this.candidatureService.findAlloffreConcernes();
   }

get candidatureShowCreate (): boolean  {
  return this.candidatureService.candidatureShowCreate;
}

set candidatureShowCreate (value: boolean ) {
  this.candidatureService.candidatureShowCreate = value ;
}
public createHide(){
       this.candidatureService.createHide();
}
}