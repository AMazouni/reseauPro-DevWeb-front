import { Component, OnInit } from '@angular/core';
import {QuestionVo} from '../../../controller/model/question.model';
import {QuestionService} from '../../../controller/service/Question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionlistComponent implements OnInit {

  constructor(private _questionService : QuestionService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get questionService (): QuestionService {
    return this._questionService;
  }

  set questionService (value: QuestionService) {
    this._questionService = value ;
  }

  get questionListe (): Array<QuestionVo> {
    return this.questionService.questionListe;
  }

  set questionListe (value: Array<QuestionVo>) {
    this.questionService.questionListe = value ;
  }

  get questionDetail (): QuestionVo {
    return this.questionService.questionDetail;
}

  set questionDetail (value: QuestionVo) {
  this.questionService.questionDetail = value ;
}

get questionSearch (): QuestionVo {
  return this.questionService.questionSearch;
}

set questionSearch (value: QuestionVo) {
  this.questionService.questionSearch = value ;
}


get questionShowDetail (): boolean  {
  return this.questionService.questionShowDetail;
}

set questionShowDetail (value: boolean ) {
  this.questionService.questionShowDetail = value ;
}

get questionShowCreate (): boolean  {
  return this.questionService.questionShowCreate;
}

set questionShowCreate (value: boolean ) {
  this.questionService.questionShowCreate = value ;
}
get questionShowEdit (): boolean  {
  return this.questionService.questionShowEdit;
}

set questionShowEdit (value: boolean ) {
  this.questionService.questionShowEdit = value ;
}

  editShow( pojo : QuestionVo ) {
  this.questionService.editShow(pojo);

}
  createShow()  {
  this.questionService.createShow();

}

   delete( pojo : QuestionVo ) {
    this.questionService.delete(pojo);
  }


 detailShow( pojo : QuestionVo ) {
  this.questionService.detailShow( pojo);

}

 findQuestion(pojo : QuestionVo ) {
  this.questionService.findQuestion( pojo);

}
 findAll() {
  this.questionService.findAll();
}


}
