import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../../../controller/service/Demande.service';
import {DemandeVo} from '../../../controller/model/demande.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {MessageVo} from '../../../controller/model/Message.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {CatDemandeVo} from '../../../controller/model/CatDemande.model';

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {
  constructor(private demandeService: DemandeService) { }

   ngOnInit(): void {
      this.findAllcategorieDemandes();
      this.findAlldemandePars();
      this.findAllstatuss();
      this.findAlldemandeAs();
    }

   get demande(): DemandeVo {
    return this.demandeService.demande;
  }

  get categorieDemandes(): Array<CatDemandeVo> {
   return this.demandeService.categorieDemandes;
  }
  get demandePars(): Array<EtudiantInfoVo> {
   return this.demandeService.demandePars;
  }
  get statuss(): Array<StatusVo> {
   return this.demandeService.statuss;
  }
  get demandeAs(): Array<EtudiantInfoVo> {
   return this.demandeService.demandeAs;
  }

  get messages(): MessageVo {
    return this.demandeService.messages;
  }

  addMessage() {
   return this.demandeService.addmessages();
  }

  removeMessage(i: number) {
   this.demandeService.removemessages(i);
  }
   saveDemande() {
    this.demandeService.saveDemande();
  }

   findAllcategorieDemandes() {
     this.demandeService.findAllcategorieDemandes();
   }
   findAlldemandePars() {
     this.demandeService.findAlldemandePars();
   }
   findAllstatuss() {
     this.demandeService.findAllstatuss();
   }
   findAlldemandeAs() {
     this.demandeService.findAlldemandeAs();
   }

get demandeShowCreate (): boolean  {
  return this.demandeService.demandeShowCreate;
}

set demandeShowCreate (value: boolean ) {
  this.demandeService.demandeShowCreate = value ;
}
public createHide(){
       this.demandeService.createHide();
}
}