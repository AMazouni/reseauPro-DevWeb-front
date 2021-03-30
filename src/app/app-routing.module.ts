import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatuslistComponent} from './view/status/list/status-list.component';
import {StatusCreateComponent} from './view/status/create/status-create.component';
import {StatusDetailsComponent} from './view/status/details/status-details.component';
import {StatusEditComponent} from './view/status/edit/status-edit.component';
import {EntrepriselistComponent} from './view/entreprise/list/entreprise-list.component';
import {EntrepriseCreateComponent} from './view/entreprise/create/entreprise-create.component';
import {EntrepriseDetailsComponent} from './view/entreprise/details/entreprise-details.component';
import {EntrepriseEditComponent} from './view/entreprise/edit/entreprise-edit.component';
import {MessagelistComponent} from './view/message/list/message-list.component';
import {MessageCreateComponent} from './view/message/create/message-create.component';
import {MessageDetailsComponent} from './view/message/details/message-details.component';
import {MessageEditComponent} from './view/message/edit/message-edit.component';
import {AdminInfolistComponent} from './view/adminInfo/list/adminInfo-list.component';
import {AdminInfoCreateComponent} from './view/adminInfo/create/adminInfo-create.component';
import {AdminInfoDetailsComponent} from './view/adminInfo/details/adminInfo-details.component';
import {AdminInfoEditComponent} from './view/adminInfo/edit/adminInfo-edit.component';
import {PublicationlistComponent} from './view/publication/list/publication-list.component';
import {PublicationCreateComponent} from './view/publication/create/publication-create.component';
import {PublicationDetailsComponent} from './view/publication/details/publication-details.component';
import {PublicationEditComponent} from './view/publication/edit/publication-edit.component';
import {OffreTagslistComponent} from './view/offreTags/list/offreTags-list.component';
import {OffreTagsCreateComponent} from './view/offreTags/create/offreTags-create.component';
import {OffreTagsDetailsComponent} from './view/offreTags/details/offreTags-details.component';
import {OffreTagsEditComponent} from './view/offreTags/edit/offreTags-edit.component';
import {CandidaturelistComponent} from './view/candidature/list/candidature-list.component';
import {CandidatureCreateComponent} from './view/candidature/create/candidature-create.component';
import {CandidatureDetailsComponent} from './view/candidature/details/candidature-details.component';
import {CandidatureEditComponent} from './view/candidature/edit/candidature-edit.component';
import {CommentairelistComponent} from './view/commentaire/list/commentaire-list.component';
import {CommentaireCreateComponent} from './view/commentaire/create/commentaire-create.component';
import {CommentaireDetailsComponent} from './view/commentaire/details/commentaire-details.component';
import {CommentaireEditComponent} from './view/commentaire/edit/commentaire-edit.component';
import {OffrelistComponent} from './view/offre/list/offre-list.component';
import {OffreCreateComponent} from './view/offre/create/offre-create.component';
import {OffreDetailsComponent} from './view/offre/details/offre-details.component';
import {OffreEditComponent} from './view/offre/edit/offre-edit.component';
import {EtudiantInfolistComponent} from './view/etudiantInfo/list/etudiantInfo-list.component';
import {EtudiantInfoCreateComponent} from './view/etudiantInfo/create/etudiantInfo-create.component';
import {EtudiantInfoDetailsComponent} from './view/etudiantInfo/details/etudiantInfo-details.component';
import {EtudiantInfoEditComponent} from './view/etudiantInfo/edit/etudiantInfo-edit.component';
import {EtablissementlistComponent} from './view/etablissement/list/etablissement-list.component';
import {EtablissementCreateComponent} from './view/etablissement/create/etablissement-create.component';
import {EtablissementDetailsComponent} from './view/etablissement/details/etablissement-details.component';
import {EtablissementEditComponent} from './view/etablissement/edit/etablissement-edit.component';
import {DemandelistComponent} from './view/demande/list/demande-list.component';
import {DemandeCreateComponent} from './view/demande/create/demande-create.component';
import {DemandeDetailsComponent} from './view/demande/details/demande-details.component';
import {DemandeEditComponent} from './view/demande/edit/demande-edit.component';
import {FonctionlistComponent} from './view/fonction/list/fonction-list.component';
import {FonctionCreateComponent} from './view/fonction/create/fonction-create.component';
import {FonctionDetailsComponent} from './view/fonction/details/fonction-details.component';
import {FonctionEditComponent} from './view/fonction/edit/fonction-edit.component';
import {ProfesseurInfolistComponent} from './view/professeurInfo/list/professeurInfo-list.component';
import {ProfesseurInfoCreateComponent} from './view/professeurInfo/create/professeurInfo-create.component';
import {ProfesseurInfoDetailsComponent} from './view/professeurInfo/details/professeurInfo-details.component';
import {ProfesseurInfoEditComponent} from './view/professeurInfo/edit/professeurInfo-edit.component';
import {SexelistComponent} from './view/sexe/list/sexe-list.component';
import {SexeCreateComponent} from './view/sexe/create/sexe-create.component';
import {SexeDetailsComponent} from './view/sexe/details/sexe-details.component';
import {SexeEditComponent} from './view/sexe/edit/sexe-edit.component';
import {ReponselistComponent} from './view/reponse/list/reponse-list.component';
import {ReponseCreateComponent} from './view/reponse/create/reponse-create.component';
import {ReponseDetailsComponent} from './view/reponse/details/reponse-details.component';
import {ReponseEditComponent} from './view/reponse/edit/reponse-edit.component';
import {CatDemandelistComponent} from './view/catDemande/list/catDemande-list.component';
import {CatDemandeCreateComponent} from './view/catDemande/create/catDemande-create.component';
import {CatDemandeDetailsComponent} from './view/catDemande/details/catDemande-details.component';
import {CatDemandeEditComponent} from './view/catDemande/edit/catDemande-edit.component';
import {QuestionlistComponent} from './view/question/list/question-list.component';
import {QuestionCreateComponent} from './view/question/create/question-create.component';
import {QuestionDetailsComponent} from './view/question/details/question-details.component';
import {QuestionEditComponent} from './view/question/edit/question-edit.component';
import {UtilisateurlistComponent} from './view/utilisateur/list/utilisateur-list.component';
import {UtilisateurCreateComponent} from './view/utilisateur/create/utilisateur-create.component';
import {UtilisateurDetailsComponent} from './view/utilisateur/details/utilisateur-details.component';
import {UtilisateurEditComponent} from './view/utilisateur/edit/utilisateur-edit.component';
import {FormationlistComponent} from './view/formation/list/formation-list.component';
import {FormationCreateComponent} from './view/formation/create/formation-create.component';
import {FormationDetailsComponent} from './view/formation/details/formation-details.component';
import {FormationEditComponent} from './view/formation/edit/formation-edit.component';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'status', children: [
      {path: 'list', component: StatuslistComponent},
      {path: 'create', component: StatusCreateComponent},
      {path: 'details', component: StatusDetailsComponent},
      {path: 'edit', component: StatusEditComponent}
    ]},
  { path: 'entreprise', children: [
      {path: 'list', component: EntrepriselistComponent},
      {path: 'create', component: EntrepriseCreateComponent},
      {path: 'details', component: EntrepriseDetailsComponent},
      {path: 'edit', component: EntrepriseEditComponent}
    ]},
  { path: 'message', children: [
      {path: 'list', component: MessagelistComponent},
      {path: 'create', component: MessageCreateComponent},
      {path: 'details', component: MessageDetailsComponent},
      {path: 'edit', component: MessageEditComponent}
    ]},
  { path: 'adminInfo', children: [
      {path: 'list', component: AdminInfolistComponent},
      {path: 'create', component: AdminInfoCreateComponent},
      {path: 'details', component: AdminInfoDetailsComponent},
      {path: 'edit', component: AdminInfoEditComponent}
    ]},
  { path: 'publication', children: [
      {path: 'list', component: PublicationlistComponent},
      {path: 'create', component: PublicationCreateComponent},
      {path: 'details', component: PublicationDetailsComponent},
      {path: 'edit', component: PublicationEditComponent}
    ]},
  { path: 'offreTags', children: [
      {path: 'list', component: OffreTagslistComponent},
      {path: 'create', component: OffreTagsCreateComponent},
      {path: 'details', component: OffreTagsDetailsComponent},
      {path: 'edit', component: OffreTagsEditComponent}
    ]},
  { path: 'candidature', children: [
      {path: 'list', component: CandidaturelistComponent},
      {path: 'create', component: CandidatureCreateComponent},
      {path: 'details', component: CandidatureDetailsComponent},
      {path: 'edit', component: CandidatureEditComponent}
    ]},
  { path: 'commentaire', children: [
      {path: 'list', component: CommentairelistComponent},
      {path: 'create', component: CommentaireCreateComponent},
      {path: 'details', component: CommentaireDetailsComponent},
      {path: 'edit', component: CommentaireEditComponent}
    ]},
  { path: 'offre', children: [
      {path: 'list', component: OffrelistComponent},
      {path: 'create', component: OffreCreateComponent},
      {path: 'details', component: OffreDetailsComponent},
      {path: 'edit', component: OffreEditComponent}
    ]},
  { path: 'etudiantInfo', children: [
      {path: 'list', component: EtudiantInfolistComponent},
      {path: 'create', component: EtudiantInfoCreateComponent},
      {path: 'details', component: EtudiantInfoDetailsComponent},
      {path: 'edit', component: EtudiantInfoEditComponent}
    ]},
  { path: 'etablissement', children: [
      {path: 'list', component: EtablissementlistComponent},
      {path: 'create', component: EtablissementCreateComponent},
      {path: 'details', component: EtablissementDetailsComponent},
      {path: 'edit', component: EtablissementEditComponent}
    ]},
  { path: 'demande', children: [
      {path: 'list', component: DemandelistComponent},
      {path: 'create', component: DemandeCreateComponent},
      {path: 'details', component: DemandeDetailsComponent},
      {path: 'edit', component: DemandeEditComponent}
    ]},
  { path: 'fonction', children: [
      {path: 'list', component: FonctionlistComponent},
      {path: 'create', component: FonctionCreateComponent},
      {path: 'details', component: FonctionDetailsComponent},
      {path: 'edit', component: FonctionEditComponent}
    ]},
  { path: 'professeurInfo', children: [
      {path: 'list', component: ProfesseurInfolistComponent},
      {path: 'create', component: ProfesseurInfoCreateComponent},
      {path: 'details', component: ProfesseurInfoDetailsComponent},
      {path: 'edit', component: ProfesseurInfoEditComponent}
    ]},
  { path: 'sexe', children: [
      {path: 'list', component: SexelistComponent},
      {path: 'create', component: SexeCreateComponent},
      {path: 'details', component: SexeDetailsComponent},
      {path: 'edit', component: SexeEditComponent}
    ]},
  { path: 'reponse', children: [
      {path: 'list', component: ReponselistComponent},
      {path: 'create', component: ReponseCreateComponent},
      {path: 'details', component: ReponseDetailsComponent},
      {path: 'edit', component: ReponseEditComponent}
    ]},
  { path: 'catDemande', children: [
      {path: 'list', component: CatDemandelistComponent},
      {path: 'create', component: CatDemandeCreateComponent},
      {path: 'details', component: CatDemandeDetailsComponent},
      {path: 'edit', component: CatDemandeEditComponent}
    ]},
  { path: 'question', children: [
      {path: 'list', component: QuestionlistComponent},
      {path: 'create', component: QuestionCreateComponent},
      {path: 'details', component: QuestionDetailsComponent},
      {path: 'edit', component: QuestionEditComponent}
    ]},
  { path: 'utilisateur', children: [
      {path: 'list', component: UtilisateurlistComponent},
      {path: 'create', component: UtilisateurCreateComponent},
      {path: 'details', component: UtilisateurDetailsComponent},
      {path: 'edit', component: UtilisateurEditComponent}
    ]},
  { path: 'formation', children: [
      {path: 'list', component: FormationlistComponent},
      {path: 'create', component: FormationCreateComponent},
      {path: 'details', component: FormationDetailsComponent},
      {path: 'edit', component: FormationEditComponent}
    ]},
  {path: '', component: LandingPageComponent}
    ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
