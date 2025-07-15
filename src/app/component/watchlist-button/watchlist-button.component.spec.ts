import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchlistButtonComponent } from './watchlist-button.component';
import { By } from '@angular/platform-browser';
import { MovieDetailComponent } from 'src/app/pages/movie-detail/movie-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WatchlistButtonComponent', () => {
  let component: WatchlistButtonComponent;
  let fixture: ComponentFixture<WatchlistButtonComponent>;

  const mockMovie = { id: 1, title: 'Test Movie' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailComponent, WatchlistButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(WatchlistButtonComponent);
    component = fixture.componentInstance;
    component.movie = mockMovie;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add movie to watchlist when toggled on', () => {
    component.toggleWatchlist();
    const list = JSON.parse(localStorage.getItem('watchlist') || '[]');
    expect(list.length).toBe(1);
    expect(component.isInWatchlist).toBeTrue();
  });

  it('should remove movie from watchlist when toggled off', () => {
    component.toggleWatchlist(); // add
    component.toggleWatchlist(); // remove
    const list = JSON.parse(localStorage.getItem('watchlist') || '[]');
    expect(list.length).toBe(0);
    expect(component.isInWatchlist).toBeFalse();
  });

  it('should render correct icon class', () => {
    const icon = fixture.debugElement.query(By.css('i'));
    expect(icon.classes['bi-bookmark']).toBeTrue();

    component.toggleWatchlist();
    fixture.detectChanges();

    expect(icon.classes['bi-bookmark-fill']).toBeTrue();
  });
});
