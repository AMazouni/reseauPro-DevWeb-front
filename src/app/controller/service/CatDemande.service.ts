import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatDemandeVo} from '../model/CatDemande.model';
@Injectable({
  providedIn: 'root'
})
export class CatDemandeService {

  constructor(private http: HttpClient) { }
  private _catDemandeDetail : CatDemandeVo =  new CatDemandeVo() ;
  private _catDemandeListe  : Array<CatDemandeVo> = new Array<CatDemandeVo>();
  
  private _catDemandeSearch : CatDemandeVo = new CatDemandeVo();
  private _catDemande: CatDemandeVo =  new CatDemandeVo();
  private _searchedCatDemandes: Array<CatDemandeVo> = new Array<CatDemandeVo>();
  private _editableCatDemandes: Array<CatDemandeVo> = new Array<CatDemandeVo>();

  get catDemande(): CatDemandeVo {
    if (this._catDemande == null) {
      this._catDemande = new CatDemandeVo();
    }
    return this._catDemande;
  }

  set catDemande(value: CatDemandeVo) {
    this._catDemande = value;
  }

  get catDemandeListe (): Array<CatDemandeVo> {
  return this._catDemandeListe;
}

set catDemandeListe (value: Array<CatDemandeVo>) {
  this._catDemandeListe = value ;
}

get catDemandeDetail (): CatDemandeVo {
  return this._catDemandeDetail;
}

set catDemandeDetail (value: CatDemandeVo) {
  this._catDemandeDetail = value ;
}

get catDemandeSearch (): CatDemandeVo {
  return this._catDemandeSearch;
}

set catDemandeSearch (value: CatDemandeVo) {
  this._catDemandeSearch = value ;
}

get catDemandeShowDetail (): boolean  {
  return this._catDemandeShowDetail;
}

set catDemandeShowDetail (value: boolean ) {
  this._catDemandeShowDetail = value ;
}

  get editableCatDemandes (): Array<CatDemandeVo> {
   return this._editableCatDemandes;
  }

  set editableCatDemandes (value: Array<CatDemandeVo>) {
   this._editableCatDemandes = value;
  }

  public findAll(){
  this.http.get<Array<CatDemandeVo>>('http://localhost:8080/generated/catDemande/').subscribe(
    value => {
      if (value != null) {
           this.catDemandeListe = value;
           this.editableCatDemandes = value;
                                                 
      }
    }
  );
}

  public saveCatDemande() {
  this.http.post<CatDemandeVo>('http://localhost:8080/generated/catDemande/', this.catDemande).subscribe(data=>{
    this.createHide();
     this.catDemandeListe.push(data);

  });
  }

  public editCatDemande() {
  this.http.put<CatDemandeVo>('http://localhost:8080/generated/catDemande/', this.catDemande).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findCatDemande ( pojo : CatDemandeVo ){
  this.http.post<Array<CatDemandeVo>>('http://localhost:8080/generated/catDemande/search/', pojo).subscribe(
    value =>{
       this.catDemandeListe = value;  
    } );
}

public detailShow ( pojo : CatDemandeVo ){
    this.catDemandeDetail = pojo;
    this.catDemandeShowDetail = true;
 
}



delete(pojo: CatDemandeVo) {
   this.http.delete<CatDemandeVo>('http://localhost:8080/generated/catDemande/id/'+pojo.id).subscribe(
        value => {
        var index = this.catDemandeListe.indexOf(pojo);
if (index > -1) {
   this.catDemandeListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<CatDemandeVo>('http://localhost:8080/generated/catDemande/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.catDemande = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _catDemandeShowDetail : boolean;
              public detailHide (){

       this.catDemandeShowDetail = false;
       this.catDemandeDetail = null;
                                  }
 private _catDemandeShowEdit : boolean;

 private _catDemandeShowCreate : boolean;

get catDemandeShowEdit (): boolean  {
  return this._catDemandeShowEdit;
}

set catDemandeShowEdit (value: boolean ) {
  this._catDemandeShowEdit = value ;
}
get catDemandeShowCreate (): boolean  {
  return this._catDemandeShowCreate;
}

set catDemandeShowCreate (value: boolean ) {
  this._catDemandeShowCreate = value ;
}
             public editShow(pojo : CatDemandeVo ){

       this.catDemandeShowEdit = true;
       this.catDemande = pojo;
                                  }

              public editHide (){

       this.catDemandeShowEdit = false;
       this.catDemande = new CatDemandeVo();
                                  }

               public createShow(){

       this.catDemandeShowCreate = true;
       this.catDemande = new CatDemandeVo();
                                  }

              public createHide (){

       this.catDemandeShowCreate = false;
       this.catDemande = new CatDemandeVo();
                                  }
}
