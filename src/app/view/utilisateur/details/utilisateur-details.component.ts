import { Component, OnInit } from '@angular/core';
import {UtilisateurVo} from '../../../controller/model/utilisateur.model';
import {UtilisateurService} from '../../../controller/service/Utilisateur.service';

@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.css']
})

export class UtilisateurDetailsComponent implements OnInit {

  constructor(private _utilisateurService : UtilisateurService) {}


   get utilisateurService (): UtilisateurService {
    return this._utilisateurService;
  }

  set utilisateurService (value: UtilisateurService) {
    this._utilisateurService = value ;
  }

  get utilisateurDetail (): UtilisateurVo {
    return this.utilisateurService.utilisateurDetail;
}

  set utilisateurDetail (value: UtilisateurVo) {
  this.utilisateurService.utilisateurDetail = value ;
}


get utilisateurShowDetail (): boolean  {
  return this.utilisateurService.utilisateurShowDetail;
}

set utilisateurShowDetail (value: boolean ) {
  this.utilisateurService.utilisateurShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.utilisateurService.detailHide();
}

}