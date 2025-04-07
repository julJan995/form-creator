import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { FormTitleInputComponent } from './form-title-input/form-title-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UserComponent,
    FormTitleInputComponent,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
