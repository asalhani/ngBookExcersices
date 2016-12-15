/*
Noteworthy points, typical of Routing Modules:

-Pulls the routes into a variable. You might export it in future and it clarifies
 the Routing Module pattern.

-Adds RouterModule.forRoot(routes) to imports.

-Adds RouterModule to exports so that the components in the companion module 
have access to Router declarables such as RouterLink and RouterOutlet.

-No declarations! Declarations are the responsibility of the companion module.

-Adds module providers for guard services if you have them; there are none in this example.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailsComponent } from './hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailsComponent },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }
