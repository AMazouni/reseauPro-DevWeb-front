import {Component, OnInit} from '@angular/core';
import {FonctionService} from '../../../controller/service/Fonction.service';
import {FonctionVo} from '../../../controller/model/fonction.model';
import {EntrepriseVo} from '../../../controller/model/Entreprise.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';

@Component({
  selector: 'app-fonction-edit',
  templateUrl: './fonction-edit.component.html',
  styleUrls: ['./fonction-edit.component.css']
})
export class FonctionEditComponent implements OnInit {
  constructor(private fonctionService: FonctionService) { }

   ngOnInit(): void {
       this.findAllentreprises();
       this.findAlloccupePars();
    }

   get fonction(): FonctionVo {
    return this.fonctionService.fonction;
  }

   get editableFonctions(): Array<FonctionVo> {
    return this.fonctionService.editableFonctions;
   }

   set editableFonctions(value: Array<FonctionVo>) {
    this.fonctionService.editableFonctions = value;
   }

  get entreprises(): Array<EntrepriseVo> {
   return this.fonctionService.entreprises;
  }
  get occupePars(): Array<EtudiantInfoVo> {
   return this.fonctionService.occupePars;
  }

   editFonction() {
    this.fonctionService.editFonction();
  }
    findAllentreprises() {
     this.fonctionService.findAllentreprises();
    }
    findAlloccupePars() {
     this.fonctionService.findAlloccupePars();
    }

     findByref(ref: string) {
      this.fonctionService.findByref(ref);
     }

    editHide() {
      this.fonctionService.editHide();
    }
    

}