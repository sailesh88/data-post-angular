import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // create a method named: getPosts()
  // this method returns list-of-items in form of json 
  // every HTTTP call returns Observable object
  getPosts() {
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(this.URL);
  }
}