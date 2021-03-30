import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReponseVo} from '../model/Reponse.model';
import {QuestionVo} from '../model/Question.model';
@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient) { }
  private _reponseDetail : ReponseVo =  new ReponseVo() ;
  private _reponseListe  : Array<ReponseVo> = new Array<ReponseVo>();
  
  private _reponseSearch : ReponseVo = new ReponseVo();
  private _reponse: ReponseVo =  new ReponseVo();
  private _searchedReponses: Array<ReponseVo> = new Array<ReponseVo>();
  private _editableReponses: Array<ReponseVo> = new Array<ReponseVo>();
  private _questions: Array<QuestionVo> = new Array<QuestionVo>();
   get questions(): Array<QuestionVo> {
    return this._questions;
   }

   set questions(value: Array<QuestionVo>) {
    this._questions = value;
   }

  get reponse(): ReponseVo {
    if (this._reponse == null) {
      this._reponse = new ReponseVo();
    }
    return this._reponse;
  }

  set reponse(value: ReponseVo) {
    this._reponse = value;
  }

  get reponseListe (): Array<ReponseVo> {
  return this._reponseListe;
}

set reponseListe (value: Array<ReponseVo>) {
  this._reponseListe = value ;
}

get reponseDetail (): ReponseVo {
  return this._reponseDetail;
}

set reponseDetail (value: ReponseVo) {
  this._reponseDetail = value ;
}

get reponseSearch (): ReponseVo {
  return this._reponseSearch;
}

set reponseSearch (value: ReponseVo) {
  this._reponseSearch = value ;
}

get reponseShowDetail (): boolean  {
  return this._reponseShowDetail;
}

set reponseShowDetail (value: boolean ) {
  this._reponseShowDetail = value ;
}

  get editableReponses (): Array<ReponseVo> {
   return this._editableReponses;
  }

  set editableReponses (value: Array<ReponseVo>) {
   this._editableReponses = value;
  }

  public findAll(){
  this.http.get<Array<ReponseVo>>('http://localhost:8080/generated/reponse/').subscribe(
    value => {
      if (value != null) {
           this.reponseListe = value;
           this.editableReponses = value;
                                                 
      }
    }
  );
}

  public saveReponse() {
  this.http.post<ReponseVo>('http://localhost:8080/generated/reponse/', this.reponse).subscribe(data=>{
    this.createHide();
     this.reponseListe.push(data);

  });
  }

  public editReponse() {
  this.http.put<ReponseVo>('http://localhost:8080/generated/reponse/', this.reponse).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findReponse ( pojo : ReponseVo ){
  this.http.post<Array<ReponseVo>>('http://localhost:8080/generated/reponse/search/', pojo).subscribe(
    value =>{
       this.reponseListe = value;  
    } );
}

public detailShow ( pojo : ReponseVo ){
    this.reponseDetail = pojo;
    this.reponseShowDetail = true;
 
}



delete(pojo: ReponseVo) {
   this.http.delete<ReponseVo>('http://localhost:8080/generated/reponse/id/'+pojo.id).subscribe(
        value => {
        var index = this.reponseListe.indexOf(pojo);
if (index > -1) {
   this.reponseListe.splice(index, 1);
}
}
        );


}


       public findByreponse(ref: string) {
      this.http.get<ReponseVo>('http://localhost:8080/generated/reponse/reponse/' + ref).subscribe(
        value => {
        if (value != null) { this.reponse = value; }
        }
        );
        }

            public findAllquestions() {
             this.http.get<Array<QuestionVo>>('http://localhost:8080/generated/question/').subscribe(
            value => {
            if (value != null) { this.questions = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _reponseShowDetail : boolean;
              public detailHide (){

       this.reponseShowDetail = false;
       this.reponseDetail = null;
                                  }
 private _reponseShowEdit : boolean;

 private _reponseShowCreate : boolean;

get reponseShowEdit (): boolean  {
  return this._reponseShowEdit;
}

set reponseShowEdit (value: boolean ) {
  this._reponseShowEdit = value ;
}
get reponseShowCreate (): boolean  {
  return this._reponseShowCreate;
}

set reponseShowCreate (value: boolean ) {
  this._reponseShowCreate = value ;
}
             public editShow(pojo : ReponseVo ){

       this.reponseShowEdit = true;
       this.reponse = pojo;
                                  }

              public editHide (){

       this.reponseShowEdit = false;
       this.reponse = new ReponseVo();
                                  }

               public createShow(){

       this.reponseShowCreate = true;
       this.reponse = new ReponseVo();
                                  }

              public createHide (){

       this.reponseShowCreate = false;
       this.reponse = new ReponseVo();
                                  }
}
