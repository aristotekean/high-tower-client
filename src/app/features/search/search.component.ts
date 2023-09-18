import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils/utils.service';
import { UsersService } from './services/users.service';
import { User } from './models/users.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  users: User[] = [];

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
        next: r => this.users = r

      }
    );
  }

}
