import { Component, OnInit } from '@angular/core';
import {CatDemandeVo} from '../../../controller/model/catDemande.model';
import {CatDemandeService} from '../../../controller/service/CatDemande.service';

@Component({
  selector: 'app-catDemande-details',
  templateUrl: './catDemande-details.component.html',
  styleUrls: ['./catDemande-details.component.css']
})

export class CatDemandeDetailsComponent implements OnInit {

  constructor(private _catDemandeService : CatDemandeService) {}


   get catDemandeService (): CatDemandeService {
    return this._catDemandeService;
  }

  set catDemandeService (value: CatDemandeService) {
    this._catDemandeService = value ;
  }

  get catDemandeDetail (): CatDemandeVo {
    return this.catDemandeService.catDemandeDetail;
}

  set catDemandeDetail (value: CatDemandeVo) {
  this.catDemandeService.catDemandeDetail = value ;
}


get catDemandeShowDetail (): boolean  {
  return this.catDemandeService.catDemandeShowDetail;
}

set catDemandeShowDetail (value: boolean ) {
  this.catDemandeService.catDemandeShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.catDemandeService.detailHide();
}

}