import {Component, OnInit} from '@angular/core';
import {CommentaireService} from '../../../controller/service/Commentaire.service';
import {CommentaireVo} from '../../../controller/model/commentaire.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';
import {PublicationVo} from '../../../controller/model/Publication.model';

@Component({
  selector: 'app-commentaire-edit',
  templateUrl: './commentaire-edit.component.html',
  styleUrls: ['./commentaire-edit.component.css']
})
export class CommentaireEditComponent implements OnInit {
  constructor(private commentaireService: CommentaireService) { }

   ngOnInit(): void {
       this.findAllpublications();
       this.findAllpostePars();
    }

   get commentaire(): CommentaireVo {
    return this.commentaireService.commentaire;
  }

   get editableCommentaires(): Array<CommentaireVo> {
    return this.commentaireService.editableCommentaires;
   }

   set editableCommentaires(value: Array<CommentaireVo>) {
    this.commentaireService.editableCommentaires = value;
   }

  get publications(): Array<PublicationVo> {
   return this.commentaireService.publications;
  }
  get postePars(): Array<UtilisateurVo> {
   return this.commentaireService.postePars;
  }

   editCommentaire() {
    this.commentaireService.editCommentaire();
  }
    findAllpublications() {
     this.commentaireService.findAllpublications();
    }
    findAllpostePars() {
     this.commentaireService.findAllpostePars();
    }

     findBycomref(ref: string) {
      this.commentaireService.findBycomref(ref);
     }

    editHide() {
      this.commentaireService.editHide();
    }
    

}