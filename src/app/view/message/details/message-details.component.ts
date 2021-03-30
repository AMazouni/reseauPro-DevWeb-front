import { Component, OnInit } from '@angular/core';
import {MessageVo} from '../../../controller/model/message.model';
import {MessageService} from '../../../controller/service/Message.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})

export class MessageDetailsComponent implements OnInit {

  constructor(private _messageService : MessageService) {}


   get messageService (): MessageService {
    return this._messageService;
  }

  set messageService (value: MessageService) {
    this._messageService = value ;
  }

  get messageDetail (): MessageVo {
    return this.messageService.messageDetail;
}

  set messageDetail (value: MessageVo) {
  this.messageService.messageDetail = value ;
}


get messageShowDetail (): boolean  {
  return this.messageService.messageShowDetail;
}

set messageShowDetail (value: boolean ) {
  this.messageService.messageShowDetail = value ;
}

  ngOnInit(): void {

  }

public detailHide(){
       this.messageService.detailHide();
}

}