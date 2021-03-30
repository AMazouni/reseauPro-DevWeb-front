import { Component, OnInit } from '@angular/core';
import {PublicationVo} from '../../../controller/model/publication.model';
import {PublicationService} from '../../../controller/service/Publication.service';
import {CommentaireVo} from '../../../controller/model/Commentaire.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationlistComponent implements OnInit {

  constructor(private _publicationService : PublicationService) {}

  get postePars(): Array<UtilisateurVo> {
   return this.publicationService.postePars;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllpostePars();
  }

  get publicationService (): PublicationService {
    return this._publicationService;
  }

  set publicationService (value: PublicationService) {
    this._publicationService = value ;
  }

  get publicationListe (): Array<PublicationVo> {
    return this.publicationService.publicationListe;
  }

  set publicationListe (value: Array<PublicationVo>) {
    this.publicationService.publicationListe = value ;
  }

  get publicationDetail (): PublicationVo {
    return this.publicationService.publicationDetail;
}

  set publicationDetail (value: PublicationVo) {
  this.publicationService.publicationDetail = value ;
}

get publicationSearch (): PublicationVo {
  return this.publicationService.publicationSearch;
}

set publicationSearch (value: PublicationVo) {
  this.publicationService.publicationSearch = value ;
}


get publicationShowDetail (): boolean  {
  return this.publicationService.publicationShowDetail;
}

set publicationShowDetail (value: boolean ) {
  this.publicationService.publicationShowDetail = value ;
}

get publicationShowCreate (): boolean  {
  return this.publicationService.publicationShowCreate;
}

set publicationShowCreate (value: boolean ) {
  this.publicationService.publicationShowCreate = value ;
}
get publicationShowEdit (): boolean  {
  return this.publicationService.publicationShowEdit;
}

set publicationShowEdit (value: boolean ) {
  this.publicationService.publicationShowEdit = value ;
}

  editShow( pojo : PublicationVo ) {
  this.publicationService.editShow(pojo);

}
  createShow()  {
  this.publicationService.createShow();

}

   delete( pojo : PublicationVo ) {
    this.publicationService.delete(pojo);
  }


 detailShow( pojo : PublicationVo ) {
  this.publicationService.detailShow( pojo);

}

 findPublication(pojo : PublicationVo ) {
  this.publicationService.findPublication( pojo);

}
 findAll() {
  this.publicationService.findAll();
}

   findAllpostePars() {
     this.publicationService.findAllpostePars();
   }

}
