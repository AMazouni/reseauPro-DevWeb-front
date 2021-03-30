import {Component, OnInit} from '@angular/core';
import {FormationService} from '../../../controller/service/Formation.service';
import {FormationVo} from '../../../controller/model/formation.model';
import {ProfesseurInfoVo} from '../../../controller/model/ProfesseurInfo.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './formation-edit.component.html',
  styleUrls: ['./formation-edit.component.css']
})
export class FormationEditComponent implements OnInit {
  constructor(private formationService: FormationService) { }

   ngOnInit(): void {
       this.findAlletablissements();
       this.findAllresponsables();
    }

   get formation(): FormationVo {
    return this.formationService.formation;
  }

   get editableFormations(): Array<FormationVo> {
    return this.formationService.editableFormations;
   }

   set editableFormations(value: Array<FormationVo>) {
    this.formationService.editableFormations = value;
   }

  get etablissements(): Array<EtablissementVo> {
   return this.formationService.etablissements;
  }
  get responsables(): Array<ProfesseurInfoVo> {
   return this.formationService.responsables;
  }

  get laureats(): EtudiantInfoVo {
    return this.formationService.laureats;
  }

  addlaureats() {
   return this.formationService.addlaureats();
  }

  removelaureats(i: number) {
   this.formationService.removelaureats(i);
  }
  get etudiantsAct(): EtudiantInfoVo {
    return this.formationService.etudiantsAct;
  }

  addetudiantsAct() {
   return this.formationService.addetudiantsAct();
  }

  removeetudiantsAct(i: number) {
   this.formationService.removeetudiantsAct(i);
  }
   editFormation() {
    this.formationService.editFormation();
  }
    findAlletablissements() {
     this.formationService.findAlletablissements();
    }
    findAllresponsables() {
     this.formationService.findAllresponsables();
    }

     findByref(ref: string) {
      this.formationService.findByref(ref);
     }

    editHide() {
      this.formationService.editHide();
    }
    

}