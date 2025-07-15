import { Component, Input  } from '@angular/core';
import { GENRE_MAP } from 'src/app/constants/genres';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
 @Input() movie: any;
  hasError = false;

  get posterUrl(): string {
    if (this.hasError || !this.movie.poster_path) {
      return 'https://via.placeholder.com/500x750?text=No+Image';
    }
    return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }

  useFallback(): void {
    this.hasError = true;
  }

  get quality(): string {
    const vote = this.movie.vote_average;
    if (vote > 7.5) return '1080p';
    if (vote > 6.0) return '720p';
    return '480p';
  }

   get mediaType(): string {
    return this.movie.media_type === 'tv' ? 'TV' : 'Movie';
  }
  
  get language(): string {
    return this.movie.original_language?.toUpperCase() || 'N/A';
  }

  get genres(): string[] {
    return (this.movie.genre_ids || [])
      .map((id: number) => GENRE_MAP[id])
      .filter(Boolean)
      .slice(0, 2); // show top 2 genres
  }

  
}
