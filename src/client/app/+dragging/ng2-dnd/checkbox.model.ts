import { BaseComponent } from './index';

export class CheckBox extends BaseComponent {
  constructor(
    id: number,
    name: string,
    public isChecked: boolean,
    public label: string) {
    super(id, name);
  }
}