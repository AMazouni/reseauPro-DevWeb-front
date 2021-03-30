import { Component, OnInit } from '@angular/core';
import {EtudiantInfoVo} from '../../../controller/model/etudiantInfo.model';
import {EtudiantInfoService} from '../../../controller/service/EtudiantInfo.service';
import {FonctionVo} from '../../../controller/model/Fonction.model';
import {DemandeVo} from '../../../controller/model/Demande.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {FormationVo} from '../../../controller/model/Formation.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-etudiantInfo-list',
  templateUrl: './etudiantInfo-list.component.html',
  styleUrls: ['./etudiantInfo-list.component.css']
})
export class EtudiantInfolistComponent implements OnInit {

  constructor(private _etudiantInfoService : EtudiantInfoService) {}

  get sexes(): Array<SexeVo> {
   return this.etudiantInfoService.sexes;
  }
  get formationActuelles(): Array<FormationVo> {
   return this.etudiantInfoService.formationActuelles;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllsexes();
      this.findAllformationActuelles();
  }

  get etudiantInfoService (): EtudiantInfoService {
    return this._etudiantInfoService;
  }

  set etudiantInfoService (value: EtudiantInfoService) {
    this._etudiantInfoService = value ;
  }

  get etudiantInfoListe (): Array<EtudiantInfoVo> {
    return this.etudiantInfoService.etudiantInfoListe;
  }

  set etudiantInfoListe (value: Array<EtudiantInfoVo>) {
    this.etudiantInfoService.etudiantInfoListe = value ;
  }

  get etudiantInfoDetail (): EtudiantInfoVo {
    return this.etudiantInfoService.etudiantInfoDetail;
}

  set etudiantInfoDetail (value: EtudiantInfoVo) {
  this.etudiantInfoService.etudiantInfoDetail = value ;
}

get etudiantInfoSearch (): EtudiantInfoVo {
  return this.etudiantInfoService.etudiantInfoSearch;
}

set etudiantInfoSearch (value: EtudiantInfoVo) {
  this.etudiantInfoService.etudiantInfoSearch = value ;
}


get etudiantInfoShowDetail (): boolean  {
  return this.etudiantInfoService.etudiantInfoShowDetail;
}

set etudiantInfoShowDetail (value: boolean ) {
  this.etudiantInfoService.etudiantInfoShowDetail = value ;
}

get etudiantInfoShowCreate (): boolean  {
  return this.etudiantInfoService.etudiantInfoShowCreate;
}

set etudiantInfoShowCreate (value: boolean ) {
  this.etudiantInfoService.etudiantInfoShowCreate = value ;
}
get etudiantInfoShowEdit (): boolean  {
  return this.etudiantInfoService.etudiantInfoShowEdit;
}

set etudiantInfoShowEdit (value: boolean ) {
  this.etudiantInfoService.etudiantInfoShowEdit = value ;
}

  editShow( pojo : EtudiantInfoVo ) {
  this.etudiantInfoService.editShow(pojo);

}
  createShow()  {
  this.etudiantInfoService.createShow();

}

   delete( pojo : EtudiantInfoVo ) {
    this.etudiantInfoService.delete(pojo);
  }


 detailShow( pojo : EtudiantInfoVo ) {
  this.etudiantInfoService.detailShow( pojo);

}

 findEtudiantInfo(pojo : EtudiantInfoVo ) {
  this.etudiantInfoService.findEtudiantInfo( pojo);

}
 findAll() {
  this.etudiantInfoService.findAll();
}

   findAllsexes() {
     this.etudiantInfoService.findAllsexes();
   }
   findAllformationActuelles() {
     this.etudiantInfoService.findAllformationActuelles();
   }

}
