import { Component } from '@angular/core';
import { HeroComponent } from '../../components/sections/hero/hero.component';
import { CardComponent } from '../../components/sections/card/card.component';
import { AboutComponent } from '../../components/sections/about/about.component';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [ HeroComponent, CardComponent, AboutComponent ],
   templateUrl: './home.component.html'
})
export class HomeComponent {}
