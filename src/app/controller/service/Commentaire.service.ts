import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentaireVo} from '../model/Commentaire.model';
import {UtilisateurVo} from '../model/Utilisateur.model';
import {PublicationVo} from '../model/Publication.model';
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }
  private _commentaireDetail : CommentaireVo =  new CommentaireVo() ;
  private _commentaireListe  : Array<CommentaireVo> = new Array<CommentaireVo>();
  
  private _commentaireSearch : CommentaireVo = new CommentaireVo();
  private _commentaire: CommentaireVo =  new CommentaireVo();
  private _searchedCommentaires: Array<CommentaireVo> = new Array<CommentaireVo>();
  private _editableCommentaires: Array<CommentaireVo> = new Array<CommentaireVo>();
  private _publications: Array<PublicationVo> = new Array<PublicationVo>();
  private _postePars: Array<UtilisateurVo> = new Array<UtilisateurVo>();
   get publications(): Array<PublicationVo> {
    return this._publications;
   }

   set publications(value: Array<PublicationVo>) {
    this._publications = value;
   }
   get postePars(): Array<UtilisateurVo> {
    return this._postePars;
   }

   set postePars(value: Array<UtilisateurVo>) {
    this._postePars = value;
   }

  get commentaire(): CommentaireVo {
    if (this._commentaire == null) {
      this._commentaire = new CommentaireVo();
    }
    return this._commentaire;
  }

  set commentaire(value: CommentaireVo) {
    this._commentaire = value;
  }

  get commentaireListe (): Array<CommentaireVo> {
  return this._commentaireListe;
}

set commentaireListe (value: Array<CommentaireVo>) {
  this._commentaireListe = value ;
}

get commentaireDetail (): CommentaireVo {
  return this._commentaireDetail;
}

set commentaireDetail (value: CommentaireVo) {
  this._commentaireDetail = value ;
}

get commentaireSearch (): CommentaireVo {
  return this._commentaireSearch;
}

set commentaireSearch (value: CommentaireVo) {
  this._commentaireSearch = value ;
}

get commentaireShowDetail (): boolean  {
  return this._commentaireShowDetail;
}

set commentaireShowDetail (value: boolean ) {
  this._commentaireShowDetail = value ;
}

  get editableCommentaires (): Array<CommentaireVo> {
   return this._editableCommentaires;
  }

  set editableCommentaires (value: Array<CommentaireVo>) {
   this._editableCommentaires = value;
  }

  public findAll(){
  this.http.get<Array<CommentaireVo>>('http://localhost:8080/generated/commentaire/').subscribe(
    value => {
      if (value != null) {
           this.commentaireListe = value;
           this.editableCommentaires = value;
                                                 
      }
    }
  );
}

  public saveCommentaire() {
  this.http.post<CommentaireVo>('http://localhost:8080/generated/commentaire/', this.commentaire).subscribe(data=>{
    this.createHide();
     this.commentaireListe.push(data);

  });
  }

  public editCommentaire() {
  this.http.put<CommentaireVo>('http://localhost:8080/generated/commentaire/', this.commentaire).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findCommentaire ( pojo : CommentaireVo ){
  this.http.post<Array<CommentaireVo>>('http://localhost:8080/generated/commentaire/search/', pojo).subscribe(
    value =>{
       this.commentaireListe = value;  
    } );
}

public detailShow ( pojo : CommentaireVo ){
    this.commentaireDetail = pojo;
    this.commentaireShowDetail = true;
 
}



delete(pojo: CommentaireVo) {
   this.http.delete<CommentaireVo>('http://localhost:8080/generated/commentaire/id/'+pojo.id).subscribe(
        value => {
        var index = this.commentaireListe.indexOf(pojo);
if (index > -1) {
   this.commentaireListe.splice(index, 1);
}
}
        );


}


       public findBycomref(ref: string) {
      this.http.get<CommentaireVo>('http://localhost:8080/generated/commentaire/comref/' + ref).subscribe(
        value => {
        if (value != null) { this.commentaire = value; }
        }
        );
        }

            public findAllpublications() {
             this.http.get<Array<PublicationVo>>('http://localhost:8080/generated/publication/').subscribe(
            value => {
            if (value != null) { this.publications = value; }
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
        private _commentaireShowDetail : boolean;
              public detailHide (){

       this.commentaireShowDetail = false;
       this.commentaireDetail = null;
                                  }
 private _commentaireShowEdit : boolean;

 private _commentaireShowCreate : boolean;

get commentaireShowEdit (): boolean  {
  return this._commentaireShowEdit;
}

set commentaireShowEdit (value: boolean ) {
  this._commentaireShowEdit = value ;
}
get commentaireShowCreate (): boolean  {
  return this._commentaireShowCreate;
}

set commentaireShowCreate (value: boolean ) {
  this._commentaireShowCreate = value ;
}
             public editShow(pojo : CommentaireVo ){

       this.commentaireShowEdit = true;
       this.commentaire = pojo;
                                  }

              public editHide (){

       this.commentaireShowEdit = false;
       this.commentaire = new CommentaireVo();
                                  }

               public createShow(){

       this.commentaireShowCreate = true;
       this.commentaire = new CommentaireVo();
                                  }

              public createHide (){

       this.commentaireShowCreate = false;
       this.commentaire = new CommentaireVo();
                                  }
}
