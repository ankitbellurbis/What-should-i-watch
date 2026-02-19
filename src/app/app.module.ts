import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { WatchlistButtonComponent } from './component/watchlist-button/watchlist-button.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { FooterComponent } from './component/footer/footer.component';
import { TrendingCarouselComponent } from './component/trending-carousel/trending-carousel.component';
import { CompactMovieCardComponent } from './component/compact-movie-card/compact-movie-card.component';
import { ArcReactorComponent } from './component/arc-reactor/arc-reactor.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    NavbarComponent,
    WatchlistButtonComponent,
    LandingComponent,
    DiscoverComponent,
    SearchComponent,
    MovieDetailComponent,
    WatchlistComponent,
    FooterComponent,
    TrendingCarouselComponent,
    CompactMovieCardComponent,
    ArcReactorComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
