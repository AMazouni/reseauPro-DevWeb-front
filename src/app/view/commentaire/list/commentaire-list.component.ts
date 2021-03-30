import { Component, OnInit } from '@angular/core';
import {CommentaireVo} from '../../../controller/model/commentaire.model';
import {CommentaireService} from '../../../controller/service/Commentaire.service';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';
import {PublicationVo} from '../../../controller/model/Publication.model';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css']
})
export class CommentairelistComponent implements OnInit {

  constructor(private _commentaireService : CommentaireService) {}

  get publications(): Array<PublicationVo> {
   return this.commentaireService.publications;
  }
  get postePars(): Array<UtilisateurVo> {
   return this.commentaireService.postePars;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllpublications();
      this.findAllpostePars();
  }

  get commentaireService (): CommentaireService {
    return this._commentaireService;
  }

  set commentaireService (value: CommentaireService) {
    this._commentaireService = value ;
  }

  get commentaireListe (): Array<CommentaireVo> {
    return this.commentaireService.commentaireListe;
  }

  set commentaireListe (value: Array<CommentaireVo>) {
    this.commentaireService.commentaireListe = value ;
  }

  get commentaireDetail (): CommentaireVo {
    return this.commentaireService.commentaireDetail;
}

  set commentaireDetail (value: CommentaireVo) {
  this.commentaireService.commentaireDetail = value ;
}

get commentaireSearch (): CommentaireVo {
  return this.commentaireService.commentaireSearch;
}

set commentaireSearch (value: CommentaireVo) {
  this.commentaireService.commentaireSearch = value ;
}


get commentaireShowDetail (): boolean  {
  return this.commentaireService.commentaireShowDetail;
}

set commentaireShowDetail (value: boolean ) {
  this.commentaireService.commentaireShowDetail = value ;
}

get commentaireShowCreate (): boolean  {
  return this.commentaireService.commentaireShowCreate;
}

set commentaireShowCreate (value: boolean ) {
  this.commentaireService.commentaireShowCreate = value ;
}
get commentaireShowEdit (): boolean  {
  return this.commentaireService.commentaireShowEdit;
}

set commentaireShowEdit (value: boolean ) {
  this.commentaireService.commentaireShowEdit = value ;
}

  editShow( pojo : CommentaireVo ) {
  this.commentaireService.editShow(pojo);

}
  createShow()  {
  this.commentaireService.createShow();

}

   delete( pojo : CommentaireVo ) {
    this.commentaireService.delete(pojo);
  }


 detailShow( pojo : CommentaireVo ) {
  this.commentaireService.detailShow( pojo);

}

 findCommentaire(pojo : CommentaireVo ) {
  this.commentaireService.findCommentaire( pojo);

}
 findAll() {
  this.commentaireService.findAll();
}

   findAllpublications() {
     this.commentaireService.findAllpublications();
   }
   findAllpostePars() {
     this.commentaireService.findAllpostePars();
   }

}
