import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpRequestsComponent,
  NativeFetchComponent,
  Ng2HttpObservableAdvancedComponent,
  Ng2HttpObservableSimpleComponent,
  Ng2HttpPromiseAdvancedComponent,
  Ng2HttpPromiseSimpleComponent,
  NativeFetchService,
  ObservableService,
  PromiseService
} from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [
      HttpRequestsComponent,
      NativeFetchComponent,
      Ng2HttpObservableAdvancedComponent,
      Ng2HttpObservableSimpleComponent,
      Ng2HttpPromiseAdvancedComponent,
      Ng2HttpPromiseSimpleComponent,
    ],
    exports: [HttpRequestsComponent],
    providers: [
      NativeFetchService,
      ObservableService,
      PromiseService
    ],
})

export class HttpRequestsModule { }