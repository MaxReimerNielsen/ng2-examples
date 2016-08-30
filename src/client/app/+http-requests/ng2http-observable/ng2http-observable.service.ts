import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const serviceUrl = 'https://api.npmjs.org/downloads/range/last-week/angular2';

@Injectable()
export class ObservableService {
    constructor(private _http: Http) {}

    getData() {
        return this._http.get(serviceUrl)
            .map((response: Response) => response.json().downloads)
            .catch(this._errorHandler);
    }

    _errorHandler(error:any) {
        console.log(error);

        return Observable.throw(error);
    }
}
