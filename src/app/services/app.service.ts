import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class Service {
    
    URL = environment.productoURL;

    constructor(private http: HttpClient) { }

    getItems(data: any): Observable<any> {
        var url = this.URL + 'items';
        // return this.http.get<any>(url, { headers: new HttpHeaders({ "Content-Type": "application/json" }) });
        return this.http.get<any[]>(url);
    }
}
