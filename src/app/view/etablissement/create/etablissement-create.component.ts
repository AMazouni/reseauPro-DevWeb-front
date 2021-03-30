import {Component, OnInit} from '@angular/core';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EtablissementVo} from '../../../controller/model/etablissement.model';
import {FormationVo} from '../../../controller/model/Formation.model';

@Component({
  selector: 'app-etablissement-create',
  templateUrl: './etablissement-create.component.html',
  styleUrls: ['./etablissement-create.component.css']
})
export class EtablissementCreateComponent implements OnInit {
  constructor(private etablissementService: EtablissementService) { }

   ngOnInit(): void {
    }

   get etablissement(): EtablissementVo {
    return this.etablissementService.etablissement;
  }


  get formations(): FormationVo {
    return this.etablissementService.formations;
  }

  addFormation() {
   return this.etablissementService.addformations();
  }

  removeFormation(i: number) {
   this.etablissementService.removeformations(i);
  }
   saveEtablissement() {
    this.etablissementService.saveEtablissement();
  }


get etablissementShowCreate (): boolean  {
  return this.etablissementService.etablissementShowCreate;
}

set etablissementShowCreate (value: boolean ) {
  this.etablissementService.etablissementShowCreate = value ;
}
public createHide(){
       this.etablissementService.createHide();
}
}