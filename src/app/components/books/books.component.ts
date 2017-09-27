import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
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

  deleteBook(id) {
  	this.productService.deleteBookById(id).subscribe(result => {
  		if(result.success) {
        for(var index = 0; index < this.productList.length; index++) {
          if(this.productList[index]._id == result.id) {
            this.productList.splice(index, 1);
          }
        }       
      } else {
        alert("Product not successfully deleted");
      }
  	});
  }

  editBook(id) {
   
    this.router.navigate(["/manage/product/add"], {
      queryParams: {
        bookId: id
      }
    });
  }
}