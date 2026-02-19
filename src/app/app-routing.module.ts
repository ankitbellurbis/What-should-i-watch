import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { TechAnimationComponent } from './pages/tech-animation/tech-animation.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'discover/:mood', component: DiscoverComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'tech-animation', component: TechAnimationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
