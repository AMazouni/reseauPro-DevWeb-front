import { Component, OnInit } from '@angular/core';
import {CandidatureVo} from '../../../controller/model/candidature.model';
import {CandidatureService} from '../../../controller/service/Candidature.service';

@Component({
  selector: 'app-candidature-details',
  templateUrl: './candidature-details.component.html',
  styleUrls: ['./candidature-details.component.css']
})

export class CandidatureDetailsComponent implements OnInit {

  constructor(private _candidatureService : CandidatureService) {}


   get candidatureService (): CandidatureService {
    return this._candidatureService;
  }

  set candidatureService (value: CandidatureService) {
    this._candidatureService = value ;
  }

  get candidatureDetail (): CandidatureVo {
    return this.candidatureService.candidatureDetail;
}

  set candidatureDetail (value: CandidatureVo) {
  this.candidatureService.candidatureDetail = value ;
}


get candidatureShowDetail (): boolean  {
  return this.candidatureService.candidatureShowDetail;
}

set candidatureShowDetail (value: boolean ) {
  this.candidatureService.candidatureShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.candidatureService.detailHide();
}

}