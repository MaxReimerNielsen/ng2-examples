import { BaseComponent } from './index';

export class SubmitButton extends BaseComponent {
  constructor(
    id: number,
    name: string,
    public text: string) {
    super(id, name);
  }
}