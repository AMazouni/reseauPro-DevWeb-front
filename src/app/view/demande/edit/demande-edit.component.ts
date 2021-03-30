import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../../../controller/service/Demande.service';
import {DemandeVo} from '../../../controller/model/demande.model';
import {StatusVo} from '../../../controller/model/Status.model';
import {MessageVo} from '../../../controller/model/Message.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {CatDemandeVo} from '../../../controller/model/CatDemande.model';

@Component({
  selector: 'app-demande-edit',
  templateUrl: './demande-edit.component.html',
  styleUrls: ['./demande-edit.component.css']
})
export class DemandeEditComponent implements OnInit {
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

   get editableDemandes(): Array<DemandeVo> {
    return this.demandeService.editableDemandes;
   }

   set editableDemandes(value: Array<DemandeVo>) {
    this.demandeService.editableDemandes = value;
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

  addmessages() {
   return this.demandeService.addmessages();
  }

  removemessages(i: number) {
   this.demandeService.removemessages(i);
  }
   editDemande() {
    this.demandeService.editDemande();
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

     findByref(ref: string) {
      this.demandeService.findByref(ref);
     }

    editHide() {
      this.demandeService.editHide();
    }
    

}