import {Component, OnInit} from '@angular/core';
import {EtudiantInfoService} from '../../../controller/service/EtudiantInfo.service';
import {EtudiantInfoVo} from '../../../controller/model/etudiantInfo.model';
import {FonctionVo} from '../../../controller/model/Fonction.model';
import {DemandeVo} from '../../../controller/model/Demande.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {FormationVo} from '../../../controller/model/Formation.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-etudiantInfo-edit',
  templateUrl: './etudiantInfo-edit.component.html',
  styleUrls: ['./etudiantInfo-edit.component.css']
})
export class EtudiantInfoEditComponent implements OnInit {
  constructor(private etudiantInfoService: EtudiantInfoService) { }

   ngOnInit(): void {
       this.findAllsexes();
       this.findAllformationActuelles();
    }

   get etudiantInfo(): EtudiantInfoVo {
    return this.etudiantInfoService.etudiantInfo;
  }

   get editableEtudiantInfos(): Array<EtudiantInfoVo> {
    return this.etudiantInfoService.editableEtudiantInfos;
   }

   set editableEtudiantInfos(value: Array<EtudiantInfoVo>) {
    this.etudiantInfoService.editableEtudiantInfos = value;
   }

  get sexes(): Array<SexeVo> {
   return this.etudiantInfoService.sexes;
  }
  get formationActuelles(): Array<FormationVo> {
   return this.etudiantInfoService.formationActuelles;
  }

  get experiencesPro(): FonctionVo {
    return this.etudiantInfoService.experiencesPro;
  }

  addexperiencesPro() {
   return this.etudiantInfoService.addexperiencesPro();
  }

  removeexperiencesPro(i: number) {
   this.etudiantInfoService.removeexperiencesPro(i);
  }
  get formations(): FormationVo {
    return this.etudiantInfoService.formations;
  }

  addformations() {
   return this.etudiantInfoService.addformations();
  }

  removeformations(i: number) {
   this.etudiantInfoService.removeformations(i);
  }
  get demandeRecu(): DemandeVo {
    return this.etudiantInfoService.demandeRecu;
  }

  adddemandeRecu() {
   return this.etudiantInfoService.adddemandeRecu();
  }

  removedemandeRecu(i: number) {
   this.etudiantInfoService.removedemandeRecu(i);
  }
  get demandesEnvoye(): DemandeVo {
    return this.etudiantInfoService.demandesEnvoye;
  }

  adddemandesEnvoye() {
   return this.etudiantInfoService.adddemandesEnvoye();
  }

  removedemandesEnvoye(i: number) {
   this.etudiantInfoService.removedemandesEnvoye(i);
  }
   editEtudiantInfo() {
    this.etudiantInfoService.editEtudiantInfo();
  }
    findAllsexes() {
     this.etudiantInfoService.findAllsexes();
    }
    findAllformationActuelles() {
     this.etudiantInfoService.findAllformationActuelles();
    }

     findBycne(ref: string) {
      this.etudiantInfoService.findBycne(ref);
     }

    editHide() {
      this.etudiantInfoService.editHide();
    }
    

}