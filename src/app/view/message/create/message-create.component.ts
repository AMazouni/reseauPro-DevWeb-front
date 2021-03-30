import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../controller/service/Message.service';
import {MessageVo} from '../../../controller/model/message.model';
import {DemandeVo} from '../../../controller/model/Demande.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {
  constructor(private messageService: MessageService) { }

   ngOnInit(): void {
      this.findAllemetteurs();
      this.findAlldemandeConcernes();
    }

   get message(): MessageVo {
    return this.messageService.message;
  }

  get emetteurs(): Array<UtilisateurVo> {
   return this.messageService.emetteurs;
  }
  get demandeConcernes(): Array<DemandeVo> {
   return this.messageService.demandeConcernes;
  }

  get destinataire(): UtilisateurVo {
    return this.messageService.destinataire;
  }

  addUtilisateur() {
   return this.messageService.adddestinataire();
  }

  removeUtilisateur(i: number) {
   this.messageService.removedestinataire(i);
  }
   saveMessage() {
    this.messageService.saveMessage();
  }

   findAllemetteurs() {
     this.messageService.findAllemetteurs();
   }
   findAlldemandeConcernes() {
     this.messageService.findAlldemandeConcernes();
   }

get messageShowCreate (): boolean  {
  return this.messageService.messageShowCreate;
}

set messageShowCreate (value: boolean ) {
  this.messageService.messageShowCreate = value ;
}
public createHide(){
       this.messageService.createHide();
}
}