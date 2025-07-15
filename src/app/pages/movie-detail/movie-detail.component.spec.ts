import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { WatchlistButtonComponent } from 'src/app/component/watchlist-button/watchlist-button.component';

import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let mockMovieService: any;

  beforeEach(() => {
    mockMovieService = {
      getMovieDetails: jasmine.createSpy().and.returnValue(of({
        id: 1,
        title: 'Test Movie',
        poster_path: null,
        release_date: '2020-01-01'
      })),
      getMovieCredits: jasmine.createSpy().and.returnValue(of({
        cast: [{ name: 'Actor A' }],
        crew: [{ name: 'Director X', job: 'Director' }]
      }))
    };

    TestBed.configureTestingModule({
      declarations: [MovieDetailComponent, WatchlistButtonComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MovieService, useValue: mockMovieService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }
        }
      ]
    });

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load movie details on init', () => {
    expect(component.movie.title).toBe('Test Movie');
    expect(component.loading).toBeFalse();
  });

  it('should load cast and director', () => {
    expect(component.cast.length).toBe(1);
    expect(component.director).toBe('Director X');
  });

  it('should return fallback image if no poster', () => {
    expect(component.posterUrl).toContain('placeholder');
  });
});
