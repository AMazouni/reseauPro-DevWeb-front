import { Component, OnInit } from '@angular/core';
import {ProfesseurInfoVo} from '../../../controller/model/professeurInfo.model';
import {ProfesseurInfoService} from '../../../controller/service/ProfesseurInfo.service';

@Component({
  selector: 'app-professeurInfo-details',
  templateUrl: './professeurInfo-details.component.html',
  styleUrls: ['./professeurInfo-details.component.css']
})

export class ProfesseurInfoDetailsComponent implements OnInit {

  constructor(private _professeurInfoService : ProfesseurInfoService) {}


   get professeurInfoService (): ProfesseurInfoService {
    return this._professeurInfoService;
  }

  set professeurInfoService (value: ProfesseurInfoService) {
    this._professeurInfoService = value ;
  }

  get professeurInfoDetail (): ProfesseurInfoVo {
    return this.professeurInfoService.professeurInfoDetail;
}

  set professeurInfoDetail (value: ProfesseurInfoVo) {
  this.professeurInfoService.professeurInfoDetail = value ;
}


get professeurInfoShowDetail (): boolean  {
  return this.professeurInfoService.professeurInfoShowDetail;
}

set professeurInfoShowDetail (value: boolean ) {
  this.professeurInfoService.professeurInfoShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.professeurInfoService.detailHide();
}

}