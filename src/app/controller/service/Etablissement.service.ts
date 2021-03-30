import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtablissementVo} from '../model/Etablissement.model';
import {FormationVo} from '../model/Formation.model';
@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private http: HttpClient) { }
  private _etablissementDetail : EtablissementVo =  new EtablissementVo() ;
  private _etablissementListe  : Array<EtablissementVo> = new Array<EtablissementVo>();
  
  private _etablissementSearch : EtablissementVo = new EtablissementVo();
  private _etablissement: EtablissementVo =  new EtablissementVo();
  private _searchedEtablissements: Array<EtablissementVo> = new Array<EtablissementVo>();
  private _editableEtablissements: Array<EtablissementVo> = new Array<EtablissementVo>();
  private _formations: FormationVo;

  get formations(): FormationVo {
    if (this._formations == null) {
      this._formations = new FormationVo();
    }
    return this._formations;
  }

  set formations(value: FormationVo) {
    this._formations = value;
  }

  get etablissement(): EtablissementVo {
    if (this._etablissement == null) {
      this._etablissement = new EtablissementVo();
    }
    return this._etablissement;
  }

  set etablissement(value: EtablissementVo) {
    this._etablissement = value;
  }

  get etablissementListe (): Array<EtablissementVo> {
  return this._etablissementListe;
}

set etablissementListe (value: Array<EtablissementVo>) {
  this._etablissementListe = value ;
}

get etablissementDetail (): EtablissementVo {
  return this._etablissementDetail;
}

set etablissementDetail (value: EtablissementVo) {
  this._etablissementDetail = value ;
}

get etablissementSearch (): EtablissementVo {
  return this._etablissementSearch;
}

set etablissementSearch (value: EtablissementVo) {
  this._etablissementSearch = value ;
}

get etablissementShowDetail (): boolean  {
  return this._etablissementShowDetail;
}

set etablissementShowDetail (value: boolean ) {
  this._etablissementShowDetail = value ;
}

  get editableEtablissements (): Array<EtablissementVo> {
   return this._editableEtablissements;
  }

  set editableEtablissements (value: Array<EtablissementVo>) {
   this._editableEtablissements = value;
  }

  public findAll(){
  this.http.get<Array<EtablissementVo>>('http://localhost:8080/generated/etablissement/').subscribe(
    value => {
      if (value != null) {
           this.etablissementListe = value;
           this.editableEtablissements = value;
                                                 
      }
    }
  );
}

  public saveEtablissement() {
  this.http.post<EtablissementVo>('http://localhost:8080/generated/etablissement/', this.etablissement).subscribe(data=>{
    this.createHide();
     this.etablissementListe.push(data);

  });
  this.etablissement.formationsVo.length = 0;
  }

  public editEtablissement() {
  this.http.put<EtablissementVo>('http://localhost:8080/generated/etablissement/', this.etablissement).subscribe(data=>{
    this.editHide();
  });
      this.etablissement.formationsVo.length = 0;
   
  }

  public addformations() {
  this.etablissement.formationsVo.push(this.cloneformations(this.formations));
  }

  public cloneformations(formations: FormationVo) {
  const myformationsClone = new FormationVo();
  myformationsClone.intitule = formations.intitule;
  myformationsClone.ref = formations.ref;
  myformationsClone.id = formations.id;
  myformationsClone.description = formations.description;
  myformationsClone.etablissementVo.ref = formations.etablissementVo.ref;7
  myformationsClone.responsableVo.code = formations.responsableVo.code;7
  return myformationsClone;
  }

  public removeformations(i: number) {
    this.etablissement.formationsVo.splice(i, 1);
  }
   public findEtablissement ( pojo : EtablissementVo ){
  this.http.post<Array<EtablissementVo>>('http://localhost:8080/generated/etablissement/search/', pojo).subscribe(
    value =>{
       this.etablissementListe = value;  
    } );
}

public detailShow ( pojo : EtablissementVo ){
    this.etablissementDetail = pojo;
    this.etablissementShowDetail = true;
 
}



delete(pojo: EtablissementVo) {
   this.http.delete<EtablissementVo>('http://localhost:8080/generated/etablissement/id/'+pojo.id).subscribe(
        value => {
        var index = this.etablissementListe.indexOf(pojo);
if (index > -1) {
   this.etablissementListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<EtablissementVo>('http://localhost:8080/generated/etablissement/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.etablissement = value; }
        }
        );
        }



          /***********************************************************************************************/
        private _etablissementShowDetail : boolean;
              public detailHide (){

       this.etablissementShowDetail = false;
       this.etablissementDetail = null;
                                  }
 private _etablissementShowEdit : boolean;

 private _etablissementShowCreate : boolean;

get etablissementShowEdit (): boolean  {
  return this._etablissementShowEdit;
}

set etablissementShowEdit (value: boolean ) {
  this._etablissementShowEdit = value ;
}
get etablissementShowCreate (): boolean  {
  return this._etablissementShowCreate;
}

set etablissementShowCreate (value: boolean ) {
  this._etablissementShowCreate = value ;
}
             public editShow(pojo : EtablissementVo ){

       this.etablissementShowEdit = true;
       this.etablissement = pojo;
                                  }

              public editHide (){

       this.etablissementShowEdit = false;
       this.etablissement = new EtablissementVo();
                                  }

               public createShow(){

       this.etablissementShowCreate = true;
       this.etablissement = new EtablissementVo();
                                  }

              public createHide (){

       this.etablissementShowCreate = false;
       this.etablissement = new EtablissementVo();
                                  }
}
