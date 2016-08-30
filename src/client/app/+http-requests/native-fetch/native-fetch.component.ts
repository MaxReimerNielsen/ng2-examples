import { Component, OnInit } from '@angular/core';

import { NativeFetchService } from './native-fetch.service';

@Component({
  moduleId: module.id,
  selector: 'native-fetch',
  templateUrl: 'native-fetch.component.html',
})

export class NativeFetchComponent implements OnInit {
  constructor(private _service: NativeFetchService) { }

  data: any;

  ngOnInit() {
    this.setData();
  }

  setData() {
    this._service.getData()
      .then((downloads:Object[]) => {
        this.data = downloads.map((download: any, index: number) => {
          download.id = index;

          return download;
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
