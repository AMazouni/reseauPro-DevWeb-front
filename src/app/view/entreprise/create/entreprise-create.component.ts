import {Component, OnInit} from '@angular/core';
import {EntrepriseService} from '../../../controller/service/Entreprise.service';
import {EntrepriseVo} from '../../../controller/model/entreprise.model';
import {FonctionVo} from '../../../controller/model/Fonction.model';

@Component({
  selector: 'app-entreprise-create',
  templateUrl: './entreprise-create.component.html',
  styleUrls: ['./entreprise-create.component.css']
})
export class EntrepriseCreateComponent implements OnInit {
  constructor(private entrepriseService: EntrepriseService) { }

   ngOnInit(): void {
    }

   get entreprise(): EntrepriseVo {
    return this.entrepriseService.entreprise;
  }


  get fonctionsLaureat(): FonctionVo {
    return this.entrepriseService.fonctionsLaureat;
  }

  addFonction() {
   return this.entrepriseService.addfonctionsLaureat();
  }

  removeFonction(i: number) {
   this.entrepriseService.removefonctionsLaureat(i);
  }
   saveEntreprise() {
    this.entrepriseService.saveEntreprise();
  }


get entrepriseShowCreate (): boolean  {
  return this.entrepriseService.entrepriseShowCreate;
}

set entrepriseShowCreate (value: boolean ) {
  this.entrepriseService.entrepriseShowCreate = value ;
}
public createHide(){
       this.entrepriseService.createHide();
}
}