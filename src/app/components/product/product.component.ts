import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	route;
	Product;
	ProductId;
	ProductService;
  globalService;

	static get parameters() {
		return [ActivatedRoute, BookService, GlobalService];
	}

  constructor(route, bookService, globalService) {
  	this.route = route;
  	this.ProductService = bookService;
    this.globalService = globalService;
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.ProductId = params["id"];
  		this.ProductService.getBookById(this.ProductId).subscribe(book => {
  			this.Product = book;
  			
  		});
  	});
  }

  addToCart() {
    this.globalService.addToCart(this.Product);
    alert("Successfully added");
  }
}
