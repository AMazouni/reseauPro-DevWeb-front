import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '../../../controller/service/Utilisateur.service';
import {UtilisateurVo} from '../../../controller/model/utilisateur.model';
import {ProfesseurInfoVo} from '../../../controller/model/ProfesseurInfo.model';
import {MessageVo} from '../../../controller/model/Message.model';
import {AdminInfoVo} from '../../../controller/model/AdminInfo.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {CommentaireVo} from '../../../controller/model/Commentaire.model';
import {ReponseVo} from '../../../controller/model/Reponse.model';
import {PublicationVo} from '../../../controller/model/Publication.model';

@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.css']
})
export class UtilisateurEditComponent implements OnInit {
  constructor(private utilisateurService: UtilisateurService) { }

   ngOnInit(): void {
    }

   get utilisateur(): UtilisateurVo {
    return this.utilisateurService.utilisateur;
  }

   get editableUtilisateurs(): Array<UtilisateurVo> {
    return this.utilisateurService.editableUtilisateurs;
   }

   set editableUtilisateurs(value: Array<UtilisateurVo>) {
    this.utilisateurService.editableUtilisateurs = value;
   }


  get messagesRecus(): MessageVo {
    return this.utilisateurService.messagesRecus;
  }

  addmessagesRecus() {
   return this.utilisateurService.addmessagesRecus();
  }

  removemessagesRecus(i: number) {
   this.utilisateurService.removemessagesRecus(i);
  }
  get messagesEnvoye(): MessageVo {
    return this.utilisateurService.messagesEnvoye;
  }

  addmessagesEnvoye() {
   return this.utilisateurService.addmessagesEnvoye();
  }

  removemessagesEnvoye(i: number) {
   this.utilisateurService.removemessagesEnvoye(i);
  }
  get comRediges(): CommentaireVo {
    return this.utilisateurService.comRediges;
  }

  addcomRediges() {
   return this.utilisateurService.addcomRediges();
  }

  removecomRediges(i: number) {
   this.utilisateurService.removecomRediges(i);
  }
  get publicationsRediges(): PublicationVo {
    return this.utilisateurService.publicationsRediges;
  }

  addpublicationsRediges() {
   return this.utilisateurService.addpublicationsRediges();
  }

  removepublicationsRediges(i: number) {
   this.utilisateurService.removepublicationsRediges(i);
  }
   editUtilisateur() {
    this.utilisateurService.editUtilisateur();
  }

     findByemail(ref: string) {
      this.utilisateurService.findByemail(ref);
     }

    editHide() {
      this.utilisateurService.editHide();
    }
    

}