import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { StatusCreateComponent } from './view/status/create/status-create.component';
import { StatuslistComponent } from './view/status/list/status-list.component';
import { StatusDetailsComponent } from './view/status/details/status-details.component';
import { StatusEditComponent } from './view/status/edit/status-edit.component';
import { StatusComponent } from './view/status/status.component';
import { EntrepriseCreateComponent } from './view/entreprise/create/entreprise-create.component';
import { EntrepriselistComponent } from './view/entreprise/list/entreprise-list.component';
import { EntrepriseDetailsComponent } from './view/entreprise/details/entreprise-details.component';
import { EntrepriseEditComponent } from './view/entreprise/edit/entreprise-edit.component';
import { EntrepriseComponent } from './view/entreprise/entreprise.component';
import { MessageCreateComponent } from './view/message/create/message-create.component';
import { MessagelistComponent } from './view/message/list/message-list.component';
import { MessageDetailsComponent } from './view/message/details/message-details.component';
import { MessageEditComponent } from './view/message/edit/message-edit.component';
import { MessageComponent } from './view/message/message.component';
import { AdminInfoCreateComponent } from './view/adminInfo/create/adminInfo-create.component';
import { AdminInfolistComponent } from './view/adminInfo/list/adminInfo-list.component';
import { AdminInfoDetailsComponent } from './view/adminInfo/details/adminInfo-details.component';
import { AdminInfoEditComponent } from './view/adminInfo/edit/adminInfo-edit.component';
import { AdminInfoComponent } from './view/adminInfo/adminInfo.component';
import { PublicationCreateComponent } from './view/publication/create/publication-create.component';
import { PublicationlistComponent } from './view/publication/list/publication-list.component';
import { PublicationDetailsComponent } from './view/publication/details/publication-details.component';
import { PublicationEditComponent } from './view/publication/edit/publication-edit.component';
import { PublicationComponent } from './view/publication/publication.component';
import { OffreTagsCreateComponent } from './view/offreTags/create/offreTags-create.component';
import { OffreTagslistComponent } from './view/offreTags/list/offreTags-list.component';
import { OffreTagsDetailsComponent } from './view/offreTags/details/offreTags-details.component';
import { OffreTagsEditComponent } from './view/offreTags/edit/offreTags-edit.component';
import { OffreTagsComponent } from './view/offreTags/offreTags.component';
import { CandidatureCreateComponent } from './view/candidature/create/candidature-create.component';
import { CandidaturelistComponent } from './view/candidature/list/candidature-list.component';
import { CandidatureDetailsComponent } from './view/candidature/details/candidature-details.component';
import { CandidatureEditComponent } from './view/candidature/edit/candidature-edit.component';
import { CandidatureComponent } from './view/candidature/candidature.component';
import { CommentaireCreateComponent } from './view/commentaire/create/commentaire-create.component';
import { CommentairelistComponent } from './view/commentaire/list/commentaire-list.component';
import { CommentaireDetailsComponent } from './view/commentaire/details/commentaire-details.component';
import { CommentaireEditComponent } from './view/commentaire/edit/commentaire-edit.component';
import { CommentaireComponent } from './view/commentaire/commentaire.component';
import { OffreCreateComponent } from './view/offre/create/offre-create.component';
import { OffrelistComponent } from './view/offre/list/offre-list.component';
import { OffreDetailsComponent } from './view/offre/details/offre-details.component';
import { OffreEditComponent } from './view/offre/edit/offre-edit.component';
import { OffreComponent } from './view/offre/offre.component';
import { EtudiantInfoCreateComponent } from './view/etudiantInfo/create/etudiantInfo-create.component';
import { EtudiantInfolistComponent } from './view/etudiantInfo/list/etudiantInfo-list.component';
import { EtudiantInfoDetailsComponent } from './view/etudiantInfo/details/etudiantInfo-details.component';
import { EtudiantInfoEditComponent } from './view/etudiantInfo/edit/etudiantInfo-edit.component';
import { EtudiantInfoComponent } from './view/etudiantInfo/etudiantInfo.component';
import { EtablissementCreateComponent } from './view/etablissement/create/etablissement-create.component';
import { EtablissementlistComponent } from './view/etablissement/list/etablissement-list.component';
import { EtablissementDetailsComponent } from './view/etablissement/details/etablissement-details.component';
import { EtablissementEditComponent } from './view/etablissement/edit/etablissement-edit.component';
import { EtablissementComponent } from './view/etablissement/etablissement.component';
import { DemandeCreateComponent } from './view/demande/create/demande-create.component';
import { DemandelistComponent } from './view/demande/list/demande-list.component';
import { DemandeDetailsComponent } from './view/demande/details/demande-details.component';
import { DemandeEditComponent } from './view/demande/edit/demande-edit.component';
import { DemandeComponent } from './view/demande/demande.component';
import { FonctionCreateComponent } from './view/fonction/create/fonction-create.component';
import { FonctionlistComponent } from './view/fonction/list/fonction-list.component';
import { FonctionDetailsComponent } from './view/fonction/details/fonction-details.component';
import { FonctionEditComponent } from './view/fonction/edit/fonction-edit.component';
import { FonctionComponent } from './view/fonction/fonction.component';
import { ProfesseurInfoCreateComponent } from './view/professeurInfo/create/professeurInfo-create.component';
import { ProfesseurInfolistComponent } from './view/professeurInfo/list/professeurInfo-list.component';
import { ProfesseurInfoDetailsComponent } from './view/professeurInfo/details/professeurInfo-details.component';
import { ProfesseurInfoEditComponent } from './view/professeurInfo/edit/professeurInfo-edit.component';
import { ProfesseurInfoComponent } from './view/professeurInfo/professeurInfo.component';
import { SexeCreateComponent } from './view/sexe/create/sexe-create.component';
import { SexelistComponent } from './view/sexe/list/sexe-list.component';
import { SexeDetailsComponent } from './view/sexe/details/sexe-details.component';
import { SexeEditComponent } from './view/sexe/edit/sexe-edit.component';
import { SexeComponent } from './view/sexe/sexe.component';
import { ReponseCreateComponent } from './view/reponse/create/reponse-create.component';
import { ReponselistComponent } from './view/reponse/list/reponse-list.component';
import { ReponseDetailsComponent } from './view/reponse/details/reponse-details.component';
import { ReponseEditComponent } from './view/reponse/edit/reponse-edit.component';
import { ReponseComponent } from './view/reponse/reponse.component';
import { CatDemandeCreateComponent } from './view/catDemande/create/catDemande-create.component';
import { CatDemandelistComponent } from './view/catDemande/list/catDemande-list.component';
import { CatDemandeDetailsComponent } from './view/catDemande/details/catDemande-details.component';
import { CatDemandeEditComponent } from './view/catDemande/edit/catDemande-edit.component';
import { CatDemandeComponent } from './view/catDemande/catDemande.component';
import { QuestionCreateComponent } from './view/question/create/question-create.component';
import { QuestionlistComponent } from './view/question/list/question-list.component';
import { QuestionDetailsComponent } from './view/question/details/question-details.component';
import { QuestionEditComponent } from './view/question/edit/question-edit.component';
import { QuestionComponent } from './view/question/question.component';
import { UtilisateurCreateComponent } from './view/utilisateur/create/utilisateur-create.component';
import { UtilisateurlistComponent } from './view/utilisateur/list/utilisateur-list.component';
import { UtilisateurDetailsComponent } from './view/utilisateur/details/utilisateur-details.component';
import { UtilisateurEditComponent } from './view/utilisateur/edit/utilisateur-edit.component';
import { UtilisateurComponent } from './view/utilisateur/utilisateur.component';
import { FormationCreateComponent } from './view/formation/create/formation-create.component';
import { FormationlistComponent } from './view/formation/list/formation-list.component';
import { FormationDetailsComponent } from './view/formation/details/formation-details.component';
import { FormationEditComponent } from './view/formation/edit/formation-edit.component';
import { FormationComponent } from './view/formation/formation.component';
import { NavbarComponent } from './navbar/navbar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


