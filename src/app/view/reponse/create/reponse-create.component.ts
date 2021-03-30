import {Component, OnInit} from '@angular/core';
import {ReponseService} from '../../../controller/service/Reponse.service';
import {ReponseVo} from '../../../controller/model/reponse.model';
import {QuestionVo} from '../../../controller/model/Question.model';

@Component({
  selector: 'app-reponse-create',
  templateUrl: './reponse-create.component.html',
  styleUrls: ['./reponse-create.component.css']
})
export class ReponseCreateComponent implements OnInit {
  constructor(private reponseService: ReponseService) { }

   ngOnInit(): void {
      this.findAllquestions();
    }

   get reponse(): ReponseVo {
    return this.reponseService.reponse;
  }

  get questions(): Array<QuestionVo> {
   return this.reponseService.questions;
  }

   saveReponse() {
    this.reponseService.saveReponse();
  }

   findAllquestions() {
     this.reponseService.findAllquestions();
   }

get reponseShowCreate (): boolean  {
  return this.reponseService.reponseShowCreate;
}

set reponseShowCreate (value: boolean ) {
  this.reponseService.reponseShowCreate = value ;
}
public createHide(){
       this.reponseService.createHide();
}
}