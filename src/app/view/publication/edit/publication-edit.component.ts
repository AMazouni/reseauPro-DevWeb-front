import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../../controller/service/Publication.service';
import {PublicationVo} from '../../../controller/model/publication.model';
import {CommentaireVo} from '../../../controller/model/Commentaire.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.css']
})
export class PublicationEditComponent implements OnInit {
  constructor(private publicationService: PublicationService) { }

   ngOnInit(): void {
       this.findAllpostePars();
    }

   get publication(): PublicationVo {
    return this.publicationService.publication;
  }

   get editablePublications(): Array<PublicationVo> {
    return this.publicationService.editablePublications;
   }

   set editablePublications(value: Array<PublicationVo>) {
    this.publicationService.editablePublications = value;
   }

  get postePars(): Array<UtilisateurVo> {
   return this.publicationService.postePars;
  }

  get commentaire(): CommentaireVo {
    return this.publicationService.commentaire;
  }

  addcommentaire() {
   return this.publicationService.addcommentaire();
  }

  removecommentaire(i: number) {
   this.publicationService.removecommentaire(i);
  }
   editPublication() {
    this.publicationService.editPublication();
  }
    findAllpostePars() {
     this.publicationService.findAllpostePars();
    }

     findByref(ref: string) {
      this.publicationService.findByref(ref);
     }

    editHide() {
      this.publicationService.editHide();
    }
    

}