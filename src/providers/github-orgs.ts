import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Organization} from '../models/organization';


/*
  Generated class for the GithubOrgs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubOrgs {
  githubApiUrl = 'https://api.github.com';
  constructor(public http: Http) {
    console.log('Hello GithubOrgs Provider');
  }
  load():Observable<Organization[]>{
      return this.http.get(`${this.githubApiUrl}/organizations`)
      .map(res=><Organization[]>res.json());
  }
  search(params:string):Observable<Organization>{
    return this.http.get(`${this.githubApiUrl}/orgs/${params}`)
    .map(res=><Organization>res.json());
  }
}
