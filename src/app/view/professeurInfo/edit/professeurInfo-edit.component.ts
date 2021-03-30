import {Component, OnInit} from '@angular/core';
import {ProfesseurInfoService} from '../../../controller/service/ProfesseurInfo.service';
import {ProfesseurInfoVo} from '../../../controller/model/professeurInfo.model';
import {FormationVo} from '../../../controller/model/Formation.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-professeurInfo-edit',
  templateUrl: './professeurInfo-edit.component.html',
  styleUrls: ['./professeurInfo-edit.component.css']
})
export class ProfesseurInfoEditComponent implements OnInit {
  constructor(private professeurInfoService: ProfesseurInfoService) { }

   ngOnInit(): void {
       this.findAlletablissements();
       this.findAllcomptes();
    }

   get professeurInfo(): ProfesseurInfoVo {
    return this.professeurInfoService.professeurInfo;
  }

   get editableProfesseurInfos(): Array<ProfesseurInfoVo> {
    return this.professeurInfoService.editableProfesseurInfos;
   }

   set editableProfesseurInfos(value: Array<ProfesseurInfoVo>) {
    this.professeurInfoService.editableProfesseurInfos = value;
   }

  get etablissements(): Array<EtablissementVo> {
   return this.professeurInfoService.etablissements;
  }
  get comptes(): Array<UtilisateurVo> {
   return this.professeurInfoService.comptes;
  }

  get responsableDe(): FormationVo {
    return this.professeurInfoService.responsableDe;
  }

  addresponsableDe() {
   return this.professeurInfoService.addresponsableDe();
  }

  removeresponsableDe(i: number) {
   this.professeurInfoService.removeresponsableDe(i);
  }
   editProfesseurInfo() {
    this.professeurInfoService.editProfesseurInfo();
  }
    findAlletablissements() {
     this.professeurInfoService.findAlletablissements();
    }
    findAllcomptes() {
     this.professeurInfoService.findAllcomptes();
    }

     findBycode(ref: string) {
      this.professeurInfoService.findBycode(ref);
     }

    editHide() {
      this.professeurInfoService.editHide();
    }
    

}