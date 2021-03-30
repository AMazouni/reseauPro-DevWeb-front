import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtudiantInfoVo} from '../model/EtudiantInfo.model';
import {FonctionVo} from '../model/Fonction.model';
import {DemandeVo} from '../model/Demande.model';
import {SexeVo} from '../model/Sexe.model';
import {FormationVo} from '../model/Formation.model';
import {UtilisateurVo} from '../model/Utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class EtudiantInfoService {

  constructor(private http: HttpClient) { }
  private _etudiantInfoDetail : EtudiantInfoVo =  new EtudiantInfoVo() ;
  private _etudiantInfoListe  : Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  
  private _etudiantInfoSearch : EtudiantInfoVo = new EtudiantInfoVo();
  private _etudiantInfo: EtudiantInfoVo =  new EtudiantInfoVo();
  private _searchedEtudiantInfos: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  private _editableEtudiantInfos: Array<EtudiantInfoVo> = new Array<EtudiantInfoVo>();
  private _sexes: Array<SexeVo> = new Array<SexeVo>();
  private _formationActuelles: Array<FormationVo> = new Array<FormationVo>();
  private _experiencesPro: FonctionVo;

  get experiencesPro(): FonctionVo {
    if (this._experiencesPro == null) {
      this._experiencesPro = new FonctionVo();
    }
    return this._experiencesPro;
  }

  set experiencesPro(value: FonctionVo) {
    this._experiencesPro = value;
  }
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
  private _demandeRecu: DemandeVo;

  get demandeRecu(): DemandeVo {
    if (this._demandeRecu == null) {
      this._demandeRecu = new DemandeVo();
    }
    return this._demandeRecu;
  }

  set demandeRecu(value: DemandeVo) {
    this._demandeRecu = value;
  }
  private _demandesEnvoye: DemandeVo;

  get demandesEnvoye(): DemandeVo {
    if (this._demandesEnvoye == null) {
      this._demandesEnvoye = new DemandeVo();
    }
    return this._demandesEnvoye;
  }

  set demandesEnvoye(value: DemandeVo) {
    this._demandesEnvoye = value;
  }
   get sexes(): Array<SexeVo> {
    return this._sexes;
   }

   set sexes(value: Array<SexeVo>) {
    this._sexes = value;
   }
   get formationActuelles(): Array<FormationVo> {
    return this._formationActuelles;
   }

   set formationActuelles(value: Array<FormationVo>) {
    this._formationActuelles = value;
   }

  get etudiantInfo(): EtudiantInfoVo {
    if (this._etudiantInfo == null) {
      this._etudiantInfo = new EtudiantInfoVo();
    }
    return this._etudiantInfo;
  }

  set etudiantInfo(value: EtudiantInfoVo) {
    this._etudiantInfo = value;
  }

  get etudiantInfoListe (): Array<EtudiantInfoVo> {
  return this._etudiantInfoListe;
}

set etudiantInfoListe (value: Array<EtudiantInfoVo>) {
  this._etudiantInfoListe = value ;
}

get etudiantInfoDetail (): EtudiantInfoVo {
  return this._etudiantInfoDetail;
}

set etudiantInfoDetail (value: EtudiantInfoVo) {
  this._etudiantInfoDetail = value ;
}

get etudiantInfoSearch (): EtudiantInfoVo {
  return this._etudiantInfoSearch;
}

set etudiantInfoSearch (value: EtudiantInfoVo) {
  this._etudiantInfoSearch = value ;
}

get etudiantInfoShowDetail (): boolean  {
  return this._etudiantInfoShowDetail;
}

