import { Component, OnInit } from '@angular/core';
import {EntrepriseVo} from '../../../controller/model/entreprise.model';
import {EntrepriseService} from '../../../controller/service/Entreprise.service';
import {FonctionVo} from '../../../controller/model/Fonction.model';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriselistComponent implements OnInit {

  constructor(private _entrepriseService : EntrepriseService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get entrepriseService (): EntrepriseService {
    return this._entrepriseService;
  }

  set entrepriseService (value: EntrepriseService) {
    this._entrepriseService = value ;
  }

  get entrepriseListe (): Array<EntrepriseVo> {
    return this.entrepriseService.entrepriseListe;
  }

  set entrepriseListe (value: Array<EntrepriseVo>) {
    this.entrepriseService.entrepriseListe = value ;
  }

  get entrepriseDetail (): EntrepriseVo {
    return this.entrepriseService.entrepriseDetail;
}

  set entrepriseDetail (value: EntrepriseVo) {
  this.entrepriseService.entrepriseDetail = value ;
}

get entrepriseSearch (): EntrepriseVo {
  return this.entrepriseService.entrepriseSearch;
}

set entrepriseSearch (value: EntrepriseVo) {
  this.entrepriseService.entrepriseSearch = value ;
}


get entrepriseShowDetail (): boolean  {
  return this.entrepriseService.entrepriseShowDetail;
}

set entrepriseShowDetail (value: boolean ) {
  this.entrepriseService.entrepriseShowDetail = value ;
}

get entrepriseShowCreate (): boolean  {
  return this.entrepriseService.entrepriseShowCreate;
}

set entrepriseShowCreate (value: boolean ) {
  this.entrepriseService.entrepriseShowCreate = value ;
}
get entrepriseShowEdit (): boolean  {
  return this.entrepriseService.entrepriseShowEdit;
}

set entrepriseShowEdit (value: boolean ) {
  this.entrepriseService.entrepriseShowEdit = value ;
}

  editShow( pojo : EntrepriseVo ) {
  this.entrepriseService.editShow(pojo);

}
  createShow()  {
  this.entrepriseService.createShow();

}

   delete( pojo : EntrepriseVo ) {
    this.entrepriseService.delete(pojo);
  }


 detailShow( pojo : EntrepriseVo ) {
  this.entrepriseService.detailShow( pojo);

}

 findEntreprise(pojo : EntrepriseVo ) {
  this.entrepriseService.findEntreprise( pojo);

}
 findAll() {
  this.entrepriseService.findAll();
}


}
