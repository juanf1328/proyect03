import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  url = `https://robohash.org/?200x200`
  constructor(private http: HttpClient) { 
    console.log('Holaa')
  }
  getRobots(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
      
    });
  }
}
