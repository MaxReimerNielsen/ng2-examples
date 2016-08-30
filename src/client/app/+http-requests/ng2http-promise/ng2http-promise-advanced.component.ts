import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PromiseService } from './ng2http-promise.service';

@Component({
  moduleId: module.id,
  selector: 'ng2http-promise-advanced',
  templateUrl: 'ng2http-promise-advanced.component.html',
})

export class Ng2HttpPromiseAdvancedComponent implements OnInit {
  constructor(private _service: PromiseService) { }

  data: any;

  ngOnInit() {
    this.setData();
  }

  setData() {
    this._service.getData()
      .then((downloads) => {
        this.data = downloads.map((download: any, index: number) => {
          download.id = index;

          return download;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
