import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private storageService:StorageService) { }


  get(endpoint: string, params?: any, headers?: any, options?: any) {
    if(headers || params) {
        let httpOptions = { 
            params: this.getHttpParams(params), 
            headers: this.getHttpHeaders(headers),
            ...options
        };
        return this.http.get(environment.BASE_URL + '/' + endpoint, httpOptions);
    } else {
        return this.http.get(environment.BASE_URL + '/' + endpoint);
    } 
}

post(endpoint: string, body: any, headers?: any) {
    const httpOptions = {headers: this.getHttpHeaders(headers)};
    return this.http.post(environment.BASE_URL + '/' + endpoint, this.getHttpParams(body), httpOptions);
}

postByBody(endpoint: string, body: any, headers?: any) {
    // const httpOptions = {headers: this.getHttpHeaders(headers)};
    return this.http.post(environment.BASE_URL + '/' + endpoint, body);
}

put(endpoint: string, body: any, headers?: any) {
    const httpOptions = {headers: this.getHttpHeaders(headers)};
    return this.http.put(environment.BASE_URL + '/' + endpoint, body, httpOptions);
}

patch(endpoint: string, body: any, headers?: any) {
    const httpOptions = {headers: this.getHttpHeaders(headers)};
    return this.http.patch(environment.BASE_URL + '/' + endpoint, body, httpOptions);
}

private getHttpHeaders(headers:any = {}){
    if (!headers || !headers.Authorization) {
        headers.Authorization =  'token ' + this.storageService.getData('userData')?.key;
    }
    return new HttpHeaders(headers);
}

private getHttpParams(params:any){
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        httpParams = httpParams.append(key, params[key]);
    });
    return httpParams;
}
}
