import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {
  constructor(private _http: Http) { }
  login(userData){
  	console.log("in the service's login function");
  	return this._http.post('/api/users', userData).map(response=>response.json()).toPromise();
  }
  getCurrentUser(){
  	console.log("in the service's getCurrentUser function");
  	return this._http.get('/api/current_user').map(response=>response.json()).toPromise();
  }
  getAllUsers(){
  	console.log("in the service's getAllUsers function");
  	return this._http.get('/api/users').map(response=>response.json()).toPromise();
  }
}
