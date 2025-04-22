import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matUpcomingOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-how-it-works',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({
    matUpcomingOutline
  })],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {

}
