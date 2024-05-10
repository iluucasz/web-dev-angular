import { Component } from '@angular/core';
import { TitleSectionComponent } from '../../components/sections/title-section/title-section.component';

@Component({
   selector: 'app-contact',
   standalone: true,
   imports: [ TitleSectionComponent ],
   templateUrl: './contact.component.html'
})
export class ContactComponent {
   title = 'Contact Us';
}
