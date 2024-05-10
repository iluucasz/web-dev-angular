import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-title-section',
   standalone: true,
   imports: [],
   templateUrl: './title-section.component.html'
})
export class TitleSectionComponent {
   @Input() title!: string;
}
