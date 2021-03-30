import { Component, OnInit } from '@angular/core';
import {PublicationVo} from '../../../controller/model/publication.model';
import {PublicationService} from '../../../controller/service/Publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})

export class PublicationDetailsComponent implements OnInit {

  constructor(private _publicationService : PublicationService) {}


   get publicationService (): PublicationService {
    return this._publicationService;
  }

  set publicationService (value: PublicationService) {
    this._publicationService = value ;
  }

  get publicationDetail (): PublicationVo {
    return this.publicationService.publicationDetail;
}

  set publicationDetail (value: PublicationVo) {
  this.publicationService.publicationDetail = value ;
}


get publicationShowDetail (): boolean  {
  return this.publicationService.publicationShowDetail;
}

set publicationShowDetail (value: boolean ) {
  this.publicationService.publicationShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.publicationService.detailHide();
}

}