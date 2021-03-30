import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PublicationVo} from '../model/Publication.model';
import {CommentaireVo} from '../model/Commentaire.model';
import {UtilisateurVo} from '../model/Utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }
  private _publicationDetail : PublicationVo =  new PublicationVo() ;
  private _publicationListe  : Array<PublicationVo> = new Array<PublicationVo>();
  
  private _publicationSearch : PublicationVo = new PublicationVo();
  private _publication: PublicationVo =  new PublicationVo();
  private _searchedPublications: Array<PublicationVo> = new Array<PublicationVo>();
  private _editablePublications: Array<PublicationVo> = new Array<PublicationVo>();
  private _postePars: Array<UtilisateurVo> = new Array<UtilisateurVo>();
  private _commentaire: CommentaireVo;

  get commentaire(): CommentaireVo {
    if (this._commentaire == null) {
      this._commentaire = new CommentaireVo();
    }
    return this._commentaire;
  }

  set commentaire(value: CommentaireVo) {
    this._commentaire = value;
  }
   get postePars(): Array<UtilisateurVo> {
    return this._postePars;
   }

   set postePars(value: Array<UtilisateurVo>) {
    this._postePars = value;
   }

  get publication(): PublicationVo {
    if (this._publication == null) {
      this._publication = new PublicationVo();
    }
    return this._publication;
  }

  set publication(value: PublicationVo) {
    this._publication = value;
  }

  get publicationListe (): Array<PublicationVo> {
  return this._publicationListe;
}

set publicationListe (value: Array<PublicationVo>) {
  this._publicationListe = value ;
}

get publicationDetail (): PublicationVo {
  return this._publicationDetail;
}

set publicationDetail (value: PublicationVo) {
  this._publicationDetail = value ;
}

get publicationSearch (): PublicationVo {
  return this._publicationSearch;
}

set publicationSearch (value: PublicationVo) {
  this._publicationSearch = value ;
}

get publicationShowDetail (): boolean  {
  return this._publicationShowDetail;
}

set publicationShowDetail (value: boolean ) {
  this._publicationShowDetail = value ;
}

  get editablePublications (): Array<PublicationVo> {
   return this._editablePublications;
  }

  set editablePublications (value: Array<PublicationVo>) {
   this._editablePublications = value;
  }

  public findAll(){
  this.http.get<Array<PublicationVo>>('http://localhost:8080/generated/publication/').subscribe(
    value => {
      if (value != null) {
           this.publicationListe = value;
           this.editablePublications = value;
                                                 
      }
    }
  );
}

  public savePublication() {
  this.http.post<PublicationVo>('http://localhost:8080/generated/publication/', this.publication).subscribe(data=>{
    this.createHide();
     this.publicationListe.push(data);

  });
  this.publication.commentaireVo.length = 0;
  }

  public editPublication() {
  this.http.put<PublicationVo>('http://localhost:8080/generated/publication/', this.publication).subscribe(data=>{
    this.editHide();
  });
      this.publication.commentaireVo.length = 0;
   
  }

  public addcommentaire() {
  this.publication.commentaireVo.push(this.clonecommentaire(this.commentaire));
  }

  public clonecommentaire(commentaire: CommentaireVo) {
  const mycommentaireClone = new CommentaireVo();
  mycommentaireClone.comref = commentaire.comref;
  mycommentaireClone.contenu = commentaire.contenu;
  mycommentaireClone.id = commentaire.id;
  mycommentaireClone.publicationVo.ref = commentaire.publicationVo.ref;7
  mycommentaireClone.posteParVo.email = commentaire.posteParVo.email;7
  return mycommentaireClone;
  }

  public removecommentaire(i: number) {
    this.publication.commentaireVo.splice(i, 1);
  }
   public findPublication ( pojo : PublicationVo ){
  this.http.post<Array<PublicationVo>>('http://localhost:8080/generated/publication/search/', pojo).subscribe(
    value =>{
       this.publicationListe = value;  
    } );
}

public detailShow ( pojo : PublicationVo ){
    this.publicationDetail = pojo;
    this.publicationShowDetail = true;
 
}



delete(pojo: PublicationVo) {
   this.http.delete<PublicationVo>('http://localhost:8080/generated/publication/id/'+pojo.id).subscribe(
        value => {
        var index = this.publicationListe.indexOf(pojo);
if (index > -1) {
   this.publicationListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<PublicationVo>('http://localhost:8080/generated/publication/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.publication = value; }
        }
        );
        }

            public findAllpostePars() {
             this.http.get<Array<UtilisateurVo>>('http://localhost:8080/generated/utilisateur/').subscribe(
            value => {
            if (value != null) { this.postePars = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _publicationShowDetail : boolean;
              public detailHide (){

       this.publicationShowDetail = false;
       this.publicationDetail = null;
                                  }
 private _publicationShowEdit : boolean;

 private _publicationShowCreate : boolean;

get publicationShowEdit (): boolean  {
  return this._publicationShowEdit;
}

set publicationShowEdit (value: boolean ) {
  this._publicationShowEdit = value ;
}
get publicationShowCreate (): boolean  {
  return this._publicationShowCreate;
}

set publicationShowCreate (value: boolean ) {
  this._publicationShowCreate = value ;
}
             public editShow(pojo : PublicationVo ){

       this.publicationShowEdit = true;
       this.publication = pojo;
                                  }

              public editHide (){

       this.publicationShowEdit = false;
       this.publication = new PublicationVo();
                                  }

               public createShow(){

       this.publicationShowCreate = true;
       this.publication = new PublicationVo();
                                  }

              public createHide (){

       this.publicationShowCreate = false;
       this.publication = new PublicationVo();
                                  }
}
