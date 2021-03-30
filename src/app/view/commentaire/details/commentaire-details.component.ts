import { Component, OnInit } from '@angular/core';
import {CommentaireVo} from '../../../controller/model/commentaire.model';
import {CommentaireService} from '../../../controller/service/Commentaire.service';

@Component({
  selector: 'app-commentaire-details',
  templateUrl: './commentaire-details.component.html',
  styleUrls: ['./commentaire-details.component.css']
})

export class CommentaireDetailsComponent implements OnInit {

  constructor(private _commentaireService : CommentaireService) {}


   get commentaireService (): CommentaireService {
    return this._commentaireService;
  }

  set commentaireService (value: CommentaireService) {
    this._commentaireService = value ;
  }

  get commentaireDetail (): CommentaireVo {
    return this.commentaireService.commentaireDetail;
}

  set commentaireDetail (value: CommentaireVo) {
  this.commentaireService.commentaireDetail = value ;
}


get commentaireShowDetail (): boolean  {
  return this.commentaireService.commentaireShowDetail;
}

set commentaireShowDetail (value: boolean ) {
  this.commentaireService.commentaireShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.commentaireService.detailHide();
}

}