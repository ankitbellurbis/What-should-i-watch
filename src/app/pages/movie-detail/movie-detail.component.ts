import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  loading = true;
  cast: any[] = [];
  director: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      this.movieService.getMovieDetails(movieId).subscribe((res: any) => {
        this.movie = res;
        this.loading = false;
      });

      this.movieService.getMovieCredits(+movieId).subscribe((res: any) => {
        this.cast = res.cast.slice(0, 6); // top 6 cast members
        const directorObj = res.crew.find((person: any) => person.job === 'Director');
        this.director = directorObj?.name || 'N/A';
      });
    }
  }

  get posterUrl() {
    return this.movie?.poster_path
      ? 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
      : 'https://via.placeholder.com/500x750?text=No+Image';
  }
}
