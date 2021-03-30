import {Component, OnInit} from '@angular/core';
import {StatusService} from '../../../controller/service/Status.service';
import {StatusVo} from '../../../controller/model/status.model';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {
  constructor(private statusService: StatusService) { }

   ngOnInit(): void {
    }

   get status(): StatusVo {
    return this.statusService.status;
  }


   saveStatus() {
    this.statusService.saveStatus();
  }


get statusShowCreate (): boolean  {
  return this.statusService.statusShowCreate;
}

set statusShowCreate (value: boolean ) {
  this.statusService.statusShowCreate = value ;
}
public createHide(){
       this.statusService.createHide();
}
}