import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { distinctUntilChanged, fromEvent, Subscription, throttleTime, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})

export class HeaderComponent implements OnInit, OnDestroy{
  scrolled = false;
  menuOpen = false;
  private scroller!: Subscription

  ngOnInit(){
    this.scroller = fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => window.pageYOffset > 50),

      distinctUntilChanged()
    ).subscribe(isScrolled => {
      this.scrolled = isScrolled;
    })
  }

  ngOnDestroy(){
    this.scroller.unsubscribe()
  }

  toggleMenu(){
     this.menuOpen = !this.menuOpen
  }

}
                      