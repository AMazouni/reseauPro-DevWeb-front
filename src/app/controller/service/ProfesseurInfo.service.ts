import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfesseurInfoVo} from '../model/ProfesseurInfo.model';
import {FormationVo} from '../model/Formation.model';
import {UtilisateurVo} from '../model/Utilisateur.model';
import {EtablissementVo} from '../model/Etablissement.model';
@Injectable({
  providedIn: 'root'
})
export class ProfesseurInfoService {

  constructor(private http: HttpClient) { }
  private _professeurInfoDetail : ProfesseurInfoVo =  new ProfesseurInfoVo() ;
  private _professeurInfoListe  : Array<ProfesseurInfoVo> = new Array<ProfesseurInfoVo>();
  
  private _professeurInfoSearch : ProfesseurInfoVo = new ProfesseurInfoVo();
  private _professeurInfo: ProfesseurInfoVo =  new ProfesseurInfoVo();
  private _searchedProfesseurInfos: Array<ProfesseurInfoVo> = new Array<ProfesseurInfoVo>();
  private _editableProfesseurInfos: Array<ProfesseurInfoVo> = new Array<ProfesseurInfoVo>();
  private _etablissements: Array<EtablissementVo> = new Array<EtablissementVo>();
  private _comptes: Array<UtilisateurVo> = new Array<UtilisateurVo>();
  private _responsableDe: FormationVo;

  get responsableDe(): FormationVo {
    if (this._responsableDe == null) {
      this._responsableDe = new FormationVo();
    }
    return this._responsableDe;
  }

  set responsableDe(value: FormationVo) {
    this._responsableDe = value;
  }
   get etablissements(): Array<EtablissementVo> {
    return this._etablissements;
   }

   set etablissements(value: Array<EtablissementVo>) {
    this._etablissements = value;
   }
   get comptes(): Array<UtilisateurVo> {
    return this._comptes;
   }

   set comptes(value: Array<UtilisateurVo>) {
    this._comptes = value;
   }

  get professeurInfo(): ProfesseurInfoVo {
    if (this._professeurInfo == null) {
      this._professeurInfo = new ProfesseurInfoVo();
    }
    return this._professeurInfo;
  }

  set professeurInfo(value: ProfesseurInfoVo) {
    this._professeurInfo = value;
  }

  get professeurInfoListe (): Array<ProfesseurInfoVo> {
  return this._professeurInfoListe;
}

set professeurInfoListe (value: Array<ProfesseurInfoVo>) {
  this._professeurInfoListe = value ;
}

get professeurInfoDetail (): ProfesseurInfoVo {
  return this._professeurInfoDetail;
}

set professeurInfoDetail (value: ProfesseurInfoVo) {
  this._professeurInfoDetail = value ;
}

get professeurInfoSearch (): ProfesseurInfoVo {
  return this._professeurInfoSearch;
}

set professeurInfoSearch (value: ProfesseurInfoVo) {
  this._professeurInfoSearch = value ;
}

get professeurInfoShowDetail (): boolean  {
  return this._professeurInfoShowDetail;
}

set professeurInfoShowDetail (value: boolean ) {
  this._professeurInfoShowDetail = value ;
}

  get editableProfesseurInfos (): Array<ProfesseurInfoVo> {
   return this._editableProfesseurInfos;
  }

  set editableProfesseurInfos (value: Array<ProfesseurInfoVo>) {
   this._editableProfesseurInfos = value;
  }

  public findAll(){
  this.http.get<Array<ProfesseurInfoVo>>('http://localhost:8080/uca/reseaupro/professeurInfo/').subscribe(
    value => {
      if (value != null) {
           this.professeurInfoListe = value;
           this.editableProfesseurInfos = value;
                                                 
      }
    }
  );
}

  public saveProfesseurInfo() {
  this.http.post<ProfesseurInfoVo>('http://localhost:8080/uca/reseaupro/professeurInfo/', this.professeurInfo).subscribe(data=>{
    this.createHide();
     this.professeurInfoListe.push(data);

  });
  this.professeurInfo.responsableDeVo.length = 0;
  }

