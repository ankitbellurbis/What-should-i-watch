import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingComponent } from './landing.component';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let mockMovieService: any;

  beforeEach(() => {
    mockMovieService = {
      getTrendingMovies: jasmine
        .createSpy()
        .and.returnValue(of({ results: [{ id: 1 }] })),
      searchMovies: jasmine
        .createSpy()
        .and.returnValue(of({ results: [{ id: 2 }] })),
    };

    TestBed.configureTestingModule({
      declarations: [LandingComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // skip child component errors
    });

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load trending movies', () => {
    expect(component.trending.length).toBeGreaterThan(0);
    expect(mockMovieService.getTrendingMovies).toHaveBeenCalled();
  });

  it('should load feel good movies', () => {
    expect(component.feelGood.length).toBeGreaterThan(0);
  });
});
