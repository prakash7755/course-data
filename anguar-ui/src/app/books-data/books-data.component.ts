import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data/books-data.service';

@Component({
  selector: 'app-books-data',
  templateUrl: './books-data.component.html',
  styleUrls: ['./books-data.component.css']
})
export class BooksDataComponent implements OnInit {
   public books;
  constructor(private booksDetails:BooksDataService) {
     this.getAllBooks();
     this.books = [];
   }

   getAllBooks(){
   	this.booksDetails.getBooksDetail()
   		.then(data => {
   			this.books = data
   		})
   		.catch(error => {
   			console.log(error);
   		})
   }

  ngOnInit() {
  }

}
