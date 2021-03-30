import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormationVo} from '../model/Formation.model';
import {ProfesseurInfoVo} from '../model/ProfesseurInfo.model';
import {EtudiantInfoVo} from '../model/EtudiantInfo.model';
import {EtablissementVo} from '../model/Etablissement.model';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }
  private _formationDetail : FormationVo =  new FormationVo() ;
  private _formationListe  : Array<FormationVo> = new Array<FormationVo>();
  
  private _formationSearch : FormationVo = new FormationVo();
  private _formation: FormationVo =  new FormationVo();
  private _searchedFormations: Array<FormationVo> = new Array<FormationVo>();
  private _editableFormations: Array<FormationVo> = new Array<FormationVo>();
  private _etablissements: Array<EtablissementVo> = new Array<EtablissementVo>();
  private _responsables: Array<ProfesseurInfoVo> = new Array<ProfesseurInfoVo>();
  private _laureats: EtudiantInfoVo;

  get laureats(): EtudiantInfoVo {
    if (this._laureats == null) {
      this._laureats = new EtudiantInfoVo();
    }
    return this._laureats;
  }

  set laureats(value: EtudiantInfoVo) {
    this._laureats = value;
  }
  private _etudiantsAct: EtudiantInfoVo;

  get etudiantsAct(): EtudiantInfoVo {
    if (this._etudiantsAct == null) {
      this._etudiantsAct = new EtudiantInfoVo();
    }
    return this._etudiantsAct;
  }

  set etudiantsAct(value: EtudiantInfoVo) {
    this._etudiantsAct = value;
  }
   get etablissements(): Array<EtablissementVo> {
    return this._etablissements;
   }

   set etablissements(value: Array<EtablissementVo>) {
    this._etablissements = value;
   }
   get responsables(): Array<ProfesseurInfoVo> {
    return this._responsables;
   }

   set responsables(value: Array<ProfesseurInfoVo>) {
    this._responsables = value;
   }

  get formation(): FormationVo {
    if (this._formation == null) {
      this._formation = new FormationVo();
    }
    return this._formation;
  }

  set formation(value: FormationVo) {
    this._formation = value;
  }

  get formationListe (): Array<FormationVo> {
  return this._formationListe;
}

set formationListe (value: Array<FormationVo>) {
  this._formationListe = value ;
}

get formationDetail (): FormationVo {
  return this._formationDetail;
}

set formationDetail (value: FormationVo) {
  this._formationDetail = value ;
}

get formationSearch (): FormationVo {
  return this._formationSearch;
}

set formationSearch (value: FormationVo) {
  this._formationSearch = value ;
}

get formationShowDetail (): boolean  {
  return this._formationShowDetail;
}

