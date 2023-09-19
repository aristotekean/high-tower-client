import { Component, Input } from '@angular/core';
import { User } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() user!: User;

  constructor(public usersService: UsersService
  ) { }

  addToFav(user: User) {
    this.usersService.addToFav(user);
  }

}