set etudiantInfoShowDetail (value: boolean ) {
  this._etudiantInfoShowDetail = value ;
}

  get editableEtudiantInfos (): Array<EtudiantInfoVo> {
   return this._editableEtudiantInfos;
  }

  set editableEtudiantInfos (value: Array<EtudiantInfoVo>) {
   this._editableEtudiantInfos = value;
  }

  public findAll(){
  this.http.get<Array<EtudiantInfoVo>>('http://localhost:8080/uca/reseaupro/etudiantInfo/').subscribe(
    value => {
      if (value != null) {
           this.etudiantInfoListe = value;
           this.editableEtudiantInfos = value;
                                                 
      }
    }
  );
}

  public saveEtudiantInfo() {
  this.http.post<EtudiantInfoVo>('http://localhost:8080/uca/reseaupro/etudiantInfo/', this.etudiantInfo).subscribe(data=>{
    this.createHide();
     this.etudiantInfoListe.push(data);

  });
  this.etudiantInfo.experiencesProVo.length = 0;
  this.etudiantInfo.formationsVo.length = 0;
  this.etudiantInfo.demandeRecuVo.length = 0;
  this.etudiantInfo.demandesEnvoyeVo.length = 0;
  }

  public editEtudiantInfo() {
  this.http.put<EtudiantInfoVo>('http://localhost:8080/uca/reseaupro/etudiantInfo/', this.etudiantInfo).subscribe(data=>{
    this.editHide();
  });
      this.etudiantInfo.experiencesProVo.length = 0;
      this.etudiantInfo.formationsVo.length = 0;
      this.etudiantInfo.demandeRecuVo.length = 0;
      this.etudiantInfo.demandesEnvoyeVo.length = 0;
   
  }

  public addexperiencesPro() {
  this.etudiantInfo.experiencesProVo.push(this.cloneexperiencesPro(this.experiencesPro));
  }

  public cloneexperiencesPro(experiencesPro: FonctionVo) {
  const myexperiencesProClone = new FonctionVo();
  myexperiencesProClone.deteFin = experiencesPro.deteFin;
  myexperiencesProClone.titre = experiencesPro.titre;
  myexperiencesProClone.dateDebut = experiencesPro.dateDebut;
  myexperiencesProClone.description = experiencesPro.description;
  myexperiencesProClone.ref = experiencesPro.ref;
  myexperiencesProClone.id = experiencesPro.id;
  myexperiencesProClone.entrepriseVo.ref = experiencesPro.entrepriseVo.ref;7
  myexperiencesProClone.occupeParVo.cne = experiencesPro.occupeParVo.cne;7
  return myexperiencesProClone;
  }

  public removeexperiencesPro(i: number) {
    this.etudiantInfo.experiencesProVo.splice(i, 1);
  }
  public addformations() {
  this.etudiantInfo.formationsVo.push(this.cloneformations(this.formations));
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
    this.etudiantInfo.formationsVo.splice(i, 1);
  }
  public adddemandeRecu() {
  this.etudiantInfo.demandeRecuVo.push(this.clonedemandeRecu(this.demandeRecu));
  }

  public clonedemandeRecu(demandeRecu: DemandeVo) {
  const mydemandeRecuClone = new DemandeVo();
  mydemandeRecuClone.objetDemande = demandeRecu.objetDemande;
  mydemandeRecuClone.infoSupp = demandeRecu.infoSupp;
  mydemandeRecuClone.ref = demandeRecu.ref;
  mydemandeRecuClone.id = demandeRecu.id;
  mydemandeRecuClone.categorieDemandeVo.ref = demandeRecu.categorieDemandeVo.ref;7
  mydemandeRecuClone.demandeParVo.cne = demandeRecu.demandeParVo.cne;7
  mydemandeRecuClone.statusVo.code = demandeRecu.statusVo.code;7
  mydemandeRecuClone.demandeAVo.cne = demandeRecu.demandeAVo.cne;7
  return mydemandeRecuClone;
  }

  public removedemandeRecu(i: number) {
    this.etudiantInfo.demandeRecuVo.splice(i, 1);
  }
  public adddemandesEnvoye() {
  this.etudiantInfo.demandesEnvoyeVo.push(this.clonedemandesEnvoye(this.demandesEnvoye));
  }

  public clonedemandesEnvoye(demandesEnvoye: DemandeVo) {
  const mydemandesEnvoyeClone = new DemandeVo();
  mydemandesEnvoyeClone.objetDemande = demandesEnvoye.objetDemande;
  mydemandesEnvoyeClone.infoSupp = demandesEnvoye.infoSupp;
  mydemandesEnvoyeClone.ref = demandesEnvoye.ref;
  mydemandesEnvoyeClone.id = demandesEnvoye.id;
  mydemandesEnvoyeClone.categorieDemandeVo.ref = demandesEnvoye.categorieDemandeVo.ref;7
  mydemandesEnvoyeClone.demandeParVo.cne = demandesEnvoye.demandeParVo.cne;7
  mydemandesEnvoyeClone.statusVo.code = demandesEnvoye.statusVo.code;7
  mydemandesEnvoyeClone.demandeAVo.cne = demandesEnvoye.demandeAVo.cne;7
  return mydemandesEnvoyeClone;
  }

  public removedemandesEnvoye(i: number) {
    this.etudiantInfo.demandesEnvoyeVo.splice(i, 1);
  }
   public findEtudiantInfo ( pojo : EtudiantInfoVo ){
  this.http.post<Array<EtudiantInfoVo>>('http://localhost:8080/uca/reseaupro/etudiantInfo/search/', pojo).subscribe(
    value =>{
       this.etudiantInfoListe = value;  
    } );
}

