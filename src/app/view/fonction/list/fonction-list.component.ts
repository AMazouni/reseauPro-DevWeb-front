import { Component, OnInit } from '@angular/core';
import {FonctionVo} from '../../../controller/model/fonction.model';
import {FonctionService} from '../../../controller/service/Fonction.service';
import {EntrepriseVo} from '../../../controller/model/Entreprise.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';

@Component({
  selector: 'app-fonction-list',
  templateUrl: './fonction-list.component.html',
  styleUrls: ['./fonction-list.component.css']
})
export class FonctionlistComponent implements OnInit {

  constructor(private _fonctionService : FonctionService) {}

  get entreprises(): Array<EntrepriseVo> {
   return this.fonctionService.entreprises;
  }
  get occupePars(): Array<EtudiantInfoVo> {
   return this.fonctionService.occupePars;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllentreprises();
      this.findAlloccupePars();
  }

  get fonctionService (): FonctionService {
    return this._fonctionService;
  }

  set fonctionService (value: FonctionService) {
    this._fonctionService = value ;
  }

  get fonctionListe (): Array<FonctionVo> {
    return this.fonctionService.fonctionListe;
  }

  set fonctionListe (value: Array<FonctionVo>) {
    this.fonctionService.fonctionListe = value ;
  }

  get fonctionDetail (): FonctionVo {
    return this.fonctionService.fonctionDetail;
}

  set fonctionDetail (value: FonctionVo) {
  this.fonctionService.fonctionDetail = value ;
}

get fonctionSearch (): FonctionVo {
  return this.fonctionService.fonctionSearch;
}

set fonctionSearch (value: FonctionVo) {
  this.fonctionService.fonctionSearch = value ;
}


get fonctionShowDetail (): boolean  {
  return this.fonctionService.fonctionShowDetail;
}

set fonctionShowDetail (value: boolean ) {
  this.fonctionService.fonctionShowDetail = value ;
}

get fonctionShowCreate (): boolean  {
  return this.fonctionService.fonctionShowCreate;
}

set fonctionShowCreate (value: boolean ) {
  this.fonctionService.fonctionShowCreate = value ;
}
get fonctionShowEdit (): boolean  {
  return this.fonctionService.fonctionShowEdit;
}

set fonctionShowEdit (value: boolean ) {
  this.fonctionService.fonctionShowEdit = value ;
}

  editShow( pojo : FonctionVo ) {
  this.fonctionService.editShow(pojo);

}
  createShow()  {
  this.fonctionService.createShow();

}

   delete( pojo : FonctionVo ) {
    this.fonctionService.delete(pojo);
  }


 detailShow( pojo : FonctionVo ) {
  this.fonctionService.detailShow( pojo);

}

 findFonction(pojo : FonctionVo ) {
  this.fonctionService.findFonction( pojo);

}
 findAll() {
  this.fonctionService.findAll();
}

   findAllentreprises() {
     this.fonctionService.findAllentreprises();
   }
   findAlloccupePars() {
     this.fonctionService.findAlloccupePars();
   }

}
