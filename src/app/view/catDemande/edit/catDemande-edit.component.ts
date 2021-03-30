import {Component, OnInit} from '@angular/core';
import {CatDemandeService} from '../../../controller/service/CatDemande.service';
import {CatDemandeVo} from '../../../controller/model/catDemande.model';

@Component({
  selector: 'app-catDemande-edit',
  templateUrl: './catDemande-edit.component.html',
  styleUrls: ['./catDemande-edit.component.css']
})
export class CatDemandeEditComponent implements OnInit {
  constructor(private catDemandeService: CatDemandeService) { }

   ngOnInit(): void {
    }

   get catDemande(): CatDemandeVo {
    return this.catDemandeService.catDemande;
  }

   get editableCatDemandes(): Array<CatDemandeVo> {
    return this.catDemandeService.editableCatDemandes;
   }

   set editableCatDemandes(value: Array<CatDemandeVo>) {
    this.catDemandeService.editableCatDemandes = value;
   }


   editCatDemande() {
    this.catDemandeService.editCatDemande();
  }

     findByref(ref: string) {
      this.catDemandeService.findByref(ref);
     }

    editHide() {
      this.catDemandeService.editHide();
    }
    

}