import { Component, OnInit } from '@angular/core';
import {EtablissementVo} from '../../../controller/model/etablissement.model';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {FormationVo} from '../../../controller/model/Formation.model';

@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.css']
})
export class EtablissementlistComponent implements OnInit {

  constructor(private _etablissementService : EtablissementService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get etablissementService (): EtablissementService {
    return this._etablissementService;
  }

  set etablissementService (value: EtablissementService) {
    this._etablissementService = value ;
  }

  get etablissementListe (): Array<EtablissementVo> {
    return this.etablissementService.etablissementListe;
  }

  set etablissementListe (value: Array<EtablissementVo>) {
    this.etablissementService.etablissementListe = value ;
  }

  get etablissementDetail (): EtablissementVo {
    return this.etablissementService.etablissementDetail;
}

  set etablissementDetail (value: EtablissementVo) {
  this.etablissementService.etablissementDetail = value ;
}

get etablissementSearch (): EtablissementVo {
  return this.etablissementService.etablissementSearch;
}

set etablissementSearch (value: EtablissementVo) {
  this.etablissementService.etablissementSearch = value ;
}


get etablissementShowDetail (): boolean  {
  return this.etablissementService.etablissementShowDetail;
}

set etablissementShowDetail (value: boolean ) {
  this.etablissementService.etablissementShowDetail = value ;
}

get etablissementShowCreate (): boolean  {
  return this.etablissementService.etablissementShowCreate;
}

set etablissementShowCreate (value: boolean ) {
  this.etablissementService.etablissementShowCreate = value ;
}
get etablissementShowEdit (): boolean  {
  return this.etablissementService.etablissementShowEdit;
}

set etablissementShowEdit (value: boolean ) {
  this.etablissementService.etablissementShowEdit = value ;
}

  editShow( pojo : EtablissementVo ) {
  this.etablissementService.editShow(pojo);

}
  createShow()  {
  this.etablissementService.createShow();

}

   delete( pojo : EtablissementVo ) {
    this.etablissementService.delete(pojo);
  }


 detailShow( pojo : EtablissementVo ) {
  this.etablissementService.detailShow( pojo);

}

 findEtablissement(pojo : EtablissementVo ) {
  this.etablissementService.findEtablissement( pojo);

}
 findAll() {
  this.etablissementService.findAll();
}


}
