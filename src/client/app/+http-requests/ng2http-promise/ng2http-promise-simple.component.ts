import { Component, OnInit } from '@angular/core';

import { PromiseService } from './ng2http-promise.service';

@Component({
  moduleId: module.id,
  selector: 'ng2http-promise-simple',
  templateUrl: 'ng2http-promise-simple.component.html',
})

export class Ng2HttpPromiseSimpleComponent implements OnInit {
  constructor(private _service: PromiseService) { }

  data: any;

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.data = this._service.getData()
      .catch((error) => {
        console.log(error);
      });
  }
}
