import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ValidationHelper } from '../../../helpers/validation.helper';

@Component({
  selector: 'app-form-title-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form-title-input.component.html',
  styleUrl: './form-title-input.component.scss'
})
export class FormTitleInputComponent {
  formName: string = 'Formularz bez nazwy';
  defaultFormName: string = 'Formularz bez nazwy';

  updateFormName(value: string) {
    this.formName = ValidationHelper.isEmptyValue(value) ? this.defaultFormName : value;
  }
  
  // TO DO wysylanie na backend
  saveFormName() {
    const nameToSave = this.formName || this.defaultFormName;
    console.log('Wysyłam na backend:', nameToSave);
    
    // this.http.post('apiUrl', { name: nameToSave }).subscribe(
    //   response => console.log('Zapisano!', response),
    //   error => console.error('Błąd podczas zapisu', error)
    // );
  }
}
