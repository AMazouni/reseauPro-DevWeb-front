import { Component, OnInit } from '@angular/core';
import {OffreTagsVo} from '../../../controller/model/offreTags.model';
import {OffreTagsService} from '../../../controller/service/OffreTags.service';

@Component({
  selector: 'app-offreTags-list',
  templateUrl: './offreTags-list.component.html',
  styleUrls: ['./offreTags-list.component.css']
})
export class OffreTagslistComponent implements OnInit {

  constructor(private _offreTagsService : OffreTagsService) {}


  ngOnInit(): void {
    this.findAll();
  }

  get offreTagsService (): OffreTagsService {
    return this._offreTagsService;
  }

  set offreTagsService (value: OffreTagsService) {
    this._offreTagsService = value ;
  }

  get offreTagsListe (): Array<OffreTagsVo> {
    return this.offreTagsService.offreTagsListe;
  }

  set offreTagsListe (value: Array<OffreTagsVo>) {
    this.offreTagsService.offreTagsListe = value ;
  }

  get offreTagsDetail (): OffreTagsVo {
    return this.offreTagsService.offreTagsDetail;
}

  set offreTagsDetail (value: OffreTagsVo) {
  this.offreTagsService.offreTagsDetail = value ;
}

get offreTagsSearch (): OffreTagsVo {
  return this.offreTagsService.offreTagsSearch;
}

set offreTagsSearch (value: OffreTagsVo) {
  this.offreTagsService.offreTagsSearch = value ;
}


get offreTagsShowDetail (): boolean  {
  return this.offreTagsService.offreTagsShowDetail;
}

set offreTagsShowDetail (value: boolean ) {
  this.offreTagsService.offreTagsShowDetail = value ;
}

get offreTagsShowCreate (): boolean  {
  return this.offreTagsService.offreTagsShowCreate;
}

set offreTagsShowCreate (value: boolean ) {
  this.offreTagsService.offreTagsShowCreate = value ;
}
get offreTagsShowEdit (): boolean  {
  return this.offreTagsService.offreTagsShowEdit;
}

set offreTagsShowEdit (value: boolean ) {
  this.offreTagsService.offreTagsShowEdit = value ;
}

  editShow( pojo : OffreTagsVo ) {
  this.offreTagsService.editShow(pojo);

}
  createShow()  {
  this.offreTagsService.createShow();

}

   delete( pojo : OffreTagsVo ) {
    this.offreTagsService.delete(pojo);
  }


 detailShow( pojo : OffreTagsVo ) {
  this.offreTagsService.detailShow( pojo);

}

 findOffreTags(pojo : OffreTagsVo ) {
  this.offreTagsService.findOffreTags( pojo);

}
 findAll() {
  this.offreTagsService.findAll();
}


}
