import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../../controller/service/Question.service';
import {QuestionVo} from '../../../controller/model/question.model';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {
  constructor(private questionService: QuestionService) { }

   ngOnInit(): void {
    }

   get question(): QuestionVo {
    return this.questionService.question;
  }


   saveQuestion() {
    this.questionService.saveQuestion();
  }


get questionShowCreate (): boolean  {
  return this.questionService.questionShowCreate;
}

set questionShowCreate (value: boolean ) {
  this.questionService.questionShowCreate = value ;
}
public createHide(){
       this.questionService.createHide();
}
}