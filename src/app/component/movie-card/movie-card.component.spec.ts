import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WatchlistButtonComponent } from '../watchlist-button/watchlist-button.component';
import { By } from '@angular/platform-browser';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  const mockMovie = {
    id: 101,
    title: 'Interstellar',
    poster_path: '/test.jpg',
    vote_average: 8.5,
    release_date: '2014-11-07',
    media_type: 'movie',
    original_language: 'en',
    genre_ids: [28, 12]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent, WatchlistButtonComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = mockMovie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct poster URL', () => {
    expect(component.posterUrl).toContain('/test.jpg');
  });

  it('should return fallback image if useFallback is called', () => {
    component.useFallback();
    expect(component.posterUrl).toContain('placeholder');
  });

  it('should return correct quality label', () => {
    expect(component.quality).toBe('1080p');
  });

  it('should display movie title', () => {
    const title = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(title.textContent).toContain('Interstellar');
  });

  it('should show media type badge', () => {
    const badge = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(badge.textContent).toContain('1080p');
  });
});
