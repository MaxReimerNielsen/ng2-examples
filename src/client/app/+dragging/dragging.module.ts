import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DraggingComponent,
  DragulaComponent
} from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [
      DraggingComponent,
      DragulaComponent
    ],
    exports: [DraggingComponent],
    providers: [],
})

export class DraggingModule { }