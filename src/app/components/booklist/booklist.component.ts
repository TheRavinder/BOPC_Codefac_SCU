import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
	productService: any;
	productList;
  router;

	static get parameters() {
		return [BookService, Router];
	}

  constructor(bookService, router) {
  	this.productService = bookService;
    this.router = router;
  }

  ngOnInit() {
  	this.productService.getAllBooks().subscribe(bookList => {
  		this.productList = bookList;
  		console.log(this.productList);
  	});
  }

  navigateToBook(book) {
    this.router.navigate(["home/book"], {
      queryParams: {
        book: JSON.stringify(book)
      }
    })
  }

}
