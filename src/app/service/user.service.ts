import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  sendData(user: User){
  	console.log(user.url, user.email);
  	let sendUrl = "http://localhost:8080/scrap";
  	let headers = new Headers({
  		'Content-Type' : 'application/json'
  	});
  	return this.http.post(sendUrl, JSON.stringify(user) , { headers : headers});	
  }

}
