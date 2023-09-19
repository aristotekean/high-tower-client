import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils/utils.service';
import { UsersService } from './services/users.service';
import { User } from './models/users.model';
import { TrendResponse } from './models/trends.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users: User[] = [];
  trends: TrendResponse[] = [];

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public utilsService: UtilsService,
    private usersService: UsersService
  ) {
    this.buildForm();
  };

  get usernameField() {
    return this.form?.get('username');
  };

  get usernameFieldDirty() {
    return this.usernameField?.dirty || this.usernameField?.touched;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z ]+$/)]],
    });
  };

  searchUser() {
    let data = this.form.value;
    this.usersService.getUsersByName(data).subscribe(
      {
        next: r => {
          this.users = r
          this.getTrends();
        }
      }
    );

    this.usersService.saveQuery(data).subscribe(
      {
        next: r => console.log(r)
      }
    )
  }

  addToFav(user: User) {
    this.usersService.addToFav(user);
  }

  getTrends() {
    this.usersService.getTrends().subscribe(
      {
        next: r => this.trends = r
      }
    );
  }

  ngOnInit(): void {
    this.getTrends()
  }
}
