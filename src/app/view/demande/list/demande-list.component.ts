import { Component, OnInit } from '@angular/core';
import {DemandeVo} from '../../../controller/model/demande.model';
import {DemandeService} from '../../../controller/service/Demande.service';
import {StatusVo} from '../../../controller/model/Status.model';
import {MessageVo} from '../../../controller/model/Message.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {CatDemandeVo} from '../../../controller/model/CatDemande.model';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandelistComponent implements OnInit {

  constructor(private _demandeService : DemandeService) {}

  get categorieDemandes(): Array<CatDemandeVo> {
   return this.demandeService.categorieDemandes;
  }
  get demandePars(): Array<EtudiantInfoVo> {
   return this.demandeService.demandePars;
  }
  get statuss(): Array<StatusVo> {
   return this.demandeService.statuss;
  }
  get demandeAs(): Array<EtudiantInfoVo> {
   return this.demandeService.demandeAs;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllcategorieDemandes();
      this.findAlldemandePars();
      this.findAllstatuss();
      this.findAlldemandeAs();
  }

  get demandeService (): DemandeService {
    return this._demandeService;
  }

  set demandeService (value: DemandeService) {
    this._demandeService = value ;
  }

  get demandeListe (): Array<DemandeVo> {
    return this.demandeService.demandeListe;
  }

  set demandeListe (value: Array<DemandeVo>) {
    this.demandeService.demandeListe = value ;
  }

  get demandeDetail (): DemandeVo {
    return this.demandeService.demandeDetail;
}

  set demandeDetail (value: DemandeVo) {
  this.demandeService.demandeDetail = value ;
}

get demandeSearch (): DemandeVo {
  return this.demandeService.demandeSearch;
}

set demandeSearch (value: DemandeVo) {
  this.demandeService.demandeSearch = value ;
}


get demandeShowDetail (): boolean  {
  return this.demandeService.demandeShowDetail;
}

set demandeShowDetail (value: boolean ) {
  this.demandeService.demandeShowDetail = value ;
}

get demandeShowCreate (): boolean  {
  return this.demandeService.demandeShowCreate;
}

set demandeShowCreate (value: boolean ) {
  this.demandeService.demandeShowCreate = value ;
}
get demandeShowEdit (): boolean  {
  return this.demandeService.demandeShowEdit;
}

set demandeShowEdit (value: boolean ) {
  this.demandeService.demandeShowEdit = value ;
}

  editShow( pojo : DemandeVo ) {
  this.demandeService.editShow(pojo);

}
  createShow()  {
  this.demandeService.createShow();

}

   delete( pojo : DemandeVo ) {
    this.demandeService.delete(pojo);
  }


 detailShow( pojo : DemandeVo ) {
  this.demandeService.detailShow( pojo);

}

 findDemande(pojo : DemandeVo ) {
  this.demandeService.findDemande( pojo);

}
 findAll() {
  this.demandeService.findAll();
}

   findAllcategorieDemandes() {
     this.demandeService.findAllcategorieDemandes();
   }
   findAlldemandePars() {
     this.demandeService.findAlldemandePars();
   }
   findAllstatuss() {
     this.demandeService.findAllstatuss();
   }
   findAlldemandeAs() {
     this.demandeService.findAlldemandeAs();
   }

}
