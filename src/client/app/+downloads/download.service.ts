import { Injectable } from '@angular/core';

export const NpmModules = ['jquery','react','angular','vue','ember-cli','aurelia-cli', 'preact', 'backbone', 'knockout'];
const serviceUrl = `https://api.npmjs.org/downloads/range/last-month/${NpmModules.sort().join(',')}`;

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
export class DownloadService {
    constructor() { }

    getData() {
        return fetch(serviceUrl)
            .then((response: Response) => response.json())
            .then((response: IDownloads) => response)
            .catch(this._errorHandler);
    }
    _errorHandler(error: any) {
        console.log(error);
    }
}
