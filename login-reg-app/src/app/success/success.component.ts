import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  currentUser: object = {};
  constructor(private _userService: UserService, private _router: Router) { 
  	this._userService.getCurrentUser()
  	.then((data)=>this.currentUser = data)
  	.catch((error)=>{
  		console.log("catch");
  		console.log(error);
  		if(error.status==401){
  			this._router.navigate(['/login'])
  		}
  	});
  }

  ngOnInit() {
  }

}
