import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminInfoVo} from '../model/AdminInfo.model';
import {UtilisateurVo} from '../model/Utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

  constructor(private http: HttpClient) { }
  private _adminInfoDetail : AdminInfoVo =  new AdminInfoVo() ;
  private _adminInfoListe  : Array<AdminInfoVo> = new Array<AdminInfoVo>();
  
  private _adminInfoSearch : AdminInfoVo = new AdminInfoVo();
  private _adminInfo: AdminInfoVo =  new AdminInfoVo();
  private _searchedAdminInfos: Array<AdminInfoVo> = new Array<AdminInfoVo>();
  private _editableAdminInfos: Array<AdminInfoVo> = new Array<AdminInfoVo>();

  get adminInfo(): AdminInfoVo {
    if (this._adminInfo == null) {
      this._adminInfo = new AdminInfoVo();
    }
    return this._adminInfo;
  }

  set adminInfo(value: AdminInfoVo) {
    this._adminInfo = value;
  }

  get adminInfoListe (): Array<AdminInfoVo> {
  return this._adminInfoListe;
}

set adminInfoListe (value: Array<AdminInfoVo>) {
  this._adminInfoListe = value ;
}

get adminInfoDetail (): AdminInfoVo {
  return this._adminInfoDetail;
}

set adminInfoDetail (value: AdminInfoVo) {
  this._adminInfoDetail = value ;
}

get adminInfoSearch (): AdminInfoVo {
  return this._adminInfoSearch;
}

set adminInfoSearch (value: AdminInfoVo) {
  this._adminInfoSearch = value ;
}

get adminInfoShowDetail (): boolean  {
  return this._adminInfoShowDetail;
}

set adminInfoShowDetail (value: boolean ) {
  this._adminInfoShowDetail = value ;
}

  get editableAdminInfos (): Array<AdminInfoVo> {
   return this._editableAdminInfos;
  }

  set editableAdminInfos (value: Array<AdminInfoVo>) {
   this._editableAdminInfos = value;
  }

  public findAll(){
  this.http.get<Array<AdminInfoVo>>('http://localhost:8080/generated/adminInfo/').subscribe(
    value => {
      if (value != null) {
           this.adminInfoListe = value;
           this.editableAdminInfos = value;
                                                 
      }
    }
  );
}

  public saveAdminInfo() {
  this.http.post<AdminInfoVo>('http://localhost:8080/generated/adminInfo/', this.adminInfo).subscribe(data=>{
    this.createHide();
     this.adminInfoListe.push(data);

  });
  }

  public editAdminInfo() {
  this.http.put<AdminInfoVo>('http://localhost:8080/generated/adminInfo/', this.adminInfo).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findAdminInfo ( pojo : AdminInfoVo ){
  this.http.post<Array<AdminInfoVo>>('http://localhost:8080/generated/adminInfo/search/', pojo).subscribe(
    value =>{
       this.adminInfoListe = value;  
    } );
}

public detailShow ( pojo : AdminInfoVo ){
    this.adminInfoDetail = pojo;
    this.adminInfoShowDetail = true;
 
}



delete(pojo: AdminInfoVo) {
   this.http.delete<AdminInfoVo>('http://localhost:8080/generated/adminInfo/id/'+pojo.id).subscribe(
        value => {
        var index = this.adminInfoListe.indexOf(pojo);
if (index > -1) {
   this.adminInfoListe.splice(index, 1);
}
}
        );


}


       public findBynom(ref: string) {
      this.http.get<AdminInfoVo>('http://localhost:8080/generated/adminInfo/nom/' + ref).subscribe(
        value => {
        if (value != null) { this.adminInfo = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _adminInfoShowDetail : boolean;
              public detailHide (){

       this.adminInfoShowDetail = false;
       this.adminInfoDetail = null;
                                  }
 private _adminInfoShowEdit : boolean;

 private _adminInfoShowCreate : boolean;

get adminInfoShowEdit (): boolean  {
  return this._adminInfoShowEdit;
}

set adminInfoShowEdit (value: boolean ) {
  this._adminInfoShowEdit = value ;
}
get adminInfoShowCreate (): boolean  {
  return this._adminInfoShowCreate;
}

set adminInfoShowCreate (value: boolean ) {
  this._adminInfoShowCreate = value ;
}
             public editShow(pojo : AdminInfoVo ){

       this.adminInfoShowEdit = true;
       this.adminInfo = pojo;
                                  }

              public editHide (){

       this.adminInfoShowEdit = false;
       this.adminInfo = new AdminInfoVo();
                                  }

               public createShow(){

       this.adminInfoShowCreate = true;
       this.adminInfo = new AdminInfoVo();
                                  }

              public createHide (){

       this.adminInfoShowCreate = false;
       this.adminInfo = new AdminInfoVo();
                                  }
}
