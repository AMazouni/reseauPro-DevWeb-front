import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuestionVo} from '../model/Question.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  private _questionDetail : QuestionVo =  new QuestionVo() ;
  private _questionListe  : Array<QuestionVo> = new Array<QuestionVo>();
  
  private _questionSearch : QuestionVo = new QuestionVo();
  private _question: QuestionVo =  new QuestionVo();
  private _searchedQuestions: Array<QuestionVo> = new Array<QuestionVo>();
  private _editableQuestions: Array<QuestionVo> = new Array<QuestionVo>();

  get question(): QuestionVo {
    if (this._question == null) {
      this._question = new QuestionVo();
    }
    return this._question;
  }

  set question(value: QuestionVo) {
    this._question = value;
  }

  get questionListe (): Array<QuestionVo> {
  return this._questionListe;
}

set questionListe (value: Array<QuestionVo>) {
  this._questionListe = value ;
}

get questionDetail (): QuestionVo {
  return this._questionDetail;
}

set questionDetail (value: QuestionVo) {
  this._questionDetail = value ;
}

get questionSearch (): QuestionVo {
  return this._questionSearch;
}

set questionSearch (value: QuestionVo) {
  this._questionSearch = value ;
}

get questionShowDetail (): boolean  {
  return this._questionShowDetail;
}

set questionShowDetail (value: boolean ) {
  this._questionShowDetail = value ;
}

  get editableQuestions (): Array<QuestionVo> {
   return this._editableQuestions;
  }

  set editableQuestions (value: Array<QuestionVo>) {
   this._editableQuestions = value;
  }

  public findAll(){
  this.http.get<Array<QuestionVo>>('http://localhost:8080/uca/reseaupro/question/').subscribe(
    value => {
      if (value != null) {
           this.questionListe = value;
           this.editableQuestions = value;
                                                 
      }
    }
  );
}

  public saveQuestion() {
  this.http.post<QuestionVo>('http://localhost:8080/uca/reseaupro/question/', this.question).subscribe(data=>{
    this.createHide();
     this.questionListe.push(data);

  });
  }

  public editQuestion() {
  this.http.put<QuestionVo>('http://localhost:8080/uca/reseaupro/question/', this.question).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findQuestion ( pojo : QuestionVo ){
  this.http.post<Array<QuestionVo>>('http://localhost:8080/uca/reseaupro/question/search/', pojo).subscribe(
    value =>{
       this.questionListe = value;  
    } );
}

public detailShow ( pojo : QuestionVo ){
    this.questionDetail = pojo;
    this.questionShowDetail = true;
 
}



delete(pojo: QuestionVo) {
   this.http.delete<QuestionVo>('http://localhost:8080/uca/reseaupro/question/id/'+pojo.id).subscribe(
        value => {
        var index = this.questionListe.indexOf(pojo);
if (index > -1) {
   this.questionListe.splice(index, 1);
}
}
        );


}


       public findByformule(ref: string) {
      this.http.get<QuestionVo>('http://localhost:8080/uca/reseaupro/question/formule/' + ref).subscribe(
        value => {
        if (value != null) { this.question = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _questionShowDetail : boolean;
              public detailHide (){

       this.questionShowDetail = false;
       this.questionDetail = null;
                                  }
 private _questionShowEdit : boolean;

 private _questionShowCreate : boolean;

get questionShowEdit (): boolean  {
  return this._questionShowEdit;
}

set questionShowEdit (value: boolean ) {
  this._questionShowEdit = value ;
}
get questionShowCreate (): boolean  {
  return this._questionShowCreate;
}

set questionShowCreate (value: boolean ) {
  this._questionShowCreate = value ;
}
             public editShow(pojo : QuestionVo ){

       this.questionShowEdit = true;
       this.question = pojo;
                                  }

              public editHide (){

       this.questionShowEdit = false;
       this.question = new QuestionVo();
                                  }

               public createShow(){

       this.questionShowCreate = true;
       this.question = new QuestionVo();
                                  }

              public createHide (){

       this.questionShowCreate = false;
       this.question = new QuestionVo();
                                  }
}
