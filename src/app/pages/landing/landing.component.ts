import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  trending: any[] = [];
  feelGood: any[] = [];
  actionFix: any[] = [];
  mindBenders: any[] = [];
  dramaPicks: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((res) => {
      this.trending = res.results?.slice(0, 7) || [];
    });

    this.movieService.searchMovies('comedy').subscribe((res) => (this.feelGood = res.results));
    this.movieService.searchMovies('action').subscribe((res) => (this.actionFix = res.results));
    this.movieService.searchMovies('thriller').subscribe((res) => (this.mindBenders = res.results));
    this.movieService.searchMovies('drama').subscribe((res) => (this.dramaPicks = res.results));
  }
}
