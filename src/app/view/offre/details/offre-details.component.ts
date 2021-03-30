import { Component, OnInit } from '@angular/core';
import {OffreVo} from '../../../controller/model/offre.model';
import {OffreService} from '../../../controller/service/Offre.service';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})

export class OffreDetailsComponent implements OnInit {

  constructor(private _offreService : OffreService) {}


   get offreService (): OffreService {
    return this._offreService;
  }

  set offreService (value: OffreService) {
    this._offreService = value ;
  }

  get offreDetail (): OffreVo {
    return this.offreService.offreDetail;
}

  set offreDetail (value: OffreVo) {
  this.offreService.offreDetail = value ;
}


get offreShowDetail (): boolean  {
  return this.offreService.offreShowDetail;
}

set offreShowDetail (value: boolean ) {
  this.offreService.offreShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.offreService.detailHide();
}

}