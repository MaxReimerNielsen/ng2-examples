import { Component } from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  moduleId: module.id,
  selector: 'dragula',
  templateUrl: 'dragula.component.html',
  styleUrls: ['dragula.component.css'],
  directives: [Dragula],
  viewProviders: [DragulaService],
})

export class DragulaComponent {
  constructor(private _dragulaService: DragulaService) {
    _dragulaService.setOptions('first-bag', {
      accepts(el:any, target:any, source:any, sibling:any) {
        return (target.classList.contains('container-to'));
      },
      copy: true,
    });
  }
}