import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

	title: string;
	brand: string;
	availability: string;
	price: string;
	category: string;
	description: string;
	cover: string;
  id: string;

	bookService: any;
	router;
  route;

  editMode: boolean = false;

	static get parameters() {
		return [BookService, ActivatedRoute, Router];
	}

	constructor(bookService, route, router) {
		this.bookService = bookService;
    this.route = route;
	  this.router = router;
	}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params["bookId"]) {
        let productId = params["bookId"];
        this.editMode = true;
        console.log(this.editMode);
        this.bookService.getBookById(productId).subscribe(book => {
          this.id = book._id;
          this.title = book.title;
          this.brand = book.author;
          this.availability = book.publisher;
          this.price = book.price;
          this.category = book.category;
          this.description = book.description;
          this.cover = book.cover;
        });
      }
    });
  }

  addBook() {
    if(this.editMode) {
      let bookData = {
        id: this.id,
        title: this.title,
        author: this.brand,
        publisher: this.availability,
        price: this.price,
        category: this.category,
        description: this.description,
        cover:this.cover
      }

      this.bookService.updateBook(bookData).subscribe(result => {
        if(result.success) {
          alert(result.message);
          this.router.navigate(["/manage/books"]);
        }
      });
    } else {
      let productData = {
        title: this.title,
        author: this.brand,
        publisher: this.availability,
        price: this.price,
        category: this.category,
        description: this.description,
        cover:this.cover
      }

      this.bookService.addBook(productData).subscribe(res => {
        if(res.success) {
          alert(res.message);
          this.router.navigate(["/manage/books"]);
        } else {
          alert(res.message);
        }
      });
    }
  }

}