public detailShow ( pojo : EtudiantInfoVo ){
    this.etudiantInfoDetail = pojo;
    this.etudiantInfoShowDetail = true;
 
}



delete(pojo: EtudiantInfoVo) {
   this.http.delete<EtudiantInfoVo>('http://localhost:8080/uca/reseaupro/etudiantInfo/id/'+pojo.id).subscribe(
        value => {
        var index = this.etudiantInfoListe.indexOf(pojo);
if (index > -1) {
   this.etudiantInfoListe.splice(index, 1);
}
}
        );


}


       public findBycne(ref: string) {
      this.http.get<EtudiantInfoVo>('http://localhost:8080/uca/reseaupro/etudiantInfo/cne/' + ref).subscribe(
        value => {
        if (value != null) { this.etudiantInfo = value; }
        }
        );
        }

            public findAllsexes() {
             this.http.get<Array<SexeVo>>('http://localhost:8080/uca/reseaupro/sexe/').subscribe(
            value => {
            if (value != null) { this.sexes = value; }
            }
            );
            }
            public findAllformationActuelles() {
             this.http.get<Array<FormationVo>>('http://localhost:8080/uca/reseaupro/formation/').subscribe(
            value => {
            if (value != null) { this.formationActuelles = value; }
            }
            );
            }


          /***********************************************************************************************/
        private _etudiantInfoShowDetail : boolean;
              public detailHide (){

       this.etudiantInfoShowDetail = false;
       this.etudiantInfoDetail = null;
                                  }
 private _etudiantInfoShowEdit : boolean;

 private _etudiantInfoShowCreate : boolean;

get etudiantInfoShowEdit (): boolean  {
  return this._etudiantInfoShowEdit;
}

set etudiantInfoShowEdit (value: boolean ) {
  this._etudiantInfoShowEdit = value ;
}
get etudiantInfoShowCreate (): boolean  {
  return this._etudiantInfoShowCreate;
}

set etudiantInfoShowCreate (value: boolean ) {
  this._etudiantInfoShowCreate = value ;
}
             public editShow(pojo : EtudiantInfoVo ){

       this.etudiantInfoShowEdit = true;
       this.etudiantInfo = pojo;
                                  }

              public editHide (){

       this.etudiantInfoShowEdit = false;
       this.etudiantInfo = new EtudiantInfoVo();
                                  }

               public createShow(){

       this.etudiantInfoShowCreate = true;
       this.etudiantInfo = new EtudiantInfoVo();
                                  }

              public createHide (){

       this.etudiantInfoShowCreate = false;
       this.etudiantInfo = new EtudiantInfoVo();
                                  }
}
