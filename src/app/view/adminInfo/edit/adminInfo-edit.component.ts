import {Component, OnInit} from '@angular/core';
import {AdminInfoService} from '../../../controller/service/AdminInfo.service';
import {AdminInfoVo} from '../../../controller/model/adminInfo.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-adminInfo-edit',
  templateUrl: './adminInfo-edit.component.html',
  styleUrls: ['./adminInfo-edit.component.css']
})
export class AdminInfoEditComponent implements OnInit {
  constructor(private adminInfoService: AdminInfoService) { }

   ngOnInit(): void {
    }

   get adminInfo(): AdminInfoVo {
    return this.adminInfoService.adminInfo;
  }

   get editableAdminInfos(): Array<AdminInfoVo> {
    return this.adminInfoService.editableAdminInfos;
   }

   set editableAdminInfos(value: Array<AdminInfoVo>) {
    this.adminInfoService.editableAdminInfos = value;
   }


   editAdminInfo() {
    this.adminInfoService.editAdminInfo();
  }

     findBynom(ref: string) {
      this.adminInfoService.findBynom(ref);
     }

    editHide() {
      this.adminInfoService.editHide();
    }
    

}