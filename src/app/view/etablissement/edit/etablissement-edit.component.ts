import {Component, OnInit} from '@angular/core';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EtablissementVo} from '../../../controller/model/etablissement.model';
import {FormationVo} from '../../../controller/model/Formation.model';

@Component({
  selector: 'app-etablissement-edit',
  templateUrl: './etablissement-edit.component.html',
  styleUrls: ['./etablissement-edit.component.css']
})
export class EtablissementEditComponent implements OnInit {
  constructor(private etablissementService: EtablissementService) { }

   ngOnInit(): void {
    }

   get etablissement(): EtablissementVo {
    return this.etablissementService.etablissement;
  }

   get editableEtablissements(): Array<EtablissementVo> {
    return this.etablissementService.editableEtablissements;
   }

   set editableEtablissements(value: Array<EtablissementVo>) {
    this.etablissementService.editableEtablissements = value;
   }


  get formations(): FormationVo {
    return this.etablissementService.formations;
  }

  addformations() {
   return this.etablissementService.addformations();
  }

  removeformations(i: number) {
   this.etablissementService.removeformations(i);
  }
   editEtablissement() {
    this.etablissementService.editEtablissement();
  }

     findByref(ref: string) {
      this.etablissementService.findByref(ref);
     }

    editHide() {
      this.etablissementService.editHide();
    }
    

}