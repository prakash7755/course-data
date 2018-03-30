import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const apiURL: String = 'http://localhost:3000/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token'),
  })
};

@Injectable()
export class BooksDataService {

  constructor(private http: HttpClient) { }

  getBooksDetail(){
     return this.http   
           .get(apiURL + '/data' , httpOptions)
           .toPromise()
           .then((data: any) => {
             return data || {};
           })
           .catch(err => {
             console.log('Get All Messages - ', err)
           })
  }

}
