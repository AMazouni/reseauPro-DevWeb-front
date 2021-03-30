import { Component, OnInit } from '@angular/core';
import {OffreTagsVo} from '../../../controller/model/offreTags.model';
import {OffreTagsService} from '../../../controller/service/OffreTags.service';

@Component({
  selector: 'app-offreTags-details',
  templateUrl: './offreTags-details.component.html',
  styleUrls: ['./offreTags-details.component.css']
})

export class OffreTagsDetailsComponent implements OnInit {

  constructor(private _offreTagsService : OffreTagsService) {}


   get offreTagsService (): OffreTagsService {
    return this._offreTagsService;
  }

  set offreTagsService (value: OffreTagsService) {
    this._offreTagsService = value ;
  }

  get offreTagsDetail (): OffreTagsVo {
    return this.offreTagsService.offreTagsDetail;
}

  set offreTagsDetail (value: OffreTagsVo) {
  this.offreTagsService.offreTagsDetail = value ;
}


get offreTagsShowDetail (): boolean  {
  return this.offreTagsService.offreTagsShowDetail;
}

set offreTagsShowDetail (value: boolean ) {
  this.offreTagsService.offreTagsShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.offreTagsService.detailHide();
}

}