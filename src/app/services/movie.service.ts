import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovies(query: string) {
    return this.http.get<any>(
      `${this.apiUrl}/search/movie?query=${query}&api_key=${environment.tmdbApiKey}`
    );
  }

  getMovieDetails(id: string) {
    return this.http.get<any>(
      `${this.apiUrl}/movie/${id}?api_key=${environment.tmdbApiKey}`
    );
  }

  getTrendingMovies() {
    return this.http.get<any>(
      `${this.apiUrl}/trending/movie/week?api_key=${environment.tmdbApiKey}`
    );
  }

  getMovieCredits(id: number) {
    return this.http.get<any>(
      `${this.apiUrl}/movie/${id}/credits?api_key=${environment.tmdbApiKey}`
    );
  }

  getMovieVideos(id: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${id}/videos?api_key=${environment.tmdbApiKey}`
    );
  }

  getSimilarMovies(id: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${id}/similar?api_key=${environment.tmdbApiKey}`
    );
  }

  // Add this method
  searchActors(query: string) {
    return this.http.get(
      `${this.apiUrl}/search/person?query=${query}&api_key=${environment.tmdbApiKey}`
    );
  }
}
