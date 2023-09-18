import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public validationMessages = {

    // input name
    username: [
      { type: 'required', message: 'The username is required' },
      { type: 'minlength', message: 'The username must be more than 3 characters' },
      { type: 'pattern', message: 'The username format is invalid' }
    ],
  }


}
