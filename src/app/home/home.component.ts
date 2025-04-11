import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core"
import { HeaderComponent } from '../components/header/header.component';
import { heroBolt, heroGlobeEuropeAfrica } from "@ng-icons/heroicons/outline"
import { heroStarSolid } from "@ng-icons/heroicons/solid"
import { matUpcomingOutline, matEnergySavingsLeafOutline } from "@ng-icons/material-icons/outline"
import { letsLightning } from "@ng-icons/lets-icons/regular"
import { letsLightningDuotone } from "@ng-icons/lets-icons/duotone"
import { hugeLocation03 } from "@ng-icons/huge-icons"
import { phosphorGlobeHemisphereWestThin, phosphorChartLineUpThin } from "@ng-icons/phosphor-icons/thin"


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NgIcon],
  viewProviders: [provideIcons({
    heroBolt,
    matUpcomingOutline,
    letsLightning,
    letsLightningDuotone,
    hugeLocation03,
    matEnergySavingsLeafOutline,
    phosphorGlobeHemisphereWestThin,
    phosphorChartLineUpThin,
    heroStarSolid
  })],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css"
})
export class HomeComponent {

}
