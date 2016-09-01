import { Component } from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  moduleId: module.id,
  selector: 'dragging',
  templateUrl: 'dragging.component.html',
  styleUrls: ['dragging.component.css'],
  directives: [Dragula],
  viewProviders: [DragulaService],
})

export class DraggingComponent {

}