import { BaseComponent } from './index';

export class TextBox extends BaseComponent {
  constructor(
    id: number,
    name: string,
    public placeholder: string) {
    super(id, name);
  }
}