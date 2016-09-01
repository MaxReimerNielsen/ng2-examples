import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DraggingComponent
} from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [
      DraggingComponent
    ],
    exports: [DraggingComponent],
    providers: [],
})

export class DraggingModule { }