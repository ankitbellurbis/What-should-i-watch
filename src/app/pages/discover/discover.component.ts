import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [
    trigger('fadeList', [
      transition(':enter', [
        query(
          '.movie-card-wrapper',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(
              100,
              animate(
                '600ms ease-out',
                style({ opacity: 1, transform: 'none' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class DiscoverComponent implements OnInit {
  mood: string = '';
  movies: any[] = [];
  loading = true;

  currentPage = 1;
  itemsPerPage = 8;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.mood = params['mood'];
      this.fetchMoodMovies(this.mood);
    });
  }

  fetchMoodMovies(mood: string) {
    const keywordMap: { [key: string]: string } = {
      'feel-good': 'comedy',
      'action-fix': 'action',
      'mind-benders': 'thriller',
    };

    const query = keywordMap[mood] || 'popular';

    this.loading = true;
    this.movieService.searchMovies(query).subscribe((res) => {
      this.movies = res.results || [];
      this.currentPage = 1;
      this.loading = false;
    });
  }

  formatMood(mood: string | null): string {
    return (
      mood?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || ''
    );
  }

  get pagedMovies(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.movies.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.movies.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
