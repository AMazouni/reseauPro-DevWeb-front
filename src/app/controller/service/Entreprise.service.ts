import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntrepriseVo} from '../model/Entreprise.model';
import {FonctionVo} from '../model/Fonction.model';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }
  private _entrepriseDetail : EntrepriseVo =  new EntrepriseVo() ;
  private _entrepriseListe  : Array<EntrepriseVo> = new Array<EntrepriseVo>();
  
  private _entrepriseSearch : EntrepriseVo = new EntrepriseVo();
  private _entreprise: EntrepriseVo =  new EntrepriseVo();
  private _searchedEntreprises: Array<EntrepriseVo> = new Array<EntrepriseVo>();
  private _editableEntreprises: Array<EntrepriseVo> = new Array<EntrepriseVo>();
  private _fonctionsLaureat: FonctionVo;

  get fonctionsLaureat(): FonctionVo {
    if (this._fonctionsLaureat == null) {
      this._fonctionsLaureat = new FonctionVo();
    }
    return this._fonctionsLaureat;
  }

  set fonctionsLaureat(value: FonctionVo) {
    this._fonctionsLaureat = value;
  }

  get entreprise(): EntrepriseVo {
    if (this._entreprise == null) {
      this._entreprise = new EntrepriseVo();
    }
    return this._entreprise;
  }

  set entreprise(value: EntrepriseVo) {
    this._entreprise = value;
  }

  get entrepriseListe (): Array<EntrepriseVo> {
  return this._entrepriseListe;
}

set entrepriseListe (value: Array<EntrepriseVo>) {
  this._entrepriseListe = value ;
}

get entrepriseDetail (): EntrepriseVo {
  return this._entrepriseDetail;
}

set entrepriseDetail (value: EntrepriseVo) {
  this._entrepriseDetail = value ;
}

get entrepriseSearch (): EntrepriseVo {
  return this._entrepriseSearch;
}

set entrepriseSearch (value: EntrepriseVo) {
  this._entrepriseSearch = value ;
}

get entrepriseShowDetail (): boolean  {
  return this._entrepriseShowDetail;
}

set entrepriseShowDetail (value: boolean ) {
  this._entrepriseShowDetail = value ;
}

  get editableEntreprises (): Array<EntrepriseVo> {
   return this._editableEntreprises;
  }

  set editableEntreprises (value: Array<EntrepriseVo>) {
   this._editableEntreprises = value;
  }

  public findAll(){
  this.http.get<Array<EntrepriseVo>>('http://localhost:8080/generated/entreprise/').subscribe(
    value => {
      if (value != null) {
           this.entrepriseListe = value;
           this.editableEntreprises = value;
                                                 
      }
    }
  );
}

  public saveEntreprise() {
  this.http.post<EntrepriseVo>('http://localhost:8080/generated/entreprise/', this.entreprise).subscribe(data=>{
    this.createHide();
     this.entrepriseListe.push(data);

  });
  this.entreprise.fonctionsLaureatVo.length = 0;
  }

  public editEntreprise() {
  this.http.put<EntrepriseVo>('http://localhost:8080/generated/entreprise/', this.entreprise).subscribe(data=>{
    this.editHide();
  });
      this.entreprise.fonctionsLaureatVo.length = 0;
   
  }

  public addfonctionsLaureat() {
  this.entreprise.fonctionsLaureatVo.push(this.clonefonctionsLaureat(this.fonctionsLaureat));
  }

  public clonefonctionsLaureat(fonctionsLaureat: FonctionVo) {
  const myfonctionsLaureatClone = new FonctionVo();
  myfonctionsLaureatClone.deteFin = fonctionsLaureat.deteFin;
  myfonctionsLaureatClone.titre = fonctionsLaureat.titre;
  myfonctionsLaureatClone.dateDebut = fonctionsLaureat.dateDebut;
  myfonctionsLaureatClone.description = fonctionsLaureat.description;
  myfonctionsLaureatClone.ref = fonctionsLaureat.ref;
  myfonctionsLaureatClone.id = fonctionsLaureat.id;
  myfonctionsLaureatClone.entrepriseVo.ref = fonctionsLaureat.entrepriseVo.ref;7
  myfonctionsLaureatClone.occupeParVo.cne = fonctionsLaureat.occupeParVo.cne;7
  return myfonctionsLaureatClone;
  }

  public removefonctionsLaureat(i: number) {
    this.entreprise.fonctionsLaureatVo.splice(i, 1);
  }
   public findEntreprise ( pojo : EntrepriseVo ){
  this.http.post<Array<EntrepriseVo>>('http://localhost:8080/generated/entreprise/search/', pojo).subscribe(
    value =>{
       this.entrepriseListe = value;  
    } );
}

public detailShow ( pojo : EntrepriseVo ){
    this.entrepriseDetail = pojo;
    this.entrepriseShowDetail = true;
 
}



delete(pojo: EntrepriseVo) {
   this.http.delete<EntrepriseVo>('http://localhost:8080/generated/entreprise/id/'+pojo.id).subscribe(
        value => {
        var index = this.entrepriseListe.indexOf(pojo);
if (index > -1) {
   this.entrepriseListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<EntrepriseVo>('http://localhost:8080/generated/entreprise/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.entreprise = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _entrepriseShowDetail : boolean;
              public detailHide (){

       this.entrepriseShowDetail = false;
       this.entrepriseDetail = null;
                                  }
 private _entrepriseShowEdit : boolean;

 private _entrepriseShowCreate : boolean;

get entrepriseShowEdit (): boolean  {
  return this._entrepriseShowEdit;
}

set entrepriseShowEdit (value: boolean ) {
  this._entrepriseShowEdit = value ;
}
get entrepriseShowCreate (): boolean  {
  return this._entrepriseShowCreate;
}

set entrepriseShowCreate (value: boolean ) {
  this._entrepriseShowCreate = value ;
}
             public editShow(pojo : EntrepriseVo ){

       this.entrepriseShowEdit = true;
       this.entreprise = pojo;
                                  }

              public editHide (){

       this.entrepriseShowEdit = false;
       this.entreprise = new EntrepriseVo();
                                  }

               public createShow(){

       this.entrepriseShowCreate = true;
       this.entreprise = new EntrepriseVo();
                                  }

              public createHide (){

       this.entrepriseShowCreate = false;
       this.entreprise = new EntrepriseVo();
                                  }
}
