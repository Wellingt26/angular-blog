import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  cardDate: string = '';

  @Input()
  cardPhoto: string =
    'https://www.chocolatebayou.org/wp-content/uploads/No-Image-Person-2048x2048.jpeg';

  @Input()
  cardDescription: string = 'Digite a descrição';
}
