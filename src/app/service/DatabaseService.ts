import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class callDBService {

    private url = environment.url
    constructor(private _http: HttpClient) {}

    getData() {
        return this._http.get(this.url + "/getvolt");
    }
    
    getVolt() { 
        return this._http.get(this.url + "/getVoltage");
    }

    getUSERS(){
        return this._http.get(this.url + "/getCheckUsers");
    }
}