import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class BookService {
	http: any;

	static get parameters() {
		return [Http];
	}

  constructor(http) {
  	this.http = http;
  }

  getAllBooks() {
    let searchUrl = "/books";
     console.log(this.http.get(searchUrl).map(res => res.json()));
    return this.http.get(searchUrl).map(res => res.json());
 
  }

  getBookById(id) {
    let searchUrl = "/book?bookId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deleteBookById(id) {
    let searchUrl = "/book?bookId=" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  addBook(bookData) {
    let searchUrl = "/book";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ bookData: bookData }), options).map(res => res.json());
  }

  updateBook(bookData) {
    let searchUrl = "/book";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ bookData: bookData }), options).map(res => res.json());
  }
}