set formationShowDetail (value: boolean ) {
  this._formationShowDetail = value ;
}

  get editableFormations (): Array<FormationVo> {
   return this._editableFormations;
  }

  set editableFormations (value: Array<FormationVo>) {
   this._editableFormations = value;
  }

  public findAll(){
  this.http.get<Array<FormationVo>>('http://localhost:8080/generated/formation/').subscribe(
    value => {
      if (value != null) {
           this.formationListe = value;
           this.editableFormations = value;
                                                 
      }
    }
  );
}

  public saveFormation() {
  this.http.post<FormationVo>('http://localhost:8080/generated/formation/', this.formation).subscribe(data=>{
    this.createHide();
     this.formationListe.push(data);

  });
  this.formation.laureatsVo.length = 0;
  this.formation.etudiantsActVo.length = 0;
  }

  public editFormation() {
  this.http.put<FormationVo>('http://localhost:8080/generated/formation/', this.formation).subscribe(data=>{
    this.editHide();
  });
      this.formation.laureatsVo.length = 0;
      this.formation.etudiantsActVo.length = 0;
   
  }

  public addlaureats() {
  this.formation.laureatsVo.push(this.clonelaureats(this.laureats));
  }

  public clonelaureats(laureats: EtudiantInfoVo) {
  const mylaureatsClone = new EtudiantInfoVo();
  mylaureatsClone.anneFinEtude = laureats.anneFinEtude;
  mylaureatsClone.prenom = laureats.prenom;
  mylaureatsClone.nom = laureats.nom;
  mylaureatsClone.linkedIn = laureats.linkedIn;
  mylaureatsClone.cne = laureats.cne;
  mylaureatsClone.codeApogee = laureats.codeApogee;
  mylaureatsClone.id = laureats.id;
  mylaureatsClone.sexeVo.ref = laureats.sexeVo.ref;7
  mylaureatsClone.formationActuelleVo.ref = laureats.formationActuelleVo.ref;7
  mylaureatsClone.fonctionActuelleVo.ref = laureats.fonctionActuelleVo.ref;7
  mylaureatsClone.compteVo.email = laureats.compteVo.email;7
  return mylaureatsClone;
  }

  public removelaureats(i: number) {
    this.formation.laureatsVo.splice(i, 1);
  }
  public addetudiantsAct() {
  this.formation.etudiantsActVo.push(this.cloneetudiantsAct(this.etudiantsAct));
  }

  public cloneetudiantsAct(etudiantsAct: EtudiantInfoVo) {
  const myetudiantsActClone = new EtudiantInfoVo();
  myetudiantsActClone.anneFinEtude = etudiantsAct.anneFinEtude;
  myetudiantsActClone.prenom = etudiantsAct.prenom;
  myetudiantsActClone.nom = etudiantsAct.nom;
  myetudiantsActClone.linkedIn = etudiantsAct.linkedIn;
  myetudiantsActClone.cne = etudiantsAct.cne;
  myetudiantsActClone.codeApogee = etudiantsAct.codeApogee;
  myetudiantsActClone.id = etudiantsAct.id;
  myetudiantsActClone.sexeVo.ref = etudiantsAct.sexeVo.ref;7
  myetudiantsActClone.formationActuelleVo.ref = etudiantsAct.formationActuelleVo.ref;7
  myetudiantsActClone.fonctionActuelleVo.ref = etudiantsAct.fonctionActuelleVo.ref;7
  myetudiantsActClone.compteVo.email = etudiantsAct.compteVo.email;7
  return myetudiantsActClone;
  }

  public removeetudiantsAct(i: number) {
    this.formation.etudiantsActVo.splice(i, 1);
  }
   public findFormation ( pojo : FormationVo ){
  this.http.post<Array<FormationVo>>('http://localhost:8080/generated/formation/search/', pojo).subscribe(
    value =>{
       this.formationListe = value;  
    } );
}

public detailShow ( pojo : FormationVo ){
    this.formationDetail = pojo;
    this.formationShowDetail = true;
 
}



delete(pojo: FormationVo) {
   this.http.delete<FormationVo>('http://localhost:8080/generated/formation/id/'+pojo.id).subscribe(
        value => {
        var index = this.formationListe.indexOf(pojo);
if (index > -1) {
   this.formationListe.splice(index, 1);
}
}
        );


}


       public findByref(ref: string) {
      this.http.get<FormationVo>('http://localhost:8080/generated/formation/ref/' + ref).subscribe(
        value => {
        if (value != null) { this.formation = value; }
        }
        );
        }

            public findAlletablissements() {
             this.http.get<Array<EtablissementVo>>('http://localhost:8080/generated/etablissement/').subscribe(
            value => {
            if (value != null) { this.etablissements = value; }
            }
            );
            }
            public findAllresponsables() {
             this.http.get<Array<ProfesseurInfoVo>>('http://localhost:8080/generated/professeurInfo/').subscribe(
            value => {
            if (value != null) { this.responsables = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _formationShowDetail : boolean;
              public detailHide (){

       this.formationShowDetail = false;
       this.formationDetail = null;
                                  }
 private _formationShowEdit : boolean;

 private _formationShowCreate : boolean;

get formationShowEdit (): boolean  {
  return this._formationShowEdit;
}

set formationShowEdit (value: boolean ) {
  this._formationShowEdit = value ;
}
get formationShowCreate (): boolean  {
  return this._formationShowCreate;
}

set formationShowCreate (value: boolean ) {
  this._formationShowCreate = value ;
}
             public editShow(pojo : FormationVo ){

       this.formationShowEdit = true;
       this.formation = pojo;
                                  }

              public editHide (){

       this.formationShowEdit = false;
       this.formation = new FormationVo();
                                  }

               public createShow(){

       this.formationShowCreate = true;
       this.formation = new FormationVo();
                                  }

              public createHide (){

       this.formationShowCreate = false;
       this.formation = new FormationVo();
                                  }
}
