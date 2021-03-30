import {Component, OnInit} from '@angular/core';
import {OffreService} from '../../../controller/service/Offre.service';
import {OffreVo} from '../../../controller/model/offre.model';
import {FonctionVo} from '../../../controller/model/Fonction.model';
import {CandidatureVo} from '../../../controller/model/Candidature.model';
import {OffreTagsVo} from '../../../controller/model/OffreTags.model';

@Component({
  selector: 'app-offre-create',
  templateUrl: './offre-create.component.html',
  styleUrls: ['./offre-create.component.css']
})
export class OffreCreateComponent implements OnInit {
  constructor(private offreService: OffreService) { }

   ngOnInit(): void {
      this.findAlltagss();
    }

   get offre(): OffreVo {
    return this.offreService.offre;
  }

  get tagss(): Array<OffreTagsVo> {
   return this.offreService.tagss;
  }

  get candidatures(): CandidatureVo {
    return this.offreService.candidatures;
  }

  addCandidature() {
   return this.offreService.addcandidatures();
  }

  removeCandidature(i: number) {
   this.offreService.removecandidatures(i);
  }
   saveOffre() {
    this.offreService.saveOffre();
  }

   findAlltagss() {
     this.offreService.findAlltagss();
   }

get offreShowCreate (): boolean  {
  return this.offreService.offreShowCreate;
}

set offreShowCreate (value: boolean ) {
  this.offreService.offreShowCreate = value ;
}
public createHide(){
       this.offreService.createHide();
}
}