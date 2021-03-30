import {Component, OnInit} from '@angular/core';
import {ProfesseurInfoService} from '../../../controller/service/ProfesseurInfo.service';
import {ProfesseurInfoVo} from '../../../controller/model/professeurInfo.model';
import {FormationVo} from '../../../controller/model/Formation.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-professeurInfo-create',
  templateUrl: './professeurInfo-create.component.html',
  styleUrls: ['./professeurInfo-create.component.css']
})
export class ProfesseurInfoCreateComponent implements OnInit {
  constructor(private professeurInfoService: ProfesseurInfoService) { }

   ngOnInit(): void {
      this.findAlletablissements();
      this.findAllcomptes();
    }

   get professeurInfo(): ProfesseurInfoVo {
    return this.professeurInfoService.professeurInfo;
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

  addFormation() {
   return this.professeurInfoService.addresponsableDe();
  }

  removeFormation(i: number) {
   this.professeurInfoService.removeresponsableDe(i);
  }
   saveProfesseurInfo() {
    this.professeurInfoService.saveProfesseurInfo();
  }

   findAlletablissements() {
     this.professeurInfoService.findAlletablissements();
   }
   findAllcomptes() {
     this.professeurInfoService.findAllcomptes();
   }

get professeurInfoShowCreate (): boolean  {
  return this.professeurInfoService.professeurInfoShowCreate;
}

set professeurInfoShowCreate (value: boolean ) {
  this.professeurInfoService.professeurInfoShowCreate = value ;
}
public createHide(){
       this.professeurInfoService.createHide();
}
}