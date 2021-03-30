import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../../controller/service/Question.service';
import {QuestionVo} from '../../../controller/model/question.model';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  constructor(private questionService: QuestionService) { }

   ngOnInit(): void {
    }

   get question(): QuestionVo {
    return this.questionService.question;
  }

   get editableQuestions(): Array<QuestionVo> {
    return this.questionService.editableQuestions;
   }

   set editableQuestions(value: Array<QuestionVo>) {
    this.questionService.editableQuestions = value;
   }


   editQuestion() {
    this.questionService.editQuestion();
  }

     findByformule(ref: string) {
      this.questionService.findByformule(ref);
     }

    editHide() {
      this.questionService.editHide();
    }
    

}