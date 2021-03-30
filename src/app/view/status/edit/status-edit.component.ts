import {Component, OnInit} from '@angular/core';
import {StatusService} from '../../../controller/service/Status.service';
import {StatusVo} from '../../../controller/model/status.model';

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {
  constructor(private statusService: StatusService) { }

   ngOnInit(): void {
    }

   get status(): StatusVo {
    return this.statusService.status;
  }

   get editableStatuss(): Array<StatusVo> {
    return this.statusService.editableStatuss;
   }

   set editableStatuss(value: Array<StatusVo>) {
    this.statusService.editableStatuss = value;
   }


   editStatus() {
    this.statusService.editStatus();
  }

     findBycode(ref: string) {
      this.statusService.findBycode(ref);
     }

    editHide() {
      this.statusService.editHide();
    }
    

}