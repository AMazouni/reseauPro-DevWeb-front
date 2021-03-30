import {Component, OnInit} from '@angular/core';
import {EntrepriseService} from '../../../controller/service/Entreprise.service';
import {EntrepriseVo} from '../../../controller/model/entreprise.model';
import {FonctionVo} from '../../../controller/model/Fonction.model';

@Component({
  selector: 'app-entreprise-edit',
  templateUrl: './entreprise-edit.component.html',
  styleUrls: ['./entreprise-edit.component.css']
})
export class EntrepriseEditComponent implements OnInit {
  constructor(private entrepriseService: EntrepriseService) { }

   ngOnInit(): void {
    }

   get entreprise(): EntrepriseVo {
    return this.entrepriseService.entreprise;
  }

   get editableEntreprises(): Array<EntrepriseVo> {
    return this.entrepriseService.editableEntreprises;
   }

   set editableEntreprises(value: Array<EntrepriseVo>) {
    this.entrepriseService.editableEntreprises = value;
   }


  get fonctionsLaureat(): FonctionVo {
    return this.entrepriseService.fonctionsLaureat;
  }

  addfonctionsLaureat() {
   return this.entrepriseService.addfonctionsLaureat();
  }

  removefonctionsLaureat(i: number) {
   this.entrepriseService.removefonctionsLaureat(i);
  }
   editEntreprise() {
    this.entrepriseService.editEntreprise();
  }

     findByref(ref: string) {
      this.entrepriseService.findByref(ref);
     }

    editHide() {
      this.entrepriseService.editHide();
    }
    

}