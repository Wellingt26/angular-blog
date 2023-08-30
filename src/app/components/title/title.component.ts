import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css', './title.component.responsive.css'],
})
export class TitleComponent {
  @Input()
  cardTitle: string = 'Titulo';
}
