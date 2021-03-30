import { Component, OnInit } from '@angular/core';
import {FonctionVo} from '../../../controller/model/fonction.model';
import {FonctionService} from '../../../controller/service/Fonction.service';

@Component({
  selector: 'app-fonction-details',
  templateUrl: './fonction-details.component.html',
  styleUrls: ['./fonction-details.component.css']
})

export class FonctionDetailsComponent implements OnInit {

  constructor(private _fonctionService : FonctionService) {}


   get fonctionService (): FonctionService {
    return this._fonctionService;
  }

  set fonctionService (value: FonctionService) {
    this._fonctionService = value ;
  }

  get fonctionDetail (): FonctionVo {
    return this.fonctionService.fonctionDetail;
}

  set fonctionDetail (value: FonctionVo) {
  this.fonctionService.fonctionDetail = value ;
}


get fonctionShowDetail (): boolean  {
  return this.fonctionService.fonctionShowDetail;
}

set fonctionShowDetail (value: boolean ) {
  this.fonctionService.fonctionShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.fonctionService.detailHide();
}

}