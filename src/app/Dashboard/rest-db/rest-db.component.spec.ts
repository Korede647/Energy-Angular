import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDBComponent } from './rest-db.component';

describe('RestDBComponent', () => {
  let component: RestDBComponent;
  let fixture: ComponentFixture<RestDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
