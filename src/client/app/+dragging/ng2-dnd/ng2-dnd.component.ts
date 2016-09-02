import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {DND_PROVIDERS, DND_DIRECTIVES, DragDropData} from 'ng2-dnd';
import { FORM_DIRECTIVES } from '@angular/forms';
import {
  BaseComponent,
  CheckBox,
  RadioButton,
  SubmitButton,
  TextBox
} from './index';

@Component({
  moduleId: module.id,
  selector: 'ng2-dnd',
  templateUrl: 'ng2-dnd.component.html',
  styleUrls: ['ng2-dnd.component.css'],
  directives: [NgStyle, DND_DIRECTIVES, FORM_DIRECTIVES],
  providers: [DND_PROVIDERS]
})

export class Ng2DndComponent {
  canvasItems: Array<BaseComponent> = [];
  formItems: Array<BaseComponent> = [
    new CheckBox(0, 'CheckBox', true, 'Lorem Ipsum'),
    new RadioButton(0, 'RadioButton'),
    new TextBox(0, 'TextBox', 'Placeholder text'),
    new SubmitButton(0, 'SubmitButton', 'Submit'),
  ];
  activeItem: BaseComponent;

  transferDataSuccess($event: DragDropData) {
    const _dragData = $event.dragData;
    const _canvasItems = this.canvasItems;
    const {
      offsetX,
      offsetY
    } = $event.mouseEvent;

    this.toggleActiveCanvas($event.mouseEvent.target as HTMLElement, false);

    if (_canvasItems.indexOf(_dragData) !== -1) {
      _dragData.offsetX = offsetX;
      _dragData.offsetY = offsetY;

      return;
    }

    const _event = Object.assign({}, _dragData, {
      offsetX: offsetX,
      offsetY: offsetY,
    });

    _canvasItems.push(_event);
  }
  setOffset(item: BaseComponent) {
    const _style = {
      'left': item.offsetX + 'px',
      'top': item.offsetY + 'px',
      'position': 'absolute'
    };

    return _style;
  }
  setActiveItem(item?: BaseComponent) {
    this.activeItem = item;
  }
  onSubmit(form: any) {
    Object.assign(this.activeItem, form.value);
  }
  deleteCanvasItem(item: BaseComponent) {
    this.canvasItems.splice(this.canvasItems.indexOf(item), 1);
    this.setActiveItem();
  }
  toggleActiveCanvas(target:HTMLElement, force:boolean) {
    target.classList.toggle('active', force)
  }
  onDragLeave($event:DragDropData) {
    this.deleteCanvasItem($event.dragData);
    this.toggleActiveCanvas($event.mouseEvent.target as HTMLElement, false);
  }
  onDragEnter($event:DragDropData) {
    this.deleteCanvasItem($event.dragData);
    this.toggleActiveCanvas($event.mouseEvent.target as HTMLElement, true);
  }
}