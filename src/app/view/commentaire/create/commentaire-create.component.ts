import {Component, OnInit} from '@angular/core';
import {CommentaireService} from '../../../controller/service/Commentaire.service';
import {CommentaireVo} from '../../../controller/model/commentaire.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';
import {PublicationVo} from '../../../controller/model/Publication.model';

@Component({
  selector: 'app-commentaire-create',
  templateUrl: './commentaire-create.component.html',
  styleUrls: ['./commentaire-create.component.css']
})
export class CommentaireCreateComponent implements OnInit {
  constructor(private commentaireService: CommentaireService) { }

   ngOnInit(): void {
      this.findAllpublications();
      this.findAllpostePars();
    }

   get commentaire(): CommentaireVo {
    return this.commentaireService.commentaire;
  }

  get publications(): Array<PublicationVo> {
   return this.commentaireService.publications;
  }
  get postePars(): Array<UtilisateurVo> {
   return this.commentaireService.postePars;
  }

   saveCommentaire() {
    this.commentaireService.saveCommentaire();
  }

   findAllpublications() {
     this.commentaireService.findAllpublications();
   }
   findAllpostePars() {
     this.commentaireService.findAllpostePars();
   }

get commentaireShowCreate (): boolean  {
  return this.commentaireService.commentaireShowCreate;
}

set commentaireShowCreate (value: boolean ) {
  this.commentaireService.commentaireShowCreate = value ;
}
public createHide(){
       this.commentaireService.createHide();
}
}