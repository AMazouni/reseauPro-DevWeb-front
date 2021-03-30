import { Component, OnInit } from '@angular/core';
import {EtablissementVo} from '../../../controller/model/etablissement.model';
import {EtablissementService} from '../../../controller/service/Etablissement.service';

@Component({
  selector: 'app-etablissement-details',
  templateUrl: './etablissement-details.component.html',
  styleUrls: ['./etablissement-details.component.css']
})

export class EtablissementDetailsComponent implements OnInit {

  constructor(private _etablissementService : EtablissementService) {}


   get etablissementService (): EtablissementService {
    return this._etablissementService;
  }

  set etablissementService (value: EtablissementService) {
    this._etablissementService = value ;
  }

  get etablissementDetail (): EtablissementVo {
    return this.etablissementService.etablissementDetail;
}

  set etablissementDetail (value: EtablissementVo) {
  this.etablissementService.etablissementDetail = value ;
}


get etablissementShowDetail (): boolean  {
  return this.etablissementService.etablissementShowDetail;
}

set etablissementShowDetail (value: boolean ) {
  this.etablissementService.etablissementShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.etablissementService.detailHide();
}

}