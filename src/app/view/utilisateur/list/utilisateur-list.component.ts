import { Component, OnInit } from '@angular/core';
import {UtilisateurVo} from '../../../controller/model/utilisateur.model';
import {UtilisateurService} from '../../../controller/service/Utilisateur.service';
import {ProfesseurInfoVo} from '../../../controller/model/ProfesseurInfo.model';
import {MessageVo} from '../../../controller/model/Message.model';
import {AdminInfoVo} from '../../../controller/model/AdminInfo.model';
import {EtudiantInfoVo} from '../../../controller/model/EtudiantInfo.model';
import {CommentaireVo} from '../../../controller/model/Commentaire.model';
import {ReponseVo} from '../../../controller/model/Reponse.model';
import {PublicationVo} from '../../../controller/model/Publication.model';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurlistComponent implements OnInit {

  constructor(private _utilisateurService : UtilisateurService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get utilisateurService (): UtilisateurService {
    return this._utilisateurService;
  }

  set utilisateurService (value: UtilisateurService) {
    this._utilisateurService = value ;
  }

  get utilisateurListe (): Array<UtilisateurVo> {
    return this.utilisateurService.utilisateurListe;
  }

  set utilisateurListe (value: Array<UtilisateurVo>) {
    this.utilisateurService.utilisateurListe = value ;
  }

  get utilisateurDetail (): UtilisateurVo {
    return this.utilisateurService.utilisateurDetail;
}

  set utilisateurDetail (value: UtilisateurVo) {
  this.utilisateurService.utilisateurDetail = value ;
}

get utilisateurSearch (): UtilisateurVo {
  return this.utilisateurService.utilisateurSearch;
}

set utilisateurSearch (value: UtilisateurVo) {
  this.utilisateurService.utilisateurSearch = value ;
}


get utilisateurShowDetail (): boolean  {
  return this.utilisateurService.utilisateurShowDetail;
}

set utilisateurShowDetail (value: boolean ) {
  this.utilisateurService.utilisateurShowDetail = value ;
}

get utilisateurShowCreate (): boolean  {
  return this.utilisateurService.utilisateurShowCreate;
}

set utilisateurShowCreate (value: boolean ) {
  this.utilisateurService.utilisateurShowCreate = value ;
}
get utilisateurShowEdit (): boolean  {
  return this.utilisateurService.utilisateurShowEdit;
}

set utilisateurShowEdit (value: boolean ) {
  this.utilisateurService.utilisateurShowEdit = value ;
}

  editShow( pojo : UtilisateurVo ) {
  this.utilisateurService.editShow(pojo);

}
  createShow()  {
  this.utilisateurService.createShow();

}

   delete( pojo : UtilisateurVo ) {
    this.utilisateurService.delete(pojo);
  }


 detailShow( pojo : UtilisateurVo ) {
  this.utilisateurService.detailShow( pojo);

}

 findUtilisateur(pojo : UtilisateurVo ) {
  this.utilisateurService.findUtilisateur( pojo);

}
 findAll() {
  this.utilisateurService.findAll();
}


}
