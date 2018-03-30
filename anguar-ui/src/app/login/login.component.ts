import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth/user-auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user;


  constructor(private userServ: UserAuthService,  private route: ActivatedRoute,
  private router: Router) { 
      this.user = {};
  }
   
   
     verifyUser(){
     	 this.userServ.loginUser(this.user)
     	 .then((data:any) => {
          this.router.navigate(['/books']);
     	 })
     	 .catch(err => {
     	 	console.log('login user error ', err)
     	 })
     }
    
  ngOnInit() {
  }

}
