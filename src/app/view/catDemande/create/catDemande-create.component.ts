import {Component, OnInit} from '@angular/core';
import {CatDemandeService} from '../../../controller/service/CatDemande.service';
import {CatDemandeVo} from '../../../controller/model/catDemande.model';

@Component({
  selector: 'app-catDemande-create',
  templateUrl: './catDemande-create.component.html',
  styleUrls: ['./catDemande-create.component.css']
})
export class CatDemandeCreateComponent implements OnInit {
  constructor(private catDemandeService: CatDemandeService) { }

   ngOnInit(): void {
    }

   get catDemande(): CatDemandeVo {
    return this.catDemandeService.catDemande;
  }


   saveCatDemande() {
    this.catDemandeService.saveCatDemande();
  }


get catDemandeShowCreate (): boolean  {
  return this.catDemandeService.catDemandeShowCreate;
}

set catDemandeShowCreate (value: boolean ) {
  this.catDemandeService.catDemandeShowCreate = value ;
}
public createHide(){
       this.catDemandeService.createHide();
}
}