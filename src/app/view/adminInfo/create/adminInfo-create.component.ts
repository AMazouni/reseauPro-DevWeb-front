import {Component, OnInit} from '@angular/core';
import {AdminInfoService} from '../../../controller/service/AdminInfo.service';
import {AdminInfoVo} from '../../../controller/model/adminInfo.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-adminInfo-create',
  templateUrl: './adminInfo-create.component.html',
  styleUrls: ['./adminInfo-create.component.css']
})
export class AdminInfoCreateComponent implements OnInit {
  constructor(private adminInfoService: AdminInfoService) { }

   ngOnInit(): void {
    }

   get adminInfo(): AdminInfoVo {
    return this.adminInfoService.adminInfo;
  }


   saveAdminInfo() {
    this.adminInfoService.saveAdminInfo();
  }


get adminInfoShowCreate (): boolean  {
  return this.adminInfoService.adminInfoShowCreate;
}

set adminInfoShowCreate (value: boolean ) {
  this.adminInfoService.adminInfoShowCreate = value ;
}
public createHide(){
       this.adminInfoService.createHide();
}
}