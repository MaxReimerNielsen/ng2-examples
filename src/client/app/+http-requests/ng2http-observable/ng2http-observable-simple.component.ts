import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ObservableService } from './ng2http-observable.service';

@Component({
  moduleId: module.id,
  selector: 'ng2http-observable-simple',
  templateUrl: 'ng2http-observable-simple.component.html',
})

export class Ng2HttpObservableSimpleComponent implements OnInit {
  constructor(private _service: ObservableService) { }

  data: any;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data = this._service.getData()
      .catch((error) => {
        console.log(error);

        return Observable.of(error);
      });
  }
}
