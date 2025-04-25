import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: TestimonialsComponent
        // dashboard
    },
    {
        path: '**',
        component: HeaderComponent
        // notfound page
    }
]
