import { Component, OnInit } from '@angular/core';
import {QuestionVo} from '../../../controller/model/question.model';
import {QuestionService} from '../../../controller/service/Question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})

export class QuestionDetailsComponent implements OnInit {

  constructor(private _questionService : QuestionService) {}


   get questionService (): QuestionService {
    return this._questionService;
  }

  set questionService (value: QuestionService) {
    this._questionService = value ;
  }

  get questionDetail (): QuestionVo {
    return this.questionService.questionDetail;
}

  set questionDetail (value: QuestionVo) {
  this.questionService.questionDetail = value ;
}


get questionShowDetail (): boolean  {
  return this.questionService.questionShowDetail;
}

set questionShowDetail (value: boolean ) {
  this.questionService.questionShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.questionService.detailHide();
}

}