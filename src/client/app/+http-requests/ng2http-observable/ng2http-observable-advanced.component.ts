import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ObservableService } from './ng2http-observable.service';

@Component({
  moduleId: module.id,
  selector: 'ng2http-observable-advanced',
  templateUrl: 'ng2http-observable-advanced.component.html',
})

export class Ng2HttpObservableAdvancedComponent implements OnInit {
  constructor(private _service: ObservableService) { }

  data: any;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._service.getData()
      .subscribe(
      (downloads) => {
        this.data = downloads.map((download: any, index: number) => {
          download.id = index;

          return download;
        });
      },
      (error) => {
        console.log(error);
      }
      );
  }
}
