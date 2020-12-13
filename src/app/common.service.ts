import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL= "http://localhost:3000/resto";

  constructor(private _http:HttpClient) { }

  getRestoList(){
   return this._http.get(this.URL);
  }

  addResto(data){
    return this._http.post(this.URL, data);
  }

}