import {OverlayPanelModule} from 'primeng/overlaypanel';

import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [
    StatusCreateComponent,
    StatuslistComponent,
    StatusDetailsComponent,
    StatusEditComponent,
    StatusComponent,
    EntrepriseCreateComponent,
    EntrepriselistComponent,
    EntrepriseDetailsComponent,
    EntrepriseEditComponent,
    EntrepriseComponent,
    MessageCreateComponent,
    MessagelistComponent,
    MessageDetailsComponent,
    MessageEditComponent,
    MessageComponent,
    AdminInfoCreateComponent,
    AdminInfolistComponent,
    AdminInfoDetailsComponent,
    AdminInfoEditComponent,
    AdminInfoComponent,
    PublicationCreateComponent,
    PublicationlistComponent,
    PublicationDetailsComponent,
    PublicationEditComponent,
    PublicationComponent,
    OffreTagsCreateComponent,
    OffreTagslistComponent,
    OffreTagsDetailsComponent,
    OffreTagsEditComponent,
    OffreTagsComponent,
    CandidatureCreateComponent,
    CandidaturelistComponent,
    CandidatureDetailsComponent,
    CandidatureEditComponent,
    CandidatureComponent,
    CommentaireCreateComponent,
    CommentairelistComponent,
    CommentaireDetailsComponent,
    CommentaireEditComponent,
    CommentaireComponent,
    OffreCreateComponent,
    OffrelistComponent,
    OffreDetailsComponent,
    OffreEditComponent,
    OffreComponent,
    EtudiantInfoCreateComponent,
    EtudiantInfolistComponent,
    EtudiantInfoDetailsComponent,
    EtudiantInfoEditComponent,
    EtudiantInfoComponent,
    EtablissementCreateComponent,
    EtablissementlistComponent,
    EtablissementDetailsComponent,
    EtablissementEditComponent,
    EtablissementComponent,
    DemandeCreateComponent,
    DemandelistComponent,
    DemandeDetailsComponent,
    DemandeEditComponent,
    DemandeComponent,
    FonctionCreateComponent,
    FonctionlistComponent,
    FonctionDetailsComponent,
    FonctionEditComponent,
    FonctionComponent,
    ProfesseurInfoCreateComponent,
    ProfesseurInfolistComponent,
    ProfesseurInfoDetailsComponent,
    ProfesseurInfoEditComponent,
    ProfesseurInfoComponent,
    SexeCreateComponent,
    SexelistComponent,
    SexeDetailsComponent,
    SexeEditComponent,
    SexeComponent,
    ReponseCreateComponent,
    ReponselistComponent,
    ReponseDetailsComponent,
    ReponseEditComponent,
    ReponseComponent,
    CatDemandeCreateComponent,
    CatDemandelistComponent,
    CatDemandeDetailsComponent,
    CatDemandeEditComponent,
    CatDemandeComponent,
    QuestionCreateComponent,
    QuestionlistComponent,
    QuestionDetailsComponent,
    QuestionEditComponent,
    QuestionComponent,
    UtilisateurCreateComponent,
    UtilisateurlistComponent,
    UtilisateurDetailsComponent,
    UtilisateurEditComponent,
    UtilisateurComponent,
    FormationCreateComponent,
    FormationlistComponent,
    FormationDetailsComponent,
    FormationEditComponent,
    FormationComponent,
    AppComponent,
    LandingPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
     OverlayPanelModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
