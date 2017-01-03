import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Repository} from '../models/repository';

/*
  Generated class for the GithubRepos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubRepos {
  githubApiUrl = 'https://api.github.com';
  constructor(public http: Http) {
    console.log('Hello GithubRepos Provider');
  }
  load():Observable<Repository[]>{
    return this.http.get(`${this.githubApiUrl}/repositories`)
    .map(res=><Repository[]>res.json());
  }

}
