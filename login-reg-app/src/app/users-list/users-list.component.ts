import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: object[]=[];
  constructor(private _userService: UserService, private _router: Router) { 
  	this._userService.getAllUsers()
  	.then((data)=>this.users = data)
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
