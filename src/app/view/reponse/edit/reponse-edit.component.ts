import {Component, OnInit} from '@angular/core';
import {ReponseService} from '../../../controller/service/Reponse.service';
import {ReponseVo} from '../../../controller/model/reponse.model';
import {QuestionVo} from '../../../controller/model/Question.model';

@Component({
  selector: 'app-reponse-edit',
  templateUrl: './reponse-edit.component.html',
  styleUrls: ['./reponse-edit.component.css']
})
export class ReponseEditComponent implements OnInit {
  constructor(private reponseService: ReponseService) { }

   ngOnInit(): void {
       this.findAllquestions();
    }

   get reponse(): ReponseVo {
    return this.reponseService.reponse;
  }

   get editableReponses(): Array<ReponseVo> {
    return this.reponseService.editableReponses;
   }

   set editableReponses(value: Array<ReponseVo>) {
    this.reponseService.editableReponses = value;
   }

  get questions(): Array<QuestionVo> {
   return this.reponseService.questions;
  }

   editReponse() {
    this.reponseService.editReponse();
  }
    findAllquestions() {
     this.reponseService.findAllquestions();
    }

     findByreponse(ref: string) {
      this.reponseService.findByreponse(ref);
     }

    editHide() {
      this.reponseService.editHide();
    }
    

}