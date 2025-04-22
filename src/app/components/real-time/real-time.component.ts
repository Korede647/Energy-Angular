import { Component } from '@angular/core';
import { bootstrapCheck2Circle } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { letsTimeProgress } from '@ng-icons/lets-icons/regular';
import { matEnergySavingsLeafOutline, matWarningAmberOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-real-time',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({
     matEnergySavingsLeafOutline,
     bootstrapCheck2Circle,
     letsTimeProgress,
     matWarningAmberOutline
  })],
  templateUrl: './real-time.component.html',
  styleUrl: './real-time.component.css'
})
export class RealTimeComponent {

}
