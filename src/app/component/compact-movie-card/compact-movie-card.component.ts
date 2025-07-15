import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GENRE_MAP } from '../../constants/genres'; // you define this in a separate file

@Component({
  selector: 'app-compact-movie-card',
  templateUrl: './compact-movie-card.component.html',
  styleUrls: ['./compact-movie-card.component.scss']
})
export class CompactMovieCardComponent {
  @Input() movie: any;

  constructor(private router: Router) {}

  get posterUrl(): string {
    return this.movie.poster_path
      ? 'https://image.tmdb.org/t/p/w200' + this.movie.poster_path
      : 'https://via.placeholder.com/100x150?text=No+Image';
  }

  getLanguage(code: string): string {
    return code?.toUpperCase() || 'N/A';
  }

  getMediaType(): string {
    const type = this.movie.media_type || 'movie';
    return type === 'tv' ? 'TV' : 'Movie';
  }

  goToDetail(): void {
    this.router.navigate(['/movie', this.movie.id]);
  }

  getGenres(genreIds: number[]): string[] {
    return genreIds.map((id) => GENRE_MAP[id]).filter(Boolean);
  }
}
