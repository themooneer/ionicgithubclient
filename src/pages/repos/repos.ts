import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Repository} from '../../models/repository'
import {GithubRepos} from '../../providers/github-repos';
import {RepoDetailsPage} from '../repo-details/repo-details';
/*
  Generated class for the Repos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repos : Repository[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private githubRepos:GithubRepos) {
    githubRepos.load().subscribe(repos=>{
      this.repos=repos
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReposPage');
  }
  showRepoDetails(repo :Repository){
    this.navCtrl.push(RepoDetailsPage,{repo});
  }
}
