import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core"
import { HeaderComponent } from '../components/header/header.component';
import { heroStarSolid } from "@ng-icons/heroicons/solid"
import { Testimonial, TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { WhyUsComponent } from '../components/why-us/why-us.component';
import { RealTimeComponent } from '../components/real-time/real-time.component';
import { HowItWorksComponent } from "../components/how-it-works/how-it-works.component";
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    NgIcon,
    AboutComponent,
    TestimonialsComponent,
    WhyUsComponent,
    RealTimeComponent,
    HowItWorksComponent,
    ContactComponent,
    FooterComponent
],
  viewProviders: [provideIcons({
    heroStarSolid
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
