import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OffreVo} from '../model/Offre.model';
import {FonctionVo} from '../model/Fonction.model';
import {CandidatureVo} from '../model/Candidature.model';
import {OffreTagsVo} from '../model/OffreTags.model';
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }
  private _offreDetail : OffreVo =  new OffreVo() ;
  private _offreListe  : Array<OffreVo> = new Array<OffreVo>();
  
  private _offreSearch : OffreVo = new OffreVo();
  private _offre: OffreVo =  new OffreVo();
  private _searchedOffres: Array<OffreVo> = new Array<OffreVo>();
  private _editableOffres: Array<OffreVo> = new Array<OffreVo>();
  private _tagss: Array<OffreTagsVo> = new Array<OffreTagsVo>();
  private _candidatures: CandidatureVo;

  get candidatures(): CandidatureVo {
    if (this._candidatures == null) {
      this._candidatures = new CandidatureVo();
    }
    return this._candidatures;
  }

  set candidatures(value: CandidatureVo) {
    this._candidatures = value;
  }
   get tagss(): Array<OffreTagsVo> {
    return this._tagss;
   }

   set tagss(value: Array<OffreTagsVo>) {
    this._tagss = value;
   }

  get offre(): OffreVo {
    if (this._offre == null) {
      this._offre = new OffreVo();
    }
    return this._offre;
  }

  set offre(value: OffreVo) {
    this._offre = value;
  }

  get offreListe (): Array<OffreVo> {
  return this._offreListe;
}

set offreListe (value: Array<OffreVo>) {
  this._offreListe = value ;
}

get offreDetail (): OffreVo {
  return this._offreDetail;
}

set offreDetail (value: OffreVo) {
  this._offreDetail = value ;
}

get offreSearch (): OffreVo {
  return this._offreSearch;
}

set offreSearch (value: OffreVo) {
  this._offreSearch = value ;
}

get offreShowDetail (): boolean  {
  return this._offreShowDetail;
}

set offreShowDetail (value: boolean ) {
  this._offreShowDetail = value ;
}

  get editableOffres (): Array<OffreVo> {
   return this._editableOffres;
  }

  set editableOffres (value: Array<OffreVo>) {
   this._editableOffres = value;
  }

  public findAll(){
  this.http.get<Array<OffreVo>>('http://localhost:8080/generated/offre/').subscribe(
    value => {
      if (value != null) {
           this.offreListe = value;
           this.editableOffres = value;
                                                 
      }
    }
  );
}

  public saveOffre() {
  this.http.post<OffreVo>('http://localhost:8080/generated/offre/', this.offre).subscribe(data=>{
    this.createHide();
     this.offreListe.push(data);

  });
  this.offre.candidaturesVo.length = 0;
  }

  public editOffre() {
  this.http.put<OffreVo>('http://localhost:8080/generated/offre/', this.offre).subscribe(data=>{
    this.editHide();
  });
      this.offre.candidaturesVo.length = 0;
   
  }

  public addcandidatures() {
  this.offre.candidaturesVo.push(this.clonecandidatures(this.candidatures));
  }

  public clonecandidatures(candidatures: CandidatureVo) {
  const mycandidaturesClone = new CandidatureVo();
  mycandidaturesClone.lettreMotivation = candidatures.lettreMotivation;
  mycandidaturesClone.ref = candidatures.ref;
  mycandidaturesClone.id = candidatures.id;
  mycandidaturesClone.candidatVo.cne = candidatures.candidatVo.cne;7
  mycandidaturesClone.statusVo.code = candidatures.statusVo.code;7
  mycandidaturesClone.offreConcerneVo.ref = candidatures.offreConcerneVo.ref;7
  return mycandidaturesClone;
  }

  public removecandidatures(i: number) {
    this.offre.candidaturesVo.splice(i, 1);
  }
   public findOffre ( pojo : OffreVo ){
  this.http.post<Array<OffreVo>>('http://localhost:8080/generated/offre/search/', pojo).subscribe(
    value =>{
       this.offreListe = value;  
    } );
}

public detailShow ( pojo : OffreVo ){
    this.offreDetail = pojo;
    this.offreShowDetail = true;
 
}



delete(pojo: OffreVo) {
   this.http.delete<OffreVo>('http://localhost:8080/generated/offre/id/'+pojo.id).subscribe(
        value => {
        var index = this.offreListe.indexOf(pojo);
if (index > -1) {
   this.offreListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<OffreVo>('http://localhost:8080/generated/offre/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.offre = value; }
        }
        );
        }

            public findAlltagss() {
             this.http.get<Array<OffreTagsVo>>('http://localhost:8080/generated/offreTags/').subscribe(
            value => {
            if (value != null) { this.tagss = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _offreShowDetail : boolean;
              public detailHide (){

       this.offreShowDetail = false;
       this.offreDetail = null;
                                  }
 private _offreShowEdit : boolean;

 private _offreShowCreate : boolean;

get offreShowEdit (): boolean  {
  return this._offreShowEdit;
}

set offreShowEdit (value: boolean ) {
  this._offreShowEdit = value ;
}
get offreShowCreate (): boolean  {
  return this._offreShowCreate;
}

set offreShowCreate (value: boolean ) {
  this._offreShowCreate = value ;
}
             public editShow(pojo : OffreVo ){

       this.offreShowEdit = true;
       this.offre = pojo;
                                  }

              public editHide (){

       this.offreShowEdit = false;
       this.offre = new OffreVo();
                                  }

               public createShow(){

       this.offreShowCreate = true;
       this.offre = new OffreVo();
                                  }

              public createHide (){

       this.offreShowCreate = false;
       this.offre = new OffreVo();
                                  }
}
