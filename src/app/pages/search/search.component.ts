import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query = '';
  movies: any[] = [];
  actors: any[] = [];
  loading = false;
  noResults = false;

  constructor(private movieService: MovieService) {}

  search() {
    if (!this.query.trim()) return;

    this.loading = true;
    this.noResults = false;
    this.movies = [];
    this.actors = [];

    this.movieService.searchMovies(this.query).subscribe((res: any) => {
      this.movies = res.results || [];

      this.movieService.searchActors(this.query).subscribe((res2: any) => {
        this.actors = res2.results || [];

        this.noResults = this.movies.length === 0 && this.actors.length === 0;
        this.loading = false;
      });
    });
  }
}
