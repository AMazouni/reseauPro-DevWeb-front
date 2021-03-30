import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CandidatureVo} from '../model/Candidature.model';
import {StatusVo} from '../model/Status.model';
import {EtudiantInfoVo} from '../model/EtudiantInfo.model';
import {OffreVo} from '../model/Offre.model';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) { }
  private _candidatureDetail : CandidatureVo =  new CandidatureVo() ;
  private _candidatureListe  : Array<CandidatureVo> = new Array<CandidatureVo>();
  
  private _candidatureSearch : CandidatureVo = new CandidatureVo();
  private _candidature: CandidatureVo =  new CandidatureVo();
  private _searchedCandidatures: Array<CandidatureVo> = new Array<CandidatureVo>();
  private _editableCandidatures: Array<CandidatureVo> = new Array<CandidatureVo>();
  private _candidats: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  private _statuss: Array<StatusVo> = new Array<StatusVo>();
  private _offreConcernes: Array<OffreVo> = new Array<OffreVo>();
   get candidats(): Array<EtudiantInfoVo> {
    return this._candidats;
   }

   set candidats(value: Array<EtudiantInfoVo>) {
    this._candidats = value;
   }
   get statuss(): Array<StatusVo> {
    return this._statuss;
   }

   set statuss(value: Array<StatusVo>) {
    this._statuss = value;
   }
   get offreConcernes(): Array<OffreVo> {
    return this._offreConcernes;
   }

   set offreConcernes(value: Array<OffreVo>) {
    this._offreConcernes = value;
   }

  get candidature(): CandidatureVo {
    if (this._candidature == null) {
      this._candidature = new CandidatureVo();
    }
    return this._candidature;
  }

  set candidature(value: CandidatureVo) {
    this._candidature = value;
  }

  get candidatureListe (): Array<CandidatureVo> {
  return this._candidatureListe;
}

set candidatureListe (value: Array<CandidatureVo>) {
  this._candidatureListe = value ;
}

get candidatureDetail (): CandidatureVo {
  return this._candidatureDetail;
}

set candidatureDetail (value: CandidatureVo) {
  this._candidatureDetail = value ;
}

get candidatureSearch (): CandidatureVo {
  return this._candidatureSearch;
}

set candidatureSearch (value: CandidatureVo) {
  this._candidatureSearch = value ;
}

get candidatureShowDetail (): boolean  {
  return this._candidatureShowDetail;
}

set candidatureShowDetail (value: boolean ) {
  this._candidatureShowDetail = value ;
}

  get editableCandidatures (): Array<CandidatureVo> {
   return this._editableCandidatures;
  }

  set editableCandidatures (value: Array<CandidatureVo>) {
   this._editableCandidatures = value;
  }

  public findAll(){
  this.http.get<Array<CandidatureVo>>('http://localhost:8080/generated/candidature/').subscribe(
    value => {
      if (value != null) {
           this.candidatureListe = value;
           this.editableCandidatures = value;
                                                 
      }
    }
  );
}

  public saveCandidature() {
  this.http.post<CandidatureVo>('http://localhost:8080/generated/candidature/', this.candidature).subscribe(data=>{
    this.createHide();
     this.candidatureListe.push(data);

  });
  }

  public editCandidature() {
  this.http.put<CandidatureVo>('http://localhost:8080/generated/candidature/', this.candidature).subscribe(data=>{
    this.editHide();
  });
   
  }

   public findCandidature ( pojo : CandidatureVo ){
  this.http.post<Array<CandidatureVo>>('http://localhost:8080/generated/candidature/search/', pojo).subscribe(
    value =>{
       this.candidatureListe = value;  
    } );
}

public detailShow ( pojo : CandidatureVo ){
    this.candidatureDetail = pojo;
    this.candidatureShowDetail = true;
 
}



delete(pojo: CandidatureVo) {
   this.http.delete<CandidatureVo>('http://localhost:8080/generated/candidature/id/'+pojo.id).subscribe(
        value => {
        var index = this.candidatureListe.indexOf(pojo);
if (index > -1) {
   this.candidatureListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<CandidatureVo>('http://localhost:8080/generated/candidature/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.candidature = value; }
        }
        );
        }

            public findAllcandidats() {
             this.http.get<Array<EtudiantInfoVo>>('http://localhost:8080/generated/etudiantInfo/').subscribe(
            value => {
            if (value != null) { this.candidats = value; }
            }
            );
            }
            public findAllstatuss() {
             this.http.get<Array<StatusVo>>('http://localhost:8080/generated/status/').subscribe(
            value => {
            if (value != null) { this.statuss = value; }
            }
            );
            }
            public findAlloffreConcernes() {
             this.http.get<Array<OffreVo>>('http://localhost:8080/generated/offre/').subscribe(
            value => {
            if (value != null) { this.offreConcernes = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _candidatureShowDetail : boolean;
              public detailHide (){

       this.candidatureShowDetail = false;
       this.candidatureDetail = null;
                                  }
 private _candidatureShowEdit : boolean;

 private _candidatureShowCreate : boolean;

get candidatureShowEdit (): boolean  {
  return this._candidatureShowEdit;
}

set candidatureShowEdit (value: boolean ) {
  this._candidatureShowEdit = value ;
}
get candidatureShowCreate (): boolean  {
  return this._candidatureShowCreate;
}

set candidatureShowCreate (value: boolean ) {
  this._candidatureShowCreate = value ;
}
             public editShow(pojo : CandidatureVo ){

       this.candidatureShowEdit = true;
       this.candidature = pojo;
                                  }

              public editHide (){

       this.candidatureShowEdit = false;
       this.candidature = new CandidatureVo();
                                  }

               public createShow(){

       this.candidatureShowCreate = true;
       this.candidature = new CandidatureVo();
                                  }

              public createHide (){

       this.candidatureShowCreate = false;
       this.candidature = new CandidatureVo();
                                  }
}
