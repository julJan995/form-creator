import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  firstTabContent = 'This is the content of the first tab.';
  secondTabContent = 'Here is the content for the second tab.';
  thirdTabContent = 'And this is the content of the third tab.';
}
