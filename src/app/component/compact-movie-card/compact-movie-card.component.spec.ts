import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactMovieCardComponent } from './compact-movie-card.component';

describe('CompactMovieCardComponent', () => {
  let component: CompactMovieCardComponent;
  let fixture: ComponentFixture<CompactMovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompactMovieCardComponent],
    });

    fixture = TestBed.createComponent(CompactMovieCardComponent);
    component = fixture.componentInstance;

    // Add this
    component.movie = {
      id: 1,
      title: 'Test Movie',
      poster_path: null,
      release_date: '2022-01-01',
      vote_average: 7.0,
      genre_ids: [28, 35],
      original_language: 'en',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
