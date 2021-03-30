import { Component, OnInit } from '@angular/core';
import {OffreVo} from '../../../controller/model/offre.model';
import {OffreService} from '../../../controller/service/Offre.service';
import {FonctionVo} from '../../../controller/model/Fonction.model';
import {CandidatureVo} from '../../../controller/model/Candidature.model';
import {OffreTagsVo} from '../../../controller/model/OffreTags.model';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffrelistComponent implements OnInit {

  constructor(private _offreService : OffreService) {}

  get tagss(): Array<OffreTagsVo> {
   return this.offreService.tagss;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAlltagss();
  }

  get offreService (): OffreService {
    return this._offreService;
  }

  set offreService (value: OffreService) {
    this._offreService = value ;
  }

  get offreListe (): Array<OffreVo> {
    return this.offreService.offreListe;
  }

  set offreListe (value: Array<OffreVo>) {
    this.offreService.offreListe = value ;
  }

  get offreDetail (): OffreVo {
    return this.offreService.offreDetail;
}

  set offreDetail (value: OffreVo) {
  this.offreService.offreDetail = value ;
}

get offreSearch (): OffreVo {
  return this.offreService.offreSearch;
}

set offreSearch (value: OffreVo) {
  this.offreService.offreSearch = value ;
}


get offreShowDetail (): boolean  {
  return this.offreService.offreShowDetail;
}

set offreShowDetail (value: boolean ) {
  this.offreService.offreShowDetail = value ;
}

get offreShowCreate (): boolean  {
  return this.offreService.offreShowCreate;
}

set offreShowCreate (value: boolean ) {
  this.offreService.offreShowCreate = value ;
}
get offreShowEdit (): boolean  {
  return this.offreService.offreShowEdit;
}

set offreShowEdit (value: boolean ) {
  this.offreService.offreShowEdit = value ;
}

  editShow( pojo : OffreVo ) {
  this.offreService.editShow(pojo);

}
  createShow()  {
  this.offreService.createShow();

}

   delete( pojo : OffreVo ) {
    this.offreService.delete(pojo);
  }


 detailShow( pojo : OffreVo ) {
  this.offreService.detailShow( pojo);

}

 findOffre(pojo : OffreVo ) {
  this.offreService.findOffre( pojo);

}
 findAll() {
  this.offreService.findAll();
}

   findAlltagss() {
     this.offreService.findAlltagss();
   }

}
