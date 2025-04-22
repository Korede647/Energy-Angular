import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftCircleFill, bootstrapArrowRightCircleFill } from "@ng-icons/bootstrap-icons"
import { phosphorArrowCircleLeftLight, phosphorArrowCircleRightLight } from "@ng-icons/phosphor-icons/light"

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [
    CommonModule,
    NgIcon
  ],
  viewProviders: [provideIcons({
    bootstrapArrowLeftCircleFill,
    bootstrapArrowRightCircleFill,
    phosphorArrowCircleLeftLight,
    phosphorArrowCircleRightLight
  })],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit{
  @Input() testimonials: Testimonial[] = []

  @Input() showNav = true;

  @Input() startIndex = 0;

  @Input() evenGradient = 'to bottom, rgb(251, 251, 248),rgb(246, 208, 92)'

  @Input() oddGradient = 'to bottom, #FF5F6D,rgb(251, 251, 248)'

  current = 0;
  readonly visible = 2;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.current = this.startIndex;
    this.updateSlideState();
  }

  prev() {
    if (!this.testimonials.length) return;
    const total = this.testimonials.length;
    // wrap backwards
    this.current = (this.current - 1 + total) % total;
    this.updateSlideState();
  }

  next() {
    if (!this.testimonials.length) return;
    const total = this.testimonials.length;
    // if sliding would leave less than visible slides, wrap to start
    if (this.current >= total - this.visible) {
      this.current = 0;
    } else {
      this.current++;
    }
    this.updateSlideState();
  }

  trackByIdx(i: number) {
    return i;
  }

  private updateSlideState() {
    const slidesEl = this.el.nativeElement.querySelector('.slides');
    slidesEl.style.setProperty('--current', this.current.toString());
    // gradient vars (optional)
    const isEven = this.current % 2 === 0;
    const evenParts = this.evenGradient.split(',').map(s => s.trim());
    const oddParts = this.oddGradient.split(',').map(s => s.trim());
    slidesEl.style.setProperty(
      '--active-gradient-start',
      isEven ? evenParts[1] : oddParts[1]
    );
    slidesEl.style.setProperty(
      '--active-gradient-end',
      isEven ? evenParts[2] : oddParts[2]
    );
  }
  
}
