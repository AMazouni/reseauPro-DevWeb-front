import {Component, OnInit} from '@angular/core';
import {OffreTagsService} from '../../../controller/service/OffreTags.service';
import {OffreTagsVo} from '../../../controller/model/offreTags.model';

@Component({
  selector: 'app-offreTags-edit',
  templateUrl: './offreTags-edit.component.html',
  styleUrls: ['./offreTags-edit.component.css']
})
export class OffreTagsEditComponent implements OnInit {
  constructor(private offreTagsService: OffreTagsService) { }

   ngOnInit(): void {
    }

   get offreTags(): OffreTagsVo {
    return this.offreTagsService.offreTags;
  }

   get editableOffreTagss(): Array<OffreTagsVo> {
    return this.offreTagsService.editableOffreTagss;
   }

   set editableOffreTagss(value: Array<OffreTagsVo>) {
    this.offreTagsService.editableOffreTagss = value;
   }


   editOffreTags() {
    this.offreTagsService.editOffreTags();
  }

     findByref(ref: string) {
      this.offreTagsService.findByref(ref);
     }

    editHide() {
      this.offreTagsService.editHide();
    }
    

}