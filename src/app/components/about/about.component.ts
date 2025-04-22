import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBolt } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-about',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({
    heroBolt
  })],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
