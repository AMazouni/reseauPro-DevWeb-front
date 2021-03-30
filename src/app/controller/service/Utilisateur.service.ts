import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilisateurVo} from '../model/Utilisateur.model';
import {ProfesseurInfoVo} from '../model/ProfesseurInfo.model';
import {MessageVo} from '../model/Message.model';
import {AdminInfoVo} from '../model/AdminInfo.model';
import {EtudiantInfoVo} from '../model/EtudiantInfo.model';
import {CommentaireVo} from '../model/Commentaire.model';
import {ReponseVo} from '../model/Reponse.model';
import {PublicationVo} from '../model/Publication.model';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
  private _utilisateurDetail : UtilisateurVo =  new UtilisateurVo() ;
  private _utilisateurListe  : Array<UtilisateurVo> = new Array<UtilisateurVo>();
  
  private _utilisateurSearch : UtilisateurVo = new UtilisateurVo();
  private _utilisateur: UtilisateurVo =  new UtilisateurVo();
  private _searchedUtilisateurs: Array<UtilisateurVo> = new Array<UtilisateurVo>();
  private _editableUtilisateurs: Array<UtilisateurVo> = new Array<UtilisateurVo>();
  private _messagesRecus: MessageVo;

  get messagesRecus(): MessageVo {
    if (this._messagesRecus == null) {
      this._messagesRecus = new MessageVo();
    }
    return this.messagesRecus;
  }

  set messagesRecus(value: MessageVo) {
    this._messagesRecus = value;
  }
  private _messagesEnvoye: MessageVo;

  get messagesEnvoye(): MessageVo {
    if (this._messagesEnvoye == null) {
      this._messagesEnvoye = new MessageVo();
    }
    return this._messagesEnvoye;
  }

  set messagesEnvoye(value: MessageVo) {
    this._messagesEnvoye = value;
  }
  private _comRediges: CommentaireVo;

  get comRediges(): CommentaireVo {
    if (this._comRediges == null) {
      this._comRediges = new CommentaireVo();
    }
    return this._comRediges;
  }

  set comRediges(value: CommentaireVo) {
    this._comRediges = value;
  }
  private _publicationsRediges: PublicationVo;

  get publicationsRediges(): PublicationVo {
    if (this._publicationsRediges == null) {
      this._publicationsRediges = new PublicationVo();
    }
    return this.publicationsRediges;
  }

  set publicationsRediges(value: PublicationVo) {
    this._publicationsRediges = value;
  }

  get utilisateur(): UtilisateurVo {
    if (this._utilisateur == null) {
      this._utilisateur = new UtilisateurVo();
    }
    return this._utilisateur;
  }

  set utilisateur(value: UtilisateurVo) {
    this._utilisateur = value;
  }

  get utilisateurListe (): Array<UtilisateurVo> {
  return this._utilisateurListe;
}

set utilisateurListe (value: Array<UtilisateurVo>) {
  this._utilisateurListe = value ;
}

get utilisateurDetail (): UtilisateurVo {
  return this._utilisateurDetail;
}

set utilisateurDetail (value: UtilisateurVo) {
  this._utilisateurDetail = value ;
}

get utilisateurSearch (): UtilisateurVo {
  return this._utilisateurSearch;
}

set utilisateurSearch (value: UtilisateurVo) {
  this._utilisateurSearch = value ;
}

get utilisateurShowDetail (): boolean  {
  return this._utilisateurShowDetail;
}

