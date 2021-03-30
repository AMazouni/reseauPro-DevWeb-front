import { Component, OnInit } from '@angular/core';
import {FormationVo} from '../../../controller/model/formation.model';
import {FormationService} from '../../../controller/service/Formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})

export class FormationDetailsComponent implements OnInit {

  constructor(private _formationService : FormationService) {}


   get formationService (): FormationService {
    return this._formationService;
  }

  set formationService (value: FormationService) {
    this._formationService = value ;
  }

  get formationDetail (): FormationVo {
    return this.formationService.formationDetail;
}

  set formationDetail (value: FormationVo) {
  this.formationService.formationDetail = value ;
}


get formationShowDetail (): boolean  {
  return this.formationService.formationShowDetail;
}

set formationShowDetail (value: boolean ) {
  this.formationService.formationShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.formationService.detailHide();
}

}