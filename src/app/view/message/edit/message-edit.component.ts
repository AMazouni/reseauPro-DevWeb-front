import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../controller/service/Message.service';
import {MessageVo} from '../../../controller/model/message.model';
import {DemandeVo} from '../../../controller/model/Demande.model';
import {UtilisateurVo} from '../../../controller/model/Utilisateur.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  constructor(private messageService: MessageService) { }

   ngOnInit(): void {
       this.findAllemetteurs();
       this.findAlldemandeConcernes();
    }

   get message(): MessageVo {
    return this.messageService.message;
  }

   get editableMessages(): Array<MessageVo> {
    return this.messageService.editableMessages;
   }

   set editableMessages(value: Array<MessageVo>) {
    this.messageService.editableMessages = value;
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

  adddestinataire() {
   return this.messageService.adddestinataire();
  }

  removedestinataire(i: number) {
   this.messageService.removedestinataire(i);
  }
   editMessage() {
    this.messageService.editMessage();
  }
    findAllemetteurs() {
     this.messageService.findAllemetteurs();
    }
    findAlldemandeConcernes() {
     this.messageService.findAlldemandeConcernes();
    }

     findByref(ref: string) {
      this.messageService.findByref(ref);
     }

    editHide() {
      this.messageService.editHide();
    }
    

}