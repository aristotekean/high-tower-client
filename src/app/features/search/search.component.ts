import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils/utils.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // Declare a form
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public utilsService: UtilsService,
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
        Validators.minLength(10),
        Validators.pattern(/^[a-zA-Z ]+$/)]],
    });
  };

  saveUser(event: any) {
    console.log(this.form.value);
  }

}
