import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = "http://localhost:3000/";

  constructor(private httpClient : HttpClient) { }

  postData(endPoint:string, data:any):any{
    return this.httpClient.post(this.baseUrl+endPoint,data).subscribe((res)=>{
      console.log(res);
    },error=>{
      console.log(error.status);
    });
  }
}
