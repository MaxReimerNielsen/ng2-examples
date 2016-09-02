import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {DND_PROVIDERS, DND_DIRECTIVES, DragDropData} from 'ng2-dnd';
import { FORM_DIRECTIVES } from '@angular/forms';

class BaseComponenent {
  offsetX: number = 0;
  offsetY: number = 0;

  constructor(
    public id: number,
    public name: string) {
  }
}

class CheckBox extends BaseComponenent {
  constructor(
    id: number,
    name: string,
    public isChecked: boolean,
    public label: string) {
    super(id, name);
  }
}

class TextBox extends BaseComponenent {
  constructor(
    id: number,
    name: string,
    public placeholder: string) {
    super(id, name);
  }
}

class SubmitButton extends BaseComponenent {
  constructor(
    id: number,
    name: string,
    public text: string) {
    super(id, name);
  }
}


@Component({
  moduleId: module.id,
  selector: 'ng2-dnd',
  templateUrl: 'ng2-dnd.component.html',
  styleUrls: ['ng2-dnd.component.css'],
  directives: [NgStyle, DND_DIRECTIVES, FORM_DIRECTIVES],
  providers: [DND_PROVIDERS]
})

export class Ng2DndComponent {
  canvasItems: Array<BaseComponenent> = [];
  formItems: Array<BaseComponenent> = [
    new CheckBox(0, 'CheckBox', true, 'Lorem Ipsum'),
    new BaseComponenent(0, 'RadioButton'),
    new TextBox(0, 'TextBox', 'Placeholder text'),
    new SubmitButton(0, 'SubmitButton', 'Submit'),
  ];
  activeItem: BaseComponenent;

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
  setOffset(item: BaseComponenent) {
    const _style = {
      'left': item.offsetX + 'px',
      'top': item.offsetY + 'px',
      'position': 'absolute'
    };

    return _style;
  }
  setActiveItem(item?: BaseComponenent) {
    this.activeItem = item;
  }
  onSubmit(form: any) {
    Object.assign(this.activeItem, form.value);
  }
  deleteCanvasItem(item: BaseComponenent) {
    this.canvasItems.splice(this.canvasItems.indexOf(item), 1);
    this.setActiveItem();
  }
  toggleActiveCanvas(target:HTMLElement, force:boolean) {
    target.classList.toggle('active', force)
  }
  onDragLeave($event:DragDropData) {
    this.toggleActiveCanvas($event.mouseEvent.target as HTMLElement, false);
  }
  onDragEnter($event:DragDropData) {
    this.toggleActiveCanvas($event.mouseEvent.target as HTMLElement, true);
  }
}