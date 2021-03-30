import { Component, OnInit } from '@angular/core';
import {AdminInfoVo} from '../../../controller/model/adminInfo.model';
import {AdminInfoService} from '../../../controller/service/AdminInfo.service';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-adminInfo-list',
  templateUrl: './adminInfo-list.component.html',
  styleUrls: ['./adminInfo-list.component.css']
})
export class AdminInfolistComponent implements OnInit {

  constructor(private _adminInfoService : AdminInfoService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get adminInfoService (): AdminInfoService {
    return this._adminInfoService;
  }

  set adminInfoService (value: AdminInfoService) {
    this._adminInfoService = value ;
  }

  get adminInfoListe (): Array<AdminInfoVo> {
    return this.adminInfoService.adminInfoListe;
  }

  set adminInfoListe (value: Array<AdminInfoVo>) {
    this.adminInfoService.adminInfoListe = value ;
  }

  get adminInfoDetail (): AdminInfoVo {
    return this.adminInfoService.adminInfoDetail;
}

  set adminInfoDetail (value: AdminInfoVo) {
  this.adminInfoService.adminInfoDetail = value ;
}

get adminInfoSearch (): AdminInfoVo {
  return this.adminInfoService.adminInfoSearch;
}

set adminInfoSearch (value: AdminInfoVo) {
  this.adminInfoService.adminInfoSearch = value ;
}


get adminInfoShowDetail (): boolean  {
  return this.adminInfoService.adminInfoShowDetail;
}

set adminInfoShowDetail (value: boolean ) {
  this.adminInfoService.adminInfoShowDetail = value ;
}

get adminInfoShowCreate (): boolean  {
  return this.adminInfoService.adminInfoShowCreate;
}

set adminInfoShowCreate (value: boolean ) {
  this.adminInfoService.adminInfoShowCreate = value ;
}
get adminInfoShowEdit (): boolean  {
  return this.adminInfoService.adminInfoShowEdit;
}

set adminInfoShowEdit (value: boolean ) {
  this.adminInfoService.adminInfoShowEdit = value ;
}

  editShow( pojo : AdminInfoVo ) {
  this.adminInfoService.editShow(pojo);

}
  createShow()  {
  this.adminInfoService.createShow();

}

   delete( pojo : AdminInfoVo ) {
    this.adminInfoService.delete(pojo);
  }


 detailShow( pojo : AdminInfoVo ) {
  this.adminInfoService.detailShow( pojo);

}

 findAdminInfo(pojo : AdminInfoVo ) {
  this.adminInfoService.findAdminInfo( pojo);

}
 findAll() {
  this.adminInfoService.findAll();
}


}
