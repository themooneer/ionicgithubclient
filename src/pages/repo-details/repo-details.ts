import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Repository} from '../../models/repository'
import { User} from '../../models/user'
import { GithubUsers } from '../../providers/github-users';


/*
  Generated class for the RepoDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {
  repo :Repository;
  user :User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private githubUsers:GithubUsers ) {
    this.repo=navParams.get('repo');
     githubUsers.loadDetails(this.repo.owner.login).subscribe(user => {
          this.user = user;
          console.log(user)
    })
    /*this.user=this.repo.owner;
    console.log(this.user);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetailsPage');
  }

}
