import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  loading = true;
  cast: any[] = [];
  director: string = '';
  movieId: any;
  trailerKey: string | null = null;
  similarMovies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.movieService
          .getMovieDetails(this.movieId)
          .subscribe((res: any) => {
            this.movie = res;
            this.loading = false;
          });

        this.movieService
          .getMovieCredits(+this.movieId)
          .subscribe((res: any) => {
            this.cast = res.cast.slice(0, 6); // top 6 cast members
            const directorObj = res.crew.find(
              (person: any) => person.job === 'Director'
            );
            this.director = directorObj?.name || 'N/A';
          });

        this.loadMovieVideos();
        this.loadSimilarMovies();
      }
    });
  }

  get posterUrl() {
    return this.movie?.poster_path
      ? 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
      : 'https://via.placeholder.com/500x750?text=No+Image';
  }

  loadMovieVideos() {
    this.movieService.getMovieVideos(this.movieId).subscribe((data: any) => {
      const trailer = data.results.find(
        (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
      );
      this.trailerKey = trailer ? trailer.key : null;
    });
  }

  loadSimilarMovies() {
    this.movieService.getSimilarMovies(this.movieId).subscribe((data: any) => {
      this.similarMovies = data.results;
    });
  }
}
