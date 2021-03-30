import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageVo} from '../model/Message.model';
import {DemandeVo} from '../model/Demande.model';
import {UtilisateurVo} from '../model/Utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  private _messageDetail : MessageVo =  new MessageVo() ;
  private _messageListe  : Array<MessageVo> = new Array<MessageVo>();
  
  private _messageSearch : MessageVo = new MessageVo();
  private _message: MessageVo =  new MessageVo();
  private _searchedMessages: Array<MessageVo> = new Array<MessageVo>();
  private _editableMessages: Array<MessageVo> = new Array<MessageVo>();
  private _emetteurs: Array<UtilisateurVo> = new Array<UtilisateurVo>();
  private _demandeConcernes: Array<DemandeVo> = new Array<DemandeVo>();
  private _destinataire: UtilisateurVo;

  get destinataire(): UtilisateurVo {
    if (this._destinataire == null) {
      this._destinataire = new UtilisateurVo();
    }
    return this._destinataire;
  }

  set destinataire(value: UtilisateurVo) {
    this._destinataire = value;
  }
   get emetteurs(): Array<UtilisateurVo> {
    return this._emetteurs;
   }

   set emetteurs(value: Array<UtilisateurVo>) {
    this._emetteurs = value;
   }
   get demandeConcernes(): Array<DemandeVo> {
    return this._demandeConcernes;
   }

   set demandeConcernes(value: Array<DemandeVo>) {
    this._demandeConcernes = value;
   }

  get message(): MessageVo {
    if (this._message == null) {
      this._message = new MessageVo();
    }
    return this._message;
  }

  set message(value: MessageVo) {
    this._message = value;
  }

  get messageListe (): Array<MessageVo> {
  return this._messageListe;
}

set messageListe (value: Array<MessageVo>) {
  this._messageListe = value ;
}

get messageDetail (): MessageVo {
  return this._messageDetail;
}

set messageDetail (value: MessageVo) {
  this._messageDetail = value ;
}

get messageSearch (): MessageVo {
  return this._messageSearch;
}

set messageSearch (value: MessageVo) {
  this._messageSearch = value ;
}

get messageShowDetail (): boolean  {
  return this._messageShowDetail;
}

set messageShowDetail (value: boolean ) {
  this._messageShowDetail = value ;
}

  get editableMessages (): Array<MessageVo> {
   return this._editableMessages;
  }

  set editableMessages (value: Array<MessageVo>) {
   this._editableMessages = value;
  }

  public findAll(){
  this.http.get<Array<MessageVo>>('http://localhost:8080/generated/message/').subscribe(
    value => {
      if (value != null) {
           this.messageListe = value;
           this.editableMessages = value;
                                                 
      }
    }
  );
}

  public saveMessage() {
  this.http.post<MessageVo>('http://localhost:8080/generated/message/', this.message).subscribe(data=>{
    this.createHide();
     this.messageListe.push(data);

  });
  this.message.destinataireVo.length = 0;
  }

  public editMessage() {
  this.http.put<MessageVo>('http://localhost:8080/generated/message/', this.message).subscribe(data=>{
    this.editHide();
  });
      this.message.destinataireVo.length = 0;
   
  }

  public adddestinataire() {
  this.message.destinataireVo.push(this.clonedestinataire(this.destinataire));
  }

  public clonedestinataire(destinataire: UtilisateurVo) {
  const mydestinataireClone = new UtilisateurVo();
  mydestinataireClone.verified = destinataire.verified;
  mydestinataireClone.about = destinataire.about;
  mydestinataireClone.dateNaissance = destinataire.dateNaissance;
  mydestinataireClone.profilVisible = destinataire.profilVisible;
  mydestinataireClone.tel = destinataire.tel;
  mydestinataireClone.password = destinataire.password;
  mydestinataireClone.role = destinataire.role;
  mydestinataireClone.email = destinataire.email;
  mydestinataireClone.id = destinataire.id;
  mydestinataireClone.adminInfoVo.nom = destinataire.adminInfoVo.nom;7
  mydestinataireClone.laureatInfoVo.cne = destinataire.laureatInfoVo.cne;7
  mydestinataireClone.etudiantInfoVo.cne = destinataire.etudiantInfoVo.cne;7
  mydestinataireClone.professeurInfoVo.code = destinataire.professeurInfoVo.code;7
  mydestinataireClone.reponsesVo.reponse = destinataire.reponsesVo.reponse;7
  return mydestinataireClone;
  }

  public removedestinataire(i: number) {
    this.message.destinataireVo.splice(i, 1);
  }
   public findMessage ( pojo : MessageVo ){
  this.http.post<Array<MessageVo>>('http://localhost:8080/generated/message/search/', pojo).subscribe(
    value =>{
       this.messageListe = value;  
    } );
}

public detailShow ( pojo : MessageVo ){
    this.messageDetail = pojo;
    this.messageShowDetail = true;
 
}



delete(pojo: MessageVo) {
   this.http.delete<MessageVo>('http://localhost:8080/generated/message/id/'+pojo.id).subscribe(
        value => {
        var index = this.messageListe.indexOf(pojo);
if (index > -1) {
   this.messageListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<MessageVo>('http://localhost:8080/generated/message/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.message = value; }
        }
        );
        }

            public findAllemetteurs() {
             this.http.get<Array<UtilisateurVo>>('http://localhost:8080/generated/utilisateur/').subscribe(
            value => {
            if (value != null) { this.emetteurs = value; }
            }
            );
            }
            public findAlldemandeConcernes() {
             this.http.get<Array<DemandeVo>>('http://localhost:8080/generated/demande/').subscribe(
            value => {
            if (value != null) { this.demandeConcernes = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _messageShowDetail : boolean;
              public detailHide (){

       this.messageShowDetail = false;
       this.messageDetail = null;
                                  }
 private _messageShowEdit : boolean;

 private _messageShowCreate : boolean;

get messageShowEdit (): boolean  {
  return this._messageShowEdit;
}

set messageShowEdit (value: boolean ) {
  this._messageShowEdit = value ;
}
get messageShowCreate (): boolean  {
  return this._messageShowCreate;
}

set messageShowCreate (value: boolean ) {
  this._messageShowCreate = value ;
}
             public editShow(pojo : MessageVo ){

       this.messageShowEdit = true;
       this.message = pojo;
                                  }

              public editHide (){

       this.messageShowEdit = false;
       this.message = new MessageVo();
                                  }

               public createShow(){

       this.messageShowCreate = true;
       this.message = new MessageVo();
                                  }

              public createHide (){

       this.messageShowCreate = false;
       this.message = new MessageVo();
                                  }
}
