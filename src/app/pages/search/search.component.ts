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
  loading = false;

  constructor(private movieService: MovieService) {}

  search() {
    if (!this.query.trim()) return;

    this.loading = true;
    this.movieService.searchMovies(this.query).subscribe((res:any) => {
      this.movies = res.results || [];
      this.loading = false;
    });
  }

}
