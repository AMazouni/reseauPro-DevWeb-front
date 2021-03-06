import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StatusVo} from '../model/Status.model';
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }
  private _statusDetail : StatusVo =  new StatusVo() ;
  private _statusListe  : Array<StatusVo> = new Array<StatusVo>();
  
  private _statusSearch : StatusVo = new StatusVo();
  private _status: StatusVo =  new StatusVo();
  private _searchedStatuss: Array<StatusVo> = new Array<StatusVo>();
  private _editableStatuss: Array<StatusVo> = new Array<StatusVo>();

  get status(): StatusVo {
    if (this._status == null) {
      this._status = new StatusVo();
    }
    return this._status;
  }

  set status(value: StatusVo) {
    this._status = value;
  }

  get statusListe (): Array<StatusVo> {
  return this._statusListe;
}

set statusListe (value: Array<StatusVo>) {
  this._statusListe = value ;
}

get statusDetail (): StatusVo {
  return this._statusDetail;
}

set statusDetail (value: StatusVo) {
  this._statusDetail = value ;
}

get statusSearch (): StatusVo {
  return this._statusSearch;
}

set statusSearch (value: StatusVo) {
  this._statusSearch = value ;
}

get statusShowDetail (): boolean  {
  return this._statusShowDetail;
}

set statusShowDetail (value: boolean ) {
  this._statusShowDetail = value ;
}

  get editableStatuss (): Array<StatusVo> {
   return this._editableStatuss;
  }

  set editableStatuss (value: Array<StatusVo>) {
   this._editableStatuss = value;
  }

  public findAll(){
  this.http.get<Array<StatusVo>>('http://localhost:8080/uca/reseaupro/status/').subscribe(
    value => {
      if (value != null) {
           this.statusListe = value;
           this.editableStatuss = value;
                                                 
      }
    }
  );
}

  public saveStatus() {
  this.http.post<StatusVo>('http://localhost:8080/uca/reseaupro/status/', this.status).subscribe(data=>{
    this.createHide();
     this.statusListe.push(data);

  });
  }

  public editStatus() {
  this.http.put<StatusVo>('http://localhost:8080/uca/reseaupro/status/', this.status).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findStatus ( pojo : StatusVo ){
  this.http.post<Array<StatusVo>>('http://localhost:8080/uca/reseaupro/status/search/', pojo).subscribe(
    value =>{
       this.statusListe = value;  
    } );
}

public detailShow ( pojo : StatusVo ){
    this.statusDetail = pojo;
    this.statusShowDetail = true;
 
}



delete(pojo: StatusVo) {
   this.http.delete<StatusVo>('http://localhost:8080/uca/reseaupro/status/id/'+pojo.id).subscribe(
        value => {
        var index = this.statusListe.indexOf(pojo);
if (index > -1) {
   this.statusListe.splice(index, 1);
}
}
        );


}


       public findBycode(ref: string) {
      this.http.get<StatusVo>('http://localhost:8080/uca/reseaupro/status/code/' + ref).subscribe(
        value => {
        if (value != null) { this.status = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _statusShowDetail : boolean;
              public detailHide (){

       this.statusShowDetail = false;
       this.statusDetail = null;
                                  }
 private _statusShowEdit : boolean;

 private _statusShowCreate : boolean;

get statusShowEdit (): boolean  {
  return this._statusShowEdit;
}

set statusShowEdit (value: boolean ) {
  this._statusShowEdit = value ;
}
get statusShowCreate (): boolean  {
  return this._statusShowCreate;
}

set statusShowCreate (value: boolean ) {
  this._statusShowCreate = value ;
}
             public editShow(pojo : StatusVo ){

       this.statusShowEdit = true;
       this.status = pojo;
                                  }

              public editHide (){

       this.statusShowEdit = false;
       this.status = new StatusVo();
                                  }

               public createShow(){

       this.statusShowCreate = true;
       this.status = new StatusVo();
                                  }

              public createHide (){

       this.statusShowCreate = false;
       this.status = new StatusVo();
                                  }
}