  public editProfesseurInfo() {
  this.http.put<ProfesseurInfoVo>('http://localhost:8080/uca/reseaupro/professeurInfo/', this.professeurInfo).subscribe(data=>{
    this.editHide();
  });
      this.professeurInfo.responsableDeVo.length = 0;
   
  }

  public addresponsableDe() {
  this.professeurInfo.responsableDeVo.push(this.cloneresponsableDe(this.responsableDe));
  }

  public cloneresponsableDe(responsableDe: FormationVo) {
  const myresponsableDeClone = new FormationVo();
  myresponsableDeClone.intitule = responsableDe.intitule;
  myresponsableDeClone.ref = responsableDe.ref;
  myresponsableDeClone.id = responsableDe.id;
  myresponsableDeClone.description = responsableDe.description;
  myresponsableDeClone.etablissementVo.ref = responsableDe.etablissementVo.ref;7
  myresponsableDeClone.responsableVo.code = responsableDe.responsableVo.code;7
  return myresponsableDeClone;
  }

  public removeresponsableDe(i: number) {
    this.professeurInfo.responsableDeVo.splice(i, 1);
  }
   public findProfesseurInfo ( pojo : ProfesseurInfoVo ){
  this.http.post<Array<ProfesseurInfoVo>>('http://localhost:8080/uca/reseaupro/professeurInfo/search/', pojo).subscribe(
    value =>{
       this.professeurInfoListe = value;  
    } );
}

public detailShow ( pojo : ProfesseurInfoVo ){
    this.professeurInfoDetail = pojo;
    this.professeurInfoShowDetail = true;
 
}



delete(pojo: ProfesseurInfoVo) {
   this.http.delete<ProfesseurInfoVo>('http://localhost:8080/uca/reseaupro/professeurInfo/id/'+pojo.id).subscribe(
        value => {
        var index = this.professeurInfoListe.indexOf(pojo);
if (index > -1) {
   this.professeurInfoListe.splice(index, 1);
}
}
        );


}


       public findBycode(ref: string) {
      this.http.get<ProfesseurInfoVo>('http://localhost:8080/uca/reseaupro/professeurInfo/code/' + ref).subscribe(
        value => {
        if (value != null) { this.professeurInfo = value; }
        }
        );
        }

            public findAlletablissements() {
             this.http.get<Array<EtablissementVo>>('http://localhost:8080/uca/reseaupro/etablissement/').subscribe(
            value => {
            if (value != null) { this.etablissements = value; }
            }
            );
            }
            public findAllcomptes() {
             this.http.get<Array<UtilisateurVo>>('http://localhost:8080/uca/reseaupro/utilisateur/').subscribe(
            value => {
            if (value != null) { this.comptes = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _professeurInfoShowDetail : boolean;
              public detailHide (){

       this.professeurInfoShowDetail = false;
       this.professeurInfoDetail = null;
                                  }
 private _professeurInfoShowEdit : boolean;

 private _professeurInfoShowCreate : boolean;

get professeurInfoShowEdit (): boolean  {
  return this._professeurInfoShowEdit;
}

set professeurInfoShowEdit (value: boolean ) {
  this._professeurInfoShowEdit = value ;
}
get professeurInfoShowCreate (): boolean  {
  return this._professeurInfoShowCreate;
}

set professeurInfoShowCreate (value: boolean ) {
  this._professeurInfoShowCreate = value ;
}
             public editShow(pojo : ProfesseurInfoVo ){

       this.professeurInfoShowEdit = true;
       this.professeurInfo = pojo;
                                  }

              public editHide (){

       this.professeurInfoShowEdit = false;
       this.professeurInfo = new ProfesseurInfoVo();
                                  }

               public createShow(){

       this.professeurInfoShowCreate = true;
       this.professeurInfo = new ProfesseurInfoVo();
                                  }

              public createHide (){

       this.professeurInfoShowCreate = false;
       this.professeurInfo = new ProfesseurInfoVo();
                                  }
}
