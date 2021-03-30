import {Component, OnInit} from '@angular/core';
import {CandidatureService} from '../../../controller/service/Candidature.service';
import {CandidatureVo} from '../../../controller/model/candidature.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {OffreVo} from '../../../controller/model/Offre.model';

@Component({
  selector: 'app-candidature-edit',
  templateUrl: './candidature-edit.component.html',
  styleUrls: ['./candidature-edit.component.css']
})
export class CandidatureEditComponent implements OnInit {
  constructor(private candidatureService: CandidatureService) { }

   ngOnInit(): void {
       this.findAllcandidats();
       this.findAllstatuss();
       this.findAlloffreConcernes();
    }

   get candidature(): CandidatureVo {
    return this.candidatureService.candidature;
  }

   get editableCandidatures(): Array<CandidatureVo> {
    return this.candidatureService.editableCandidatures;
   }

   set editableCandidatures(value: Array<CandidatureVo>) {
    this.candidatureService.editableCandidatures = value;
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

   editCandidature() {
    this.candidatureService.editCandidature();
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

     findByref(ref: string) {
      this.candidatureService.findByref(ref);
     }

    editHide() {
      this.candidatureService.editHide();
    }
    

}