import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card-component.responsive.css',
  ],
})
export class SmallCardComponent {
  @Input()
  id: string = '0';

  @Input()
  cardDate: string = '';

  @Input()
  cardPhoto: string =
    'https://www.chocolatebayou.org/wp-content/uploads/No-Image-Person-2048x2048.jpeg';

  @Input()
  cardDescription: string = 'Digite a descrição';
}
