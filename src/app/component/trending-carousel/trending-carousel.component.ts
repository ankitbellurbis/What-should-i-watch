import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.scss'],
})
export class TrendingCarouselComponent implements AfterViewInit {
  @Input() movies: any[] = [];
  private timeoutId: any;
  private carouselInstance: any;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.startCarouselManual();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.carouselInstance) {
      this.carouselInstance.dispose?.(); // dispose if available
    }
  }

  startCarouselManual() {
    this.timeoutId = setTimeout(() => {
      var myCarousel = document.querySelector('#carouselTrending');
      this.carouselInstance = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true,
        touch: false,
        keyboard: false,
      });
    }, 0);
  }

  goToDetail(id: number) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/movie', id]);
    // navigate in parent context (router used in parent)
  }

  get backdropUrl(): (movie: any) => string {
    return (movie) =>
      movie.backdrop_path
        ? 'https://image.tmdb.org/t/p/original' + movie.backdrop_path
        : 'https://via.placeholder.com/1280x720?text=No+Image';
  }
}
