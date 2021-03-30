import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DemandeVo} from '../model/Demande.model';
import {StatusVo} from '../model/Status.model';
import {MessageVo} from '../model/Message.model';
import {EtudiantInfoVo} from '../model/EtudiantInfo.model';
import {CatDemandeVo} from '../model/CatDemande.model';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  private _demandeDetail : DemandeVo =  new DemandeVo() ;
  private _demandeListe  : Array<DemandeVo> = new Array<DemandeVo>();
  
  private _demandeSearch : DemandeVo = new DemandeVo();
  private _demande: DemandeVo =  new DemandeVo();
  private _searchedDemandes: Array<DemandeVo> = new Array<DemandeVo>();
  private _editableDemandes: Array<DemandeVo> = new Array<DemandeVo>();
  private _categorieDemandes: Array<CatDemandeVo> = new Array<CatDemandeVo>();
  private _demandePars: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  private _statuss: Array<StatusVo> = new Array<StatusVo>();
  private _demandeAs: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  private _messages: MessageVo;

  get messages(): MessageVo {
    if (this._messages == null) {
      this._messages = new MessageVo();
    }
    return this._messages;
  }

  set messages(value: MessageVo) {
    this._messages = value;
  }
   get categorieDemandes(): Array<CatDemandeVo> {
    return this._categorieDemandes;
   }

   set categorieDemandes(value: Array<CatDemandeVo>) {
    this._categorieDemandes = value;
   }
   get demandePars(): Array<EtudiantInfoVo> {
    return this._demandePars;
   }

   set demandePars(value: Array<EtudiantInfoVo>) {
    this._demandePars = value;
   }
   get statuss(): Array<StatusVo> {
    return this._statuss;
   }

   set statuss(value: Array<StatusVo>) {
    this._statuss = value;
   }
   get demandeAs(): Array<EtudiantInfoVo> {
    return this._demandeAs;
   }

   set demandeAs(value: Array<EtudiantInfoVo>) {
    this._demandeAs = value;
   }

  get demande(): DemandeVo {
    if (this._demande == null) {
      this._demande = new DemandeVo();
    }
    return this._demande;
  }

  set demande(value: DemandeVo) {
    this._demande = value;
  }

  get demandeListe (): Array<DemandeVo> {
  return this._demandeListe;
}

set demandeListe (value: Array<DemandeVo>) {
  this._demandeListe = value ;
}

get demandeDetail (): DemandeVo {
  return this._demandeDetail;
}

set demandeDetail (value: DemandeVo) {
  this._demandeDetail = value ;
}

get demandeSearch (): DemandeVo {
  return this._demandeSearch;
}

set demandeSearch (value: DemandeVo) {
  this._demandeSearch = value ;
}

get demandeShowDetail (): boolean  {
  return this._demandeShowDetail;
}

set demandeShowDetail (value: boolean ) {
  this._demandeShowDetail = value ;
}

  get editableDemandes (): Array<DemandeVo> {
   return this._editableDemandes;
  }

  set editableDemandes (value: Array<DemandeVo>) {
   this._editableDemandes = value;
  }

  public findAll(){
  this.http.get<Array<DemandeVo>>('http://localhost:8080/generated/demande/').subscribe(
    value => {
      if (value != null) {
           this.demandeListe = value;
           this.editableDemandes = value;
                                                 
      }
    }
  );
}

  public saveDemande() {
  this.http.post<DemandeVo>('http://localhost:8080/generated/demande/', this.demande).subscribe(data=>{
    this.createHide();
     this.demandeListe.push(data);

  });
  this.demande.messagesVo.length = 0;
  }

  public editDemande() {
  this.http.put<DemandeVo>('http://localhost:8080/generated/demande/', this.demande).subscribe(data=>{
    this.editHide();
  });
      this.demande.messagesVo.length = 0;
   
  }

  public addmessages() {
  this.demande.messagesVo.push(this.clonemessages(this.messages));
  }

  public clonemessages(messages: MessageVo) {
  const mymessagesClone = new MessageVo();
  mymessagesClone.contenu = messages.contenu;
  mymessagesClone.ref = messages.ref;
  mymessagesClone.objet = messages.objet;
  mymessagesClone.id = messages.id;
  mymessagesClone.emetteurVo.email = messages.emetteurVo.email;7
  mymessagesClone.demandeConcerneVo.ref = messages.demandeConcerneVo.ref;7
  return mymessagesClone;
  }

  public removemessages(i: number) {
    this.demande.messagesVo.splice(i, 1);
  }
   public findDemande ( pojo : DemandeVo ){
  this.http.post<Array<DemandeVo>>('http://localhost:8080/generated/demande/search/', pojo).subscribe(
    value =>{
       this.demandeListe = value;  
    } );
}

public detailShow ( pojo : DemandeVo ){
    this.demandeDetail = pojo;
    this.demandeShowDetail = true;
 
}



delete(pojo: DemandeVo) {
   this.http.delete<DemandeVo>('http://localhost:8080/generated/demande/id/'+pojo.id).subscribe(
        value => {
        var index = this.demandeListe.indexOf(pojo);
if (index > -1) {
   this.demandeListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<DemandeVo>('http://localhost:8080/generated/demande/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.demande = value; }
        }
        );
        }

            public findAllcategorieDemandes() {
             this.http.get<Array<CatDemandeVo>>('http://localhost:8080/generated/catDemande/').subscribe(
            value => {
            if (value != null) { this.categorieDemandes = value; }
            }
            );
            }
            public findAlldemandePars() {
             this.http.get<Array<EtudiantInfoVo>>('http://localhost:8080/generated/etudiantInfo/').subscribe(
            value => {
            if (value != null) { this.demandePars = value; }
            }
            );
            }
            public findAllstatuss() {
             this.http.get<Array<StatusVo>>('http://localhost:8080/generated/status/').subscribe(
            value => {
            if (value != null) { this.statuss = value; }
            }
            );
            }
            public findAlldemandeAs() {
             this.http.get<Array<EtudiantInfoVo>>('http://localhost:8080/generated/etudiantInfo/').subscribe(
            value => {
            if (value != null) { this.demandeAs = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _demandeShowDetail : boolean;
              public detailHide (){

       this.demandeShowDetail = false;
       this.demandeDetail = null;
                                  }
 private _demandeShowEdit : boolean;

 private _demandeShowCreate : boolean;

get demandeShowEdit (): boolean  {
  return this._demandeShowEdit;
}

set demandeShowEdit (value: boolean ) {
  this._demandeShowEdit = value ;
}
get demandeShowCreate (): boolean  {
  return this._demandeShowCreate;
}

set demandeShowCreate (value: boolean ) {
  this._demandeShowCreate = value ;
}
             public editShow(pojo : DemandeVo ){

       this.demandeShowEdit = true;
       this.demande = pojo;
                                  }

              public editHide (){

       this.demandeShowEdit = false;
       this.demande = new DemandeVo();
                                  }

               public createShow(){

       this.demandeShowCreate = true;
       this.demande = new DemandeVo();
                                  }

              public createHide (){

       this.demandeShowCreate = false;
       this.demande = new DemandeVo();
                                  }
}
