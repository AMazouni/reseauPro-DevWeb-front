import { Component, OnInit } from '@angular/core';
import {DemandeVo} from '../../../controller/model/demande.model';
import {DemandeService} from '../../../controller/service/Demande.service';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})

export class DemandeDetailsComponent implements OnInit {

  constructor(private _demandeService : DemandeService) {}


   get demandeService (): DemandeService {
    return this._demandeService;
  }

  set demandeService (value: DemandeService) {
    this._demandeService = value ;
  }

  get demandeDetail (): DemandeVo {
    return this.demandeService.demandeDetail;
}

  set demandeDetail (value: DemandeVo) {
  this.demandeService.demandeDetail = value ;
}


get demandeShowDetail (): boolean  {
  return this.demandeService.demandeShowDetail;
}

set demandeShowDetail (value: boolean ) {
  this.demandeService.demandeShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.demandeService.detailHide();
}

}