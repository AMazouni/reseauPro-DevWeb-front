import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OffreTagsVo} from '../model/OffreTags.model';
@Injectable({
  providedIn: 'root'
})
export class OffreTagsService {

  constructor(private http: HttpClient) { }
  private _offreTagsDetail : OffreTagsVo =  new OffreTagsVo() ;
  private _offreTagsListe  : Array<OffreTagsVo> = new Array<OffreTagsVo>();
  
  private _offreTagsSearch : OffreTagsVo = new OffreTagsVo();
  private _offreTags: OffreTagsVo =  new OffreTagsVo();
  private _searchedOffreTagss: Array<OffreTagsVo> = new Array<OffreTagsVo>();
  private _editableOffreTagss: Array<OffreTagsVo> = new Array<OffreTagsVo>();

  get offreTags(): OffreTagsVo {
    if (this._offreTags == null) {
      this._offreTags = new OffreTagsVo();
    }
    return this._offreTags;
  }

  set offreTags(value: OffreTagsVo) {
    this._offreTags = value;
  }

  get offreTagsListe (): Array<OffreTagsVo> {
  return this._offreTagsListe;
}

set offreTagsListe (value: Array<OffreTagsVo>) {
  this._offreTagsListe = value ;
}

get offreTagsDetail (): OffreTagsVo {
  return this._offreTagsDetail;
}

set offreTagsDetail (value: OffreTagsVo) {
  this._offreTagsDetail = value ;
}

get offreTagsSearch (): OffreTagsVo {
  return this._offreTagsSearch;
}

set offreTagsSearch (value: OffreTagsVo) {
  this._offreTagsSearch = value ;
}

get offreTagsShowDetail (): boolean  {
  return this._offreTagsShowDetail;
}

set offreTagsShowDetail (value: boolean ) {
  this._offreTagsShowDetail = value ;
}

  get editableOffreTagss (): Array<OffreTagsVo> {
   return this._editableOffreTagss;
  }

  set editableOffreTagss (value: Array<OffreTagsVo>) {
   this._editableOffreTagss = value;
  }

  public findAll(){
  this.http.get<Array<OffreTagsVo>>('http://localhost:8080/generated/offreTags/').subscribe(
    value => {
      if (value != null) {
           this.offreTagsListe = value;
           this.editableOffreTagss = value;
                                                 
      }
    }
  );
}

  public saveOffreTags() {
  this.http.post<OffreTagsVo>('http://localhost:8080/generated/offreTags/', this.offreTags).subscribe(data=>{
    this.createHide();
     this.offreTagsListe.push(data);

  });
  }

  public editOffreTags() {
  this.http.put<OffreTagsVo>('http://localhost:8080/generated/offreTags/', this.offreTags).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findOffreTags ( pojo : OffreTagsVo ){
  this.http.post<Array<OffreTagsVo>>('http://localhost:8080/generated/offreTags/search/', pojo).subscribe(
    value =>{
       this.offreTagsListe = value;  
    } );
}

public detailShow ( pojo : OffreTagsVo ){
    this.offreTagsDetail = pojo;
    this.offreTagsShowDetail = true;
 
}



delete(pojo: OffreTagsVo) {
   this.http.delete<OffreTagsVo>('http://localhost:8080/generated/offreTags/id/'+pojo.id).subscribe(
        value => {
        var index = this.offreTagsListe.indexOf(pojo);
if (index > -1) {
   this.offreTagsListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<OffreTagsVo>('http://localhost:8080/generated/offreTags/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.offreTags = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _offreTagsShowDetail : boolean;
              public detailHide (){

       this.offreTagsShowDetail = false;
       this.offreTagsDetail = null;
                                  }
 private _offreTagsShowEdit : boolean;

 private _offreTagsShowCreate : boolean;

get offreTagsShowEdit (): boolean  {
  return this._offreTagsShowEdit;
}

set offreTagsShowEdit (value: boolean ) {
  this._offreTagsShowEdit = value ;
}
get offreTagsShowCreate (): boolean  {
  return this._offreTagsShowCreate;
}

set offreTagsShowCreate (value: boolean ) {
  this._offreTagsShowCreate = value ;
}
             public editShow(pojo : OffreTagsVo ){

       this.offreTagsShowEdit = true;
       this.offreTags = pojo;
                                  }

              public editHide (){

       this.offreTagsShowEdit = false;
       this.offreTags = new OffreTagsVo();
                                  }

               public createShow(){

       this.offreTagsShowCreate = true;
       this.offreTags = new OffreTagsVo();
                                  }

              public createHide (){

       this.offreTagsShowCreate = false;
       this.offreTags = new OffreTagsVo();
                                  }
}
