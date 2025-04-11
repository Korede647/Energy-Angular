import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    // HeaderComponent, CommonModule
  ],
  template: `
   <!-- <div class="flexDiv" [ngStyle]="{'background-image': 'url(' + backgroundImage + ')'}"> -->
  <!-- <app-header/> -->
  <!-- <div class = "content"> -->
  <router-outlet></router-outlet>
<!-- </div> -->
<!-- </div> -->

  `,
  styles: [``],
})
export class AppComponent {
  // backgroundImage = '/Energy%20Turbine.jpeg';

  // private backgrounds: { [key: string]: string} = {
  //   '/': '/Energy%20Turbine.jpeg'
  // };

  // constructor(private router: Router){}
  //   ngOnInit(): void {
  //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //     //Add 'implements OnInit' to the class.
  //     this.router.events.subscribe((event) => {
  //        if(event instanceof NavigationEnd){
  //         this.backgroundImage = this.backgrounds[event.url] || '/Energy%20Turbine.jpeg'
  //        }
  //     })
  //   }
  }


