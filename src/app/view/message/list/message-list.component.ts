import { Component, OnInit } from '@angular/core';
import {MessageVo} from '../../../controller/model/message.model';
import {MessageService} from '../../../controller/service/Message.service';
import {DemandeVo} from '../../../controller/model/Demande.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessagelistComponent implements OnInit {

  constructor(private _messageService : MessageService) {}

  get emetteurs(): Array<UtilisateurVo> {
   return this.messageService.emetteurs;
  }
  get demandeConcernes(): Array<DemandeVo> {
   return this.messageService.demandeConcernes;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllemetteurs();
      this.findAlldemandeConcernes();
  }

  get messageService (): MessageService {
    return this._messageService;
  }

  set messageService (value: MessageService) {
    this._messageService = value ;
  }

  get messageListe (): Array<MessageVo> {
    return this.messageService.messageListe;
  }

  set messageListe (value: Array<MessageVo>) {
    this.messageService.messageListe = value ;
  }

  get messageDetail (): MessageVo {
    return this.messageService.messageDetail;
}

  set messageDetail (value: MessageVo) {
  this.messageService.messageDetail = value ;
}

get messageSearch (): MessageVo {
  return this.messageService.messageSearch;
}

set messageSearch (value: MessageVo) {
  this.messageService.messageSearch = value ;
}


get messageShowDetail (): boolean  {
  return this.messageService.messageShowDetail;
}

set messageShowDetail (value: boolean ) {
  this.messageService.messageShowDetail = value ;
}

get messageShowCreate (): boolean  {
  return this.messageService.messageShowCreate;
}

set messageShowCreate (value: boolean ) {
  this.messageService.messageShowCreate = value ;
}
get messageShowEdit (): boolean  {
  return this.messageService.messageShowEdit;
}

set messageShowEdit (value: boolean ) {
  this.messageService.messageShowEdit = value ;
}

  editShow( pojo : MessageVo ) {
  this.messageService.editShow(pojo);

}
  createShow()  {
  this.messageService.createShow();

}

   delete( pojo : MessageVo ) {
    this.messageService.delete(pojo);
  }


 detailShow( pojo : MessageVo ) {
  this.messageService.detailShow( pojo);

}

 findMessage(pojo : MessageVo ) {
  this.messageService.findMessage( pojo);

}
 findAll() {
  this.messageService.findAll();
}

   findAllemetteurs() {
     this.messageService.findAllemetteurs();
   }
   findAlldemandeConcernes() {
     this.messageService.findAlldemandeConcernes();
   }

}
