import { Component, OnInit } from '@angular/core';
import {EntrepriseVo} from '../../../controller/model/entreprise.model';
import {EntrepriseService} from '../../../controller/service/Entreprise.service';

@Component({
  selector: 'app-entreprise-details',
  templateUrl: './entreprise-details.component.html',
  styleUrls: ['./entreprise-details.component.css']
})

export class EntrepriseDetailsComponent implements OnInit {

  constructor(private _entrepriseService : EntrepriseService) {}


   get entrepriseService (): EntrepriseService {
    return this._entrepriseService;
  }

  set entrepriseService (value: EntrepriseService) {
    this._entrepriseService = value ;
  }

  get entrepriseDetail (): EntrepriseVo {
    return this.entrepriseService.entrepriseDetail;
}

  set entrepriseDetail (value: EntrepriseVo) {
  this.entrepriseService.entrepriseDetail = value ;
}


get entrepriseShowDetail (): boolean  {
  return this.entrepriseService.entrepriseShowDetail;
}

set entrepriseShowDetail (value: boolean ) {
  this.entrepriseService.entrepriseShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.entrepriseService.detailHide();
}

}