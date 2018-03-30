import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const apiURT: String = 'http://localhost:3000/auth';

@Injectable()
export class UserAuthService {

  constructor( private http: HttpClient ) { }

   createUser(user) {
   	console.log(user);
    return this.http
      .post(apiURT + '/signup', user)
      .toPromise()
      .then((data: any) => {
        return data
      })
      .catch(err => {
        console.log('Create User err-')
      })
  }



  loginUser(user){
    return this.http
            .post(apiURT + '/login', user)
            .toPromise()
            .then((data:any) =>{
              localStorage.setItem('token', data)
              return data
            })
            .catch(err =>{
              console.log('login user error- ', err )
            })
  }


}
