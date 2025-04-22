import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core"
import { HeaderComponent } from '../components/header/header.component';
import { heroBolt, heroCheckBadge } from "@ng-icons/heroicons/outline"
import { heroStarSolid } from "@ng-icons/heroicons/solid"
import { matUpcomingOutline, matEnergySavingsLeafOutline, matWarningAmberOutline } from "@ng-icons/material-icons/outline"
import { letsLightning, letsTimeProgress } from "@ng-icons/lets-icons/regular"
import { letsLightningDuotone} from "@ng-icons/lets-icons/duotone"
import { matWarningAmberRound } from "@ng-icons/material-icons/round"
import { hugeLocation03 } from "@ng-icons/huge-icons"
import {bootstrapCheck2Circle } from "@ng-icons/bootstrap-icons"
import { phosphorGlobeHemisphereWestThin, phosphorChartLineUpThin } from "@ng-icons/phosphor-icons/thin"
import { Testimonial, TestimonialsComponent } from '../components/testimonials/testimonials.component';


@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent, 
    NgIcon,
    TestimonialsComponent
  ],
  viewProviders: [provideIcons({
    heroBolt,
    matUpcomingOutline,
    letsLightning,
    letsLightningDuotone,
    hugeLocation03,
    matEnergySavingsLeafOutline,
    phosphorGlobeHemisphereWestThin,
    phosphorChartLineUpThin,
    heroStarSolid,
    bootstrapCheck2Circle,
    letsTimeProgress,
    matWarningAmberOutline,
    matWarningAmberRound
  })],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css"
})
export class HomeComponent {
myTestimonialData: Testimonial[] = [
  {
    name: 'David Harper',
    role: 'CEO',
    rating: 5,
    text: 'Installing their model was the best decision we ever made. Our energy bills are now half of what they were!',
    avatarUrl: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Sarah Morgan',
    role: 'Manager',
    rating: 5,
    text: 'The security of the software is something I appreciate. No one would appreciate company data being leaked. Highly recommended!',
    avatarUrl: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Mike Thomas',
    role: 'Ass. Manager',
    rating: 5,
    text: 'Real-time predictions are almost instant with little to no delay. They basically show up in miliseconds. What are you waiting for? Use their Model already!!',
    avatarUrl: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Ava Christian',
    role: 'Project Manager',
    rating: 5,
    text: 'Their Model is a blessing to our Company. Now Our Energy costs are now half of wat they were because of the almost perfect energy predictions for our industrial environment.',
    avatarUrl: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Shay Reine',
    role: 'Manager',
    rating: 5,
    text: 'Nothing is Perfect, but I have to say, their model made me doubt that saying. And I am NOT easily impressed. Highly recommended!',
    avatarUrl: 'https://i.pravatar.cc/100?img=2',
  }
];

}
