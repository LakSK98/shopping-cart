import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  postData(endPoint: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + endPoint, data);
  }

  getData(endPoint: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + endPoint);
  }

  getDataWithHeaders(endPoint: string, header: { headers : HttpHeaders }): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + endPoint, header);
  }

  updateData(endPoint:string, data: any){
    const { id , ...rest } = data;
    return this.httpClient.patch<any>(this.baseUrl+endPoint+`/${id}`,data);
  }

}
