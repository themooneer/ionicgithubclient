import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Organization} from '../../models/organization';
import {GithubOrgs} from '../../providers/github-orgs';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Organisations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {
  orgs : Organization[];
  fetchedOrgs : Organization[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private githuborgs:GithubOrgs,public toast:ToastController) {
    githuborgs.load().subscribe(
      orgs=> {
        this.orgs=orgs;
        this.fetchedOrgs=orgs;
        console.log(orgs);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganisationsPage');
  }

  search(searchEvent){
      let term = searchEvent.target.value;
      console.log(term);
      if(term.trim()=='' || term.trim().length<3){
          this.orgs=this.fetchedOrgs;
      }else{
       this.githuborgs.search(term).subscribe(org=>{
         
          this.orgs.splice(0,this.orgs.length);
          this.orgs.push(org);
         
         
        },err=>{
          if(err){
             console.log('There is no result');
             this.searchErrorToast(term);
          }
        });
      }
  }
  searchErrorToast(term){
    let t = this.toast.create({
      message:'There is no organization called'+term,
      duration:1000,
    });
    t.present();
  }

}
