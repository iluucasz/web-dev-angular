import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
   selector: 'app-card',
   standalone: true,
   imports: [ CommonModule ],
   templateUrl: './card.component.html'
})
export class CardComponent {
   userList = [
      {
         name: 'Pedro',
         photo: 'assets/devs/user1.jpg',
         description: 'Full-stack developer, I have a passion for technology and always looking to learn new things'
      },
      {
         name: 'Henrique',
         photo: 'assets/devs/user2.jpg',
         description: 'Mobile developer, I have a passion for technology and always looking to learn new things'
      },
      {
         name: 'Thiago',
         photo: 'assets/devs/user3.jpg',
         description: 'Front-end developer, I have a passion for technology and always looking to learn new things'
      },
      {
         name: 'Julio',
         photo: 'assets/devs/user4.jpg',
         description: 'back-end developer, I have a passion for technology and always looking to learn new things'
      }
   ];
}
