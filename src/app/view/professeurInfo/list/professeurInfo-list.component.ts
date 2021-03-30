import { Component, OnInit } from '@angular/core';
import {ProfesseurInfoVo} from '../../../controller/model/professeurInfo.model';
import {ProfesseurInfoService} from '../../../controller/service/ProfesseurInfo.service';
import {FormationVo} from '../../../controller/model/Formation.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-professeurInfo-list',
  templateUrl: './professeurInfo-list.component.html',
  styleUrls: ['./professeurInfo-list.component.css']
})
export class ProfesseurInfolistComponent implements OnInit {

  constructor(private _professeurInfoService : ProfesseurInfoService) {}

  get etablissements(): Array<EtablissementVo> {
   return this.professeurInfoService.etablissements;
  }
  get comptes(): Array<UtilisateurVo> {
   return this.professeurInfoService.comptes;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAlletablissements();
      this.findAllcomptes();
  }

  get professeurInfoService (): ProfesseurInfoService {
    return this._professeurInfoService;
  }

  set professeurInfoService (value: ProfesseurInfoService) {
    this._professeurInfoService = value ;
  }

  get professeurInfoListe (): Array<ProfesseurInfoVo> {
    return this.professeurInfoService.professeurInfoListe;
  }

  set professeurInfoListe (value: Array<ProfesseurInfoVo>) {
    this.professeurInfoService.professeurInfoListe = value ;
  }

  get professeurInfoDetail (): ProfesseurInfoVo {
    return this.professeurInfoService.professeurInfoDetail;
}

  set professeurInfoDetail (value: ProfesseurInfoVo) {
  this.professeurInfoService.professeurInfoDetail = value ;
}

get professeurInfoSearch (): ProfesseurInfoVo {
  return this.professeurInfoService.professeurInfoSearch;
}

set professeurInfoSearch (value: ProfesseurInfoVo) {
  this.professeurInfoService.professeurInfoSearch = value ;
}


get professeurInfoShowDetail (): boolean  {
  return this.professeurInfoService.professeurInfoShowDetail;
}

set professeurInfoShowDetail (value: boolean ) {
  this.professeurInfoService.professeurInfoShowDetail = value ;
}

get professeurInfoShowCreate (): boolean  {
  return this.professeurInfoService.professeurInfoShowCreate;
}

set professeurInfoShowCreate (value: boolean ) {
  this.professeurInfoService.professeurInfoShowCreate = value ;
}
get professeurInfoShowEdit (): boolean  {
  return this.professeurInfoService.professeurInfoShowEdit;
}

set professeurInfoShowEdit (value: boolean ) {
  this.professeurInfoService.professeurInfoShowEdit = value ;
}

  editShow( pojo : ProfesseurInfoVo ) {
  this.professeurInfoService.editShow(pojo);

}
  createShow()  {
  this.professeurInfoService.createShow();

}

   delete( pojo : ProfesseurInfoVo ) {
    this.professeurInfoService.delete(pojo);
  }


 detailShow( pojo : ProfesseurInfoVo ) {
  this.professeurInfoService.detailShow( pojo);

}

 findProfesseurInfo(pojo : ProfesseurInfoVo ) {
  this.professeurInfoService.findProfesseurInfo( pojo);

}
 findAll() {
  this.professeurInfoService.findAll();
}

   findAlletablissements() {
     this.professeurInfoService.findAlletablissements();
   }
   findAllcomptes() {
     this.professeurInfoService.findAllcomptes();
   }

}
