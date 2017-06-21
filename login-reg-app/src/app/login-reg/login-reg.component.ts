import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  newUser:object = {name: ""};
  errors: string[] = [];
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }
  login(){
  	console.log(this.newUser);
  	this._userService.login(this.newUser)
  	.then((data)=>{
  		console.log("then");
  		console.log(data);
  		if(data.errors != undefined){
        console.log("we got validation errors");
        var newArr = [];
        for(var key in data.errors){
          newArr.push(data.errors[key].message);
        }
  			this.errors = newArr;
  		}else{
        console.log("no validation errors");
        this._router.navigate(['/success']);
      }
  	})
  	.catch((errors)=>{
  		console.log("catch");
  		console.log(errors);
  	})
  }
}