set utilisateurShowDetail (value: boolean ) {
  this._utilisateurShowDetail = value ;
}

  get editableUtilisateurs (): Array<UtilisateurVo> {
   return this._editableUtilisateurs;
  }

  set editableUtilisateurs (value: Array<UtilisateurVo>) {
   this._editableUtilisateurs = value;
  }

  public findAll(){
  this.http.get<Array<UtilisateurVo>>('http://localhost:8080/uca/reseaupro/utilisateur/').subscribe(
    value => {
      if (value != null) {
           this.utilisateurListe = value;
           this.editableUtilisateurs = value;
                                                 
      }
    }
  );
}

  public saveUtilisateur() {
  this.http.post<UtilisateurVo>('http://localhost:8080/uca/reseaupro/utilisateur/', this.utilisateur).subscribe(data=>{
    this.createHide();
     this.utilisateurListe.push(data);

  });
  this.utilisateur.messagesRecusVo.length = 0;
  this.utilisateur.messagesEnvoyeVo.length = 0;
  this.utilisateur.comRedigesVo.length = 0;
  this.utilisateur.publicationsRedigesVo.length = 0;
  }

  public editUtilisateur() {
  this.http.put<UtilisateurVo>('http://localhost:8080/uca/reseaupro/utilisateur/', this.utilisateur).subscribe(data=>{
    this.editHide();
  });
      this.utilisateur.messagesRecusVo.length = 0;
      this.utilisateur.messagesEnvoyeVo.length = 0;
      this.utilisateur.comRedigesVo.length = 0;
      this.utilisateur.publicationsRedigesVo.length = 0;
   
  }

  public addmessagesRecus() {
  this.utilisateur.messagesRecusVo.push(this.clonemessagesRecus(this.messagesRecus));
  }

  public clonemessagesRecus(messagesRecus: MessageVo) {
  const mymessagesRecusClone = new MessageVo();
  mymessagesRecusClone.contenu = messagesRecus.contenu;
  mymessagesRecusClone.ref = messagesRecus.ref;
  mymessagesRecusClone.objet = messagesRecus.objet;
  mymessagesRecusClone.id = messagesRecus.id;
  mymessagesRecusClone.emetteurVo.email = messagesRecus.emetteurVo.email;7
  mymessagesRecusClone.demandeConcerneVo.ref = messagesRecus.demandeConcerneVo.ref;7
  return mymessagesRecusClone;
  }

  public removemessagesRecus(i: number) {
    this.utilisateur.messagesRecusVo.splice(i, 1);
  }
  public addmessagesEnvoye() {
  this.utilisateur.messagesEnvoyeVo.push(this.clonemessagesEnvoye(this.messagesEnvoye));
  }

  public clonemessagesEnvoye(messagesEnvoye: MessageVo) {
  const mymessagesEnvoyeClone = new MessageVo();
  mymessagesEnvoyeClone.contenu = messagesEnvoye.contenu;
  mymessagesEnvoyeClone.ref = messagesEnvoye.ref;
  mymessagesEnvoyeClone.objet = messagesEnvoye.objet;
  mymessagesEnvoyeClone.id = messagesEnvoye.id;
  mymessagesEnvoyeClone.emetteurVo.email = messagesEnvoye.emetteurVo.email;7
  mymessagesEnvoyeClone.demandeConcerneVo.ref = messagesEnvoye.demandeConcerneVo.ref;7
  return mymessagesEnvoyeClone;
  }

  public removemessagesEnvoye(i: number) {
    this.utilisateur.messagesEnvoyeVo.splice(i, 1);
  }
  public addcomRediges() {
  this.utilisateur.comRedigesVo.push(this.clonecomRediges(this.comRediges));
  }

  public clonecomRediges(comRediges: CommentaireVo) {
  const mycomRedigesClone = new CommentaireVo();
  mycomRedigesClone.comref = comRediges.comref;
  mycomRedigesClone.contenu = comRediges.contenu;
  mycomRedigesClone.id = comRediges.id;
  mycomRedigesClone.publicationVo.ref = comRediges.publicationVo.ref;7
  mycomRedigesClone.posteParVo.email = comRediges.posteParVo.email;7
  return mycomRedigesClone;
  }

  public removecomRediges(i: number) {
    this.utilisateur.comRedigesVo.splice(i, 1);
  }
  public addpublicationsRediges() {
  this.utilisateur.publicationsRedigesVo.push(this.clonepublicationsRediges(this.publicationsRediges));
  }

  public clonepublicationsRediges(publicationsRediges: PublicationVo) {
  const mypublicationsRedigesClone = new PublicationVo();
  mypublicationsRedigesClone.contenu = publicationsRediges.contenu;
  mypublicationsRedigesClone.verified = publicationsRediges.verified;
  mypublicationsRedigesClone.ref = publicationsRediges.ref;
  mypublicationsRedigesClone.id = publicationsRediges.id;
  mypublicationsRedigesClone.posteParVo.email = publicationsRediges.posteParVo.email;7
  return mypublicationsRedigesClone;
  }

  public removepublicationsRediges(i: number) {
    this.utilisateur.publicationsRedigesVo.splice(i, 1);
  }
   public findUtilisateur ( pojo : UtilisateurVo ){
  this.http.post<Array<UtilisateurVo>>('http://localhost:8080/uca/reseaupro/utilisateur/search/', pojo).subscribe(
    value =>{
       this.utilisateurListe = value;  
    } );
}

public detailShow ( pojo : UtilisateurVo ){
    this.utilisateurDetail = pojo;
    this.utilisateurShowDetail = true;
 
}



delete(pojo: UtilisateurVo) {
   this.http.delete<UtilisateurVo>('http://localhost:8080/uca/reseaupro/utilisateur/id/'+pojo.id).subscribe(
        value => {
        var index = this.utilisateurListe.indexOf(pojo);
if (index > -1) {
   this.utilisateurListe.splice(index, 1);
}
}
        );


}


       public findByemail(ref: string) {
      this.http.get<UtilisateurVo>('http://localhost:8080/uca/reseaupro/utilisateur/email/' + ref).subscribe(
        value => {
        if (value != null) { this.utilisateur = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _utilisateurShowDetail : boolean;
              public detailHide (){

       this.utilisateurShowDetail = false;
       this.utilisateurDetail = null;
                                  }
 private _utilisateurShowEdit : boolean;

 private _utilisateurShowCreate : boolean;

get utilisateurShowEdit (): boolean  {
  return this._utilisateurShowEdit;
}

set utilisateurShowEdit (value: boolean ) {
  this._utilisateurShowEdit = value ;
}
get utilisateurShowCreate (): boolean  {
  return this._utilisateurShowCreate;
}

set utilisateurShowCreate (value: boolean ) {
  this._utilisateurShowCreate = value ;
}
             public editShow(pojo : UtilisateurVo ){

       this.utilisateurShowEdit = true;
       this.utilisateur = pojo;
                                  }

              public editHide (){

       this.utilisateurShowEdit = false;
       this.utilisateur = new UtilisateurVo();
                                  }

               public createShow(){

       this.utilisateurShowCreate = true;
       this.utilisateur = new UtilisateurVo();
                                  }

              public createHide (){

       this.utilisateurShowCreate = false;
       this.utilisateur = new UtilisateurVo();
                                  }
}
