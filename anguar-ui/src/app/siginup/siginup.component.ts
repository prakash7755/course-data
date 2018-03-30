import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth/user-auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {

   public user;

  constructor(private route: ActivatedRoute,
  private router: Router, private userServ: UserAuthService) {
    this.user = {};
  }
   
   newUser() {
     console.log(this.user);
    if (this.user.password === this.user.coPassword) {
      this.userServ.createUser(this.user)
      .then((data:any) => {
        localStorage.setItem('token', data);
             this.router.navigate(['/books']);
       })
       .catch(err => {
        console.log('login user error ', err)
       })
    } else {
      window.alert('password and Confirm password Should Not Be Same')
    }
  }


  ngOnInit() {
  }

}
