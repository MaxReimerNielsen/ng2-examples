import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DraggingComponent,
  DragulaComponent,
  Ng2DndComponent
} from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [
      DraggingComponent,
      DragulaComponent,
      Ng2DndComponent
    ],
    exports: [DraggingComponent],
    providers: [],
})

export class DraggingModule { }