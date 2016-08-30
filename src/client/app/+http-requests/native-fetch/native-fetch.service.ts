import { Injectable } from '@angular/core';

const serviceUrl = 'https://api.npmjs.org/downloads/range/last-week/angular2';

export interface IDownload {
    day: string;
    downloads: number;
}
export interface IDownloads {
    downloads: IDownload[];
    end: string;
    package: string;
    start: string;
}

@Injectable()
export class NativeFetchService {
    constructor() { }

    getData() {
        return fetch(serviceUrl)
            .then((response: Response) => response.json())
            .then((response: IDownloads) => response.downloads)
            .catch(this._errorHandler);
    }
    _errorHandler(error: any) {
        console.log(error);
    }
}
