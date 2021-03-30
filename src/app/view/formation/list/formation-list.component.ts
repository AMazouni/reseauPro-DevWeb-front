import { Component, OnInit } from '@angular/core';
import {FormationVo} from '../../../controller/model/formation.model';
import {FormationService} from '../../../controller/service/Formation.service';
import {ProfesseurInfoVo} from '../../../controller/model/ProfesseurInfo.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationlistComponent implements OnInit {

  constructor(private _formationService : FormationService) {}

  get etablissements(): Array<EtablissementVo> {
   return this.formationService.etablissements;
  }
  get responsables(): Array<ProfesseurInfoVo> {
   return this.formationService.responsables;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAlletablissements();
      this.findAllresponsables();
  }

  get formationService (): FormationService {
    return this._formationService;
  }

  set formationService (value: FormationService) {
    this._formationService = value ;
  }

  get formationListe (): Array<FormationVo> {
    return this.formationService.formationListe;
  }

  set formationListe (value: Array<FormationVo>) {
    this.formationService.formationListe = value ;
  }

  get formationDetail (): FormationVo {
    return this.formationService.formationDetail;
}

  set formationDetail (value: FormationVo) {
  this.formationService.formationDetail = value ;
}

get formationSearch (): FormationVo {
  return this.formationService.formationSearch;
}

set formationSearch (value: FormationVo) {
  this.formationService.formationSearch = value ;
}


get formationShowDetail (): boolean  {
  return this.formationService.formationShowDetail;
}

set formationShowDetail (value: boolean ) {
  this.formationService.formationShowDetail = value ;
}

get formationShowCreate (): boolean  {
  return this.formationService.formationShowCreate;
}

set formationShowCreate (value: boolean ) {
  this.formationService.formationShowCreate = value ;
}
get formationShowEdit (): boolean  {
  return this.formationService.formationShowEdit;
}

set formationShowEdit (value: boolean ) {
  this.formationService.formationShowEdit = value ;
}

  editShow( pojo : FormationVo ) {
  this.formationService.editShow(pojo);

}
  createShow()  {
  this.formationService.createShow();

}

   delete( pojo : FormationVo ) {
    this.formationService.delete(pojo);
  }


 detailShow( pojo : FormationVo ) {
  this.formationService.detailShow( pojo);

}

 findFormation(pojo : FormationVo ) {
  this.formationService.findFormation( pojo);

}
 findAll() {
  this.formationService.findAll();
}

   findAlletablissements() {
     this.formationService.findAlletablissements();
   }
   findAllresponsables() {
     this.formationService.findAllresponsables();
   }

}
