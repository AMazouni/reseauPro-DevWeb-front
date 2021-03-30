import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FonctionVo} from '../model/Fonction.model';
import {EntrepriseVo} from '../model/Entreprise.model';
import {EtudiantInfoVo} from '../model/EtudiantInfo.model';
@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  constructor(private http: HttpClient) { }
  private _fonctionDetail : FonctionVo =  new FonctionVo() ;
  private _fonctionListe  : Array<FonctionVo> = new Array<FonctionVo>();
  
  private _fonctionSearch : FonctionVo = new FonctionVo();
  private _fonction: FonctionVo =  new FonctionVo();
  private _searchedFonctions: Array<FonctionVo> = new Array<FonctionVo>();
  private _editableFonctions: Array<FonctionVo> = new Array<FonctionVo>();
  private _entreprises: Array<EntrepriseVo> = new Array<EntrepriseVo>();
  private _occupePars: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
   get entreprises(): Array<EntrepriseVo> {
    return this._entreprises;
   }

   set entreprises(value: Array<EntrepriseVo>) {
    this._entreprises = value;
   }
   get occupePars(): Array<EtudiantInfoVo> {
    return this._occupePars;
   }

   set occupePars(value: Array<EtudiantInfoVo>) {
    this._occupePars = value;
   }

  get fonction(): FonctionVo {
    if (this._fonction == null) {
      this._fonction = new FonctionVo();
    }
    return this._fonction;
  }

  set fonction(value: FonctionVo) {
    this._fonction = value;
  }

  get fonctionListe (): Array<FonctionVo> {
  return this._fonctionListe;
}

set fonctionListe (value: Array<FonctionVo>) {
  this._fonctionListe = value ;
}

get fonctionDetail (): FonctionVo {
  return this._fonctionDetail;
}

set fonctionDetail (value: FonctionVo) {
  this._fonctionDetail = value ;
}

get fonctionSearch (): FonctionVo {
  return this._fonctionSearch;
}

set fonctionSearch (value: FonctionVo) {
  this._fonctionSearch = value ;
}

get fonctionShowDetail (): boolean  {
  return this._fonctionShowDetail;
}

set fonctionShowDetail (value: boolean ) {
  this._fonctionShowDetail = value ;
}

  get editableFonctions (): Array<FonctionVo> {
   return this._editableFonctions;
  }

  set editableFonctions (value: Array<FonctionVo>) {
   this._editableFonctions = value;
  }

  public findAll(){
  this.http.get<Array<FonctionVo>>('http://localhost:8080/generated/fonction/').subscribe(
    value => {
      if (value != null) {
           this.fonctionListe = value;
           this.editableFonctions = value;
                                                 
      }
    }
  );
}

  public saveFonction() {
  this.http.post<FonctionVo>('http://localhost:8080/generated/fonction/', this.fonction).subscribe(data=>{
    this.createHide();
     this.fonctionListe.push(data);

  });
  }

  public editFonction() {
  this.http.put<FonctionVo>('http://localhost:8080/generated/fonction/', this.fonction).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findFonction ( pojo : FonctionVo ){
  this.http.post<Array<FonctionVo>>('http://localhost:8080/generated/fonction/search/', pojo).subscribe(
    value =>{
       this.fonctionListe = value;  
    } );
}

public detailShow ( pojo : FonctionVo ){
    this.fonctionDetail = pojo;
    this.fonctionShowDetail = true;
 
}



delete(pojo: FonctionVo) {
   this.http.delete<FonctionVo>('http://localhost:8080/generated/fonction/id/'+pojo.id).subscribe(
        value => {
        var index = this.fonctionListe.indexOf(pojo);
if (index > -1) {
   this.fonctionListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<FonctionVo>('http://localhost:8080/generated/fonction/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.fonction = value; }
        }
        );
        }

            public findAllentreprises() {
             this.http.get<Array<EntrepriseVo>>('http://localhost:8080/generated/entreprise/').subscribe(
            value => {
            if (value != null) { this.entreprises = value; }
            }
            );
            }
            public findAlloccupePars() {
             this.http.get<Array<EtudiantInfoVo>>('http://localhost:8080/generated/etudiantInfo/').subscribe(
            value => {
            if (value != null) { this.occupePars = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _fonctionShowDetail : boolean;
              public detailHide (){

       this.fonctionShowDetail = false;
       this.fonctionDetail = null;
                                  }
 private _fonctionShowEdit : boolean;

 private _fonctionShowCreate : boolean;

get fonctionShowEdit (): boolean  {
  return this._fonctionShowEdit;
}

set fonctionShowEdit (value: boolean ) {
  this._fonctionShowEdit = value ;
}
get fonctionShowCreate (): boolean  {
  return this._fonctionShowCreate;
}

set fonctionShowCreate (value: boolean ) {
  this._fonctionShowCreate = value ;
}
             public editShow(pojo : FonctionVo ){

       this.fonctionShowEdit = true;
       this.fonction = pojo;
                                  }

              public editHide (){

       this.fonctionShowEdit = false;
       this.fonction = new FonctionVo();
                                  }

               public createShow(){

       this.fonctionShowCreate = true;
       this.fonction = new FonctionVo();
                                  }

              public createHide (){

       this.fonctionShowCreate = false;
       this.fonction = new FonctionVo();
                                  }
}
