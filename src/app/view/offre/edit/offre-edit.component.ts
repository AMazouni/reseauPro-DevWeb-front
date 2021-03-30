import {Component, OnInit} from '@angular/core';
import {OffreService} from '../../../controller/service/Offre.service';
import {OffreVo} from '../../../controller/model/offre.model';
import {FonctionVo} from '../../../controller/model/Fonction.model';
import {CandidatureVo} from '../../../controller/model/Candidature.model';
import {OffreTagsVo} from '../../../controller/model/OffreTags.model';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})
export class OffreEditComponent implements OnInit {
  constructor(private offreService: OffreService) { }

   ngOnInit(): void {
       this.findAlltagss();
    }

   get offre(): OffreVo {
    return this.offreService.offre;
  }

   get editableOffres(): Array<OffreVo> {
    return this.offreService.editableOffres;
   }

   set editableOffres(value: Array<OffreVo>) {
    this.offreService.editableOffres = value;
   }

  get tagss(): Array<OffreTagsVo> {
   return this.offreService.tagss;
  }

  get candidatures(): CandidatureVo {
    return this.offreService.candidatures;
  }

  addcandidatures() {
   return this.offreService.addcandidatures();
  }

  removecandidatures(i: number) {
   this.offreService.removecandidatures(i);
  }
   editOffre() {
    this.offreService.editOffre();
  }
    findAlltagss() {
     this.offreService.findAlltagss();
    }

     findByref(ref: string) {
      this.offreService.findByref(ref);
     }

    editHide() {
      this.offreService.editHide();
    }
    

}