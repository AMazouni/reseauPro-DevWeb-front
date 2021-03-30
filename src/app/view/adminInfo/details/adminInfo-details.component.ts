import { Component, OnInit } from '@angular/core';
import {AdminInfoVo} from '../../../controller/model/adminInfo.model';
import {AdminInfoService} from '../../../controller/service/AdminInfo.service';

@Component({
  selector: 'app-adminInfo-details',
  templateUrl: './adminInfo-details.component.html',
  styleUrls: ['./adminInfo-details.component.css']
})

export class AdminInfoDetailsComponent implements OnInit {

  constructor(private _adminInfoService : AdminInfoService) {}


   get adminInfoService (): AdminInfoService {
    return this._adminInfoService;
  }

  set adminInfoService (value: AdminInfoService) {
    this._adminInfoService = value ;
  }

  get adminInfoDetail (): AdminInfoVo {
    return this.adminInfoService.adminInfoDetail;
}

  set adminInfoDetail (value: AdminInfoVo) {
  this.adminInfoService.adminInfoDetail = value ;
}


get adminInfoShowDetail (): boolean  {
  return this.adminInfoService.adminInfoShowDetail;
}

set adminInfoShowDetail (value: boolean ) {
  this.adminInfoService.adminInfoShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.adminInfoService.detailHide();
}

}