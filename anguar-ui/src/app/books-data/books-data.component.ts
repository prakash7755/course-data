import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data/books-data.service';

import * as _ from 'underscore';
import { PaginationService } from '../services/pagination/pagination.service';

@Component({
  selector: 'app-books-data',
  templateUrl: './books-data.component.html',
  styleUrls: ['./books-data.component.css']
})
export class BooksDataComponent implements OnInit {
   public books;
   private allItems: any[];
   pager: any = {};
   pagedItems: any[];
  constructor(private booksDetails:BooksDataService, private pagerService: PaginationService) {
     this.getAllBooks();
     this.books = [];
   }


   getAllBooks(){
   	this.booksDetails.getBooksDetail()
   		.then(data => {
   			this.books = data;
         this.setPage(1);
   		})
   		.catch(error => {
   			console.log(error);
   		})
   }


   setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.books.length, page);

        this.pagedItems = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

  ngOnInit() {
  }

}
