import {Component, OnInit} from '@angular/core';
import {FonctionService} from '../../../controller/service/Fonction.service';
import {FonctionVo} from '../../../controller/model/fonction.model';
import {EntrepriseVo} from '../../../controller/model/Entreprise.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';

@Component({
  selector: 'app-fonction-create',
  templateUrl: './fonction-create.component.html',
  styleUrls: ['./fonction-create.component.css']
})
export class FonctionCreateComponent implements OnInit {
  constructor(private fonctionService: FonctionService) { }

   ngOnInit(): void {
      this.findAllentreprises();
      this.findAlloccupePars();
    }

   get fonction(): FonctionVo {
    return this.fonctionService.fonction;
  }

  get entreprises(): Array<EntrepriseVo> {
   return this.fonctionService.entreprises;
  }
  get occupePars(): Array<EtudiantInfoVo> {
   return this.fonctionService.occupePars;
  }

   saveFonction() {
    this.fonctionService.saveFonction();
  }

   findAllentreprises() {
     this.fonctionService.findAllentreprises();
   }
   findAlloccupePars() {
     this.fonctionService.findAlloccupePars();
   }

get fonctionShowCreate (): boolean  {
  return this.fonctionService.fonctionShowCreate;
}

set fonctionShowCreate (value: boolean ) {
  this.fonctionService.fonctionShowCreate = value ;
}
public createHide(){
       this.fonctionService.createHide();
}
}