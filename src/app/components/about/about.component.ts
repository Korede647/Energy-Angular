import { Component } from '@angular/core';
import { bootstrapCheck2Circle } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBolt } from '@ng-icons/heroicons/outline'
import { letsTimeProgress } from '@ng-icons/lets-icons/regular';
import { matAutorenewOutline, matBoltOutline, matWarningAmberOutline } from '@ng-icons/material-icons/outline';
import { phosphorSpeedometer, phosphorChartScatter, phosphorRecycle } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-about',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({
    heroBolt,
    matWarningAmberOutline,
    letsTimeProgress,
    bootstrapCheck2Circle,
    matBoltOutline,
    phosphorSpeedometer,
    phosphorChartScatter,
    phosphorRecycle,
    matAutorenewOutline
  })],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
