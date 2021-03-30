import { Component, OnInit } from '@angular/core';
import {ReponseVo} from '../../../controller/model/reponse.model';
import {ReponseService} from '../../../controller/service/Reponse.service';
import {QuestionVo} from '../../../controller/model/Question.model';

@Component({
  selector: 'app-reponse-list',
  templateUrl: './reponse-list.component.html',
  styleUrls: ['./reponse-list.component.css']
})
export class ReponselistComponent implements OnInit {

  constructor(private _reponseService : ReponseService) {}

  get questions(): Array<QuestionVo> {
   return this.reponseService.questions;
  }

  ngOnInit(): void {
    this.findAll();
      this.findAllquestions();
  }

  get reponseService (): ReponseService {
    return this._reponseService;
  }

  set reponseService (value: ReponseService) {
    this._reponseService = value ;
  }

  get reponseListe (): Array<ReponseVo> {
    return this.reponseService.reponseListe;
  }

  set reponseListe (value: Array<ReponseVo>) {
    this.reponseService.reponseListe = value ;
  }

  get reponseDetail (): ReponseVo {
    return this.reponseService.reponseDetail;
}

  set reponseDetail (value: ReponseVo) {
  this.reponseService.reponseDetail = value ;
}

get reponseSearch (): ReponseVo {
  return this.reponseService.reponseSearch;
}

set reponseSearch (value: ReponseVo) {
  this.reponseService.reponseSearch = value ;
}


get reponseShowDetail (): boolean  {
  return this.reponseService.reponseShowDetail;
}

set reponseShowDetail (value: boolean ) {
  this.reponseService.reponseShowDetail = value ;
}

get reponseShowCreate (): boolean  {
  return this.reponseService.reponseShowCreate;
}

set reponseShowCreate (value: boolean ) {
  this.reponseService.reponseShowCreate = value ;
}
get reponseShowEdit (): boolean  {
  return this.reponseService.reponseShowEdit;
}

set reponseShowEdit (value: boolean ) {
  this.reponseService.reponseShowEdit = value ;
}

  editShow( pojo : ReponseVo ) {
  this.reponseService.editShow(pojo);

}
  createShow()  {
  this.reponseService.createShow();

}

   delete( pojo : ReponseVo ) {
    this.reponseService.delete(pojo);
  }


 detailShow( pojo : ReponseVo ) {
  this.reponseService.detailShow( pojo);

}

 findReponse(pojo : ReponseVo ) {
  this.reponseService.findReponse( pojo);

}
 findAll() {
  this.reponseService.findAll();
}

   findAllquestions() {
     this.reponseService.findAllquestions();
   }

}
