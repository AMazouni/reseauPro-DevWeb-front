import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../../controller/service/Publication.service';
import {PublicationVo} from '../../../controller/model/publication.model';
import {CommentaireVo} from '../../../controller/model/Commentaire.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-publication-create',
  templateUrl: './publication-create.component.html',
  styleUrls: ['./publication-create.component.css']
})
export class PublicationCreateComponent implements OnInit {
  constructor(private publicationService: PublicationService) { }

   ngOnInit(): void {
      this.findAllpostePars();
    }

   get publication(): PublicationVo {
    return this.publicationService.publication;
  }

  get postePars(): Array<UtilisateurVo> {
   return this.publicationService.postePars;
  }

  get commentaire(): CommentaireVo {
    return this.publicationService.commentaire;
  }

  addCommentaire() {
   return this.publicationService.addcommentaire();
  }

  removeCommentaire(i: number) {
   this.publicationService.removecommentaire(i);
  }
   savePublication() {
    this.publicationService.savePublication();
  }

   findAllpostePars() {
     this.publicationService.findAllpostePars();
   }

get publicationShowCreate (): boolean  {
  return this.publicationService.publicationShowCreate;
}

set publicationShowCreate (value: boolean ) {
  this.publicationService.publicationShowCreate = value ;
}
public createHide(){
       this.publicationService.createHide();
}
}