import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { GithubUsers } from '../providers/github-users';
import { GithubOrgs } from '../providers/github-orgs';
import { GithubRepos } from '../providers/github-repos';
import {UserDetailsPage} from '../pages/user-details/user-details';
@NgModule({
  declarations: [
    MyApp,
   UsersPage,
   ReposPage,
   RepoDetailsPage,
   OrganisationsPage,
   UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    RepoDetailsPage,
    OrganisationsPage,
    UserDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GithubUsers,GithubOrgs,GithubRepos]
})
export class AppModule {}
