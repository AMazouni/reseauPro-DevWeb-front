import { Component, OnInit } from '@angular/core';
import {EtudiantInfoVo} from '../../../controller/model/etudiantInfo.model';
import {EtudiantInfoService} from '../../../controller/service/EtudiantInfo.service';

@Component({
  selector: 'app-etudiantInfo-details',
  templateUrl: './etudiantInfo-details.component.html',
  styleUrls: ['./etudiantInfo-details.component.css']
})

export class EtudiantInfoDetailsComponent implements OnInit {

  constructor(private _etudiantInfoService : EtudiantInfoService) {}


   get etudiantInfoService (): EtudiantInfoService {
    return this._etudiantInfoService;
  }

  set etudiantInfoService (value: EtudiantInfoService) {
    this._etudiantInfoService = value ;
  }

  get etudiantInfoDetail (): EtudiantInfoVo {
    return this.etudiantInfoService.etudiantInfoDetail;
}

  set etudiantInfoDetail (value: EtudiantInfoVo) {
  this.etudiantInfoService.etudiantInfoDetail = value ;
}


get etudiantInfoShowDetail (): boolean  {
  return this.etudiantInfoService.etudiantInfoShowDetail;
}

set etudiantInfoShowDetail (value: boolean ) {
  this.etudiantInfoService.etudiantInfoShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.etudiantInfoService.detailHide();
}

}