import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeLocation03 } from '@ng-icons/huge-icons';
import { letsLightningDuotone } from '@ng-icons/lets-icons/duotone';
import { letsLightning } from '@ng-icons/lets-icons/regular';
import { matUpcomingOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-why-us',
  imports: [
    NgIcon
  ],
  viewProviders:[provideIcons({
    matUpcomingOutline,
    letsLightning,
    letsLightningDuotone,
    hugeLocation03
  })],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {

}
