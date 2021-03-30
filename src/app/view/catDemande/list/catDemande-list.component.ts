import { Component, OnInit } from '@angular/core';
import {CatDemandeVo} from '../../../controller/model/catDemande.model';
import {CatDemandeService} from '../../../controller/service/CatDemande.service';

@Component({
  selector: 'app-catDemande-list',
  templateUrl: './catDemande-list.component.html',
  styleUrls: ['./catDemande-list.component.css']
})
export class CatDemandelistComponent implements OnInit {

  constructor(private _catDemandeService : CatDemandeService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get catDemandeService (): CatDemandeService {
    return this._catDemandeService;
  }

  set catDemandeService (value: CatDemandeService) {
    this._catDemandeService = value ;
  }

  get catDemandeListe (): Array<CatDemandeVo> {
    return this.catDemandeService.catDemandeListe;
  }

  set catDemandeListe (value: Array<CatDemandeVo>) {
    this.catDemandeService.catDemandeListe = value ;
  }

  get catDemandeDetail (): CatDemandeVo {
    return this.catDemandeService.catDemandeDetail;
}

  set catDemandeDetail (value: CatDemandeVo) {
  this.catDemandeService.catDemandeDetail = value ;
}

get catDemandeSearch (): CatDemandeVo {
  return this.catDemandeService.catDemandeSearch;
}

set catDemandeSearch (value: CatDemandeVo) {
  this.catDemandeService.catDemandeSearch = value ;
}


get catDemandeShowDetail (): boolean  {
  return this.catDemandeService.catDemandeShowDetail;
}

set catDemandeShowDetail (value: boolean ) {
  this.catDemandeService.catDemandeShowDetail = value ;
}

get catDemandeShowCreate (): boolean  {
  return this.catDemandeService.catDemandeShowCreate;
}

set catDemandeShowCreate (value: boolean ) {
  this.catDemandeService.catDemandeShowCreate = value ;
}
get catDemandeShowEdit (): boolean  {
  return this.catDemandeService.catDemandeShowEdit;
}

set catDemandeShowEdit (value: boolean ) {
  this.catDemandeService.catDemandeShowEdit = value ;
}

  editShow( pojo : CatDemandeVo ) {
  this.catDemandeService.editShow(pojo);

}
  createShow()  {
  this.catDemandeService.createShow();

}

   delete( pojo : CatDemandeVo ) {
    this.catDemandeService.delete(pojo);
  }


 detailShow( pojo : CatDemandeVo ) {
  this.catDemandeService.detailShow( pojo);

}

 findCatDemande(pojo : CatDemandeVo ) {
  this.catDemandeService.findCatDemande( pojo);

}
 findAll() {
  this.catDemandeService.findAll();
}


}
