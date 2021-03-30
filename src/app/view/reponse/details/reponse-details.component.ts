import { Component, OnInit } from '@angular/core';
import {ReponseVo} from '../../../controller/model/reponse.model';
import {ReponseService} from '../../../controller/service/Reponse.service';

@Component({
  selector: 'app-reponse-details',
  templateUrl: './reponse-details.component.html',
  styleUrls: ['./reponse-details.component.css']
})

export class ReponseDetailsComponent implements OnInit {

  constructor(private _reponseService : ReponseService) {}


   get reponseService (): ReponseService {
    return this._reponseService;
  }

  set reponseService (value: ReponseService) {
    this._reponseService = value ;
  }

  get reponseDetail (): ReponseVo {
    return this.reponseService.reponseDetail;
}

  set reponseDetail (value: ReponseVo) {
  this.reponseService.reponseDetail = value ;
}


get reponseShowDetail (): boolean  {
  return this.reponseService.reponseShowDetail;
}

set reponseShowDetail (value: boolean ) {
  this.reponseService.reponseShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.reponseService.detailHide();
}

}