import { Component, OnInit } from '@angular/core';
import {CandidatureVo} from '../../../controller/model/candidature.model';
import {CandidatureService} from '../../../controller/service/Candidature.service';
import {StatusVo} from '../../../controller/model/Status.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {OffreVo} from '../../../controller/model/Offre.model';

@Component({
  selector: 'app-candidature-list',
  templateUrl: './candidature-list.component.html',
  styleUrls: ['./candidature-list.component.css']
})
export class CandidaturelistComponent implements OnInit {

  constructor(private _candidatureService : CandidatureService) {}

  get candidats(): Array<EtudiantInfoVo> {
   return this.candidatureService.candidats;
  }
  get statuss(): Array<StatusVo> {
   return this.candidatureService.statuss;
  }
  get offreConcernes(): Array<OffreVo> {
   return this.candidatureService.offreConcernes;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcandidats();
      this.findAllstatuss();
      this.findAlloffreConcernes();
  }

  get candidatureService (): CandidatureService {
    return this._candidatureService;
  }

  set candidatureService (value: CandidatureService) {
    this._candidatureService = value ;
  }

  get candidatureListe (): Array<CandidatureVo> {
    return this.candidatureService.candidatureListe;
  }

  set candidatureListe (value: Array<CandidatureVo>) {
    this.candidatureService.candidatureListe = value ;
  }

  get candidatureDetail (): CandidatureVo {
    return this.candidatureService.candidatureDetail;
}

  set candidatureDetail (value: CandidatureVo) {
  this.candidatureService.candidatureDetail = value ;
}

get candidatureSearch (): CandidatureVo {
  return this.candidatureService.candidatureSearch;
}

set candidatureSearch (value: CandidatureVo) {
  this.candidatureService.candidatureSearch = value ;
}


get candidatureShowDetail (): boolean  {
  return this.candidatureService.candidatureShowDetail;
}

set candidatureShowDetail (value: boolean ) {
  this.candidatureService.candidatureShowDetail = value ;
}

get candidatureShowCreate (): boolean  {
  return this.candidatureService.candidatureShowCreate;
}

set candidatureShowCreate (value: boolean ) {
  this.candidatureService.candidatureShowCreate = value ;
}
get candidatureShowEdit (): boolean  {
  return this.candidatureService.candidatureShowEdit;
}

set candidatureShowEdit (value: boolean ) {
  this.candidatureService.candidatureShowEdit = value ;
}

  editShow( pojo : CandidatureVo ) {
  this.candidatureService.editShow(pojo);

}
  createShow()  {
  this.candidatureService.createShow();

}

   delete( pojo : CandidatureVo ) {
    this.candidatureService.delete(pojo);
  }


 detailShow( pojo : CandidatureVo ) {
  this.candidatureService.detailShow( pojo);

}

 findCandidature(pojo : CandidatureVo ) {
  this.candidatureService.findCandidature( pojo);

}
 findAll() {
  this.candidatureService.findAll();
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

}
