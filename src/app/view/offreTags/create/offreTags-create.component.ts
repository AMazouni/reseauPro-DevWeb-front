import {Component, OnInit} from '@angular/core';
import {OffreTagsService} from '../../../controller/service/OffreTags.service';
import {OffreTagsVo} from '../../../controller/model/offreTags.model';

@Component({
  selector: 'app-offreTags-create',
  templateUrl: './offreTags-create.component.html',
  styleUrls: ['./offreTags-create.component.css']
})
export class OffreTagsCreateComponent implements OnInit {
  constructor(private offreTagsService: OffreTagsService) { }

   ngOnInit(): void {
    }

   get offreTags(): OffreTagsVo {
    return this.offreTagsService.offreTags;
  }


   saveOffreTags() {
    this.offreTagsService.saveOffreTags();
  }


get offreTagsShowCreate (): boolean  {
  return this.offreTagsService.offreTagsShowCreate;
}

set offreTagsShowCreate (value: boolean ) {
  this.offreTagsService.offreTagsShowCreate = value ;
}
public createHide(){
       this.offreTagsService.createHide();
}
}