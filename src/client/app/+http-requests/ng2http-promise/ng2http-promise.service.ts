import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const serviceUrl = 'https://api.npmjs.org/downloads/range/last-week/angular2';

@Injectable()
export class PromiseService {
    constructor(private _http: Http) {}

    getData() {
        return this._http.get(serviceUrl)
            .map((response: Response) => response.json().downloads)
            .toPromise()
            .catch(this._errorHandler);
    }
    _errorHandler(error:any) {
        console.log(error);

        return Promise.reject(error);
    }
}
