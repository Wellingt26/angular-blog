import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card-component-responsive.css',
  ],
})
export class BigCardComponent {
  @Input()
  id: string = '0';
  @Input()
  cardPhoto: string =
    'https://www.chocolatebayou.org/wp-content/uploads/No-Image-Person-2048x2048.jpeg';

  @Input()
  cardTitle: string = 'Digite o Titulo';

  @Input()
  cardDescription: string = 'Digite a descrição';
}
