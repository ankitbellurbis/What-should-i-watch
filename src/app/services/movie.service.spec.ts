import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from '../../environments/environment';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP calls
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call searchMovies and return results', () => {
    const dummyResponse = {
      results: [{ title: 'Test Movie', id: 1 }]
    };

    service.searchMovies('test').subscribe(res => {
      expect(res.results.length).toBe(1);
      expect(res.results[0].title).toBe('Test Movie');
    });

    const req = httpMock.expectOne(
      `${service['apiUrl']}/search/movie?query=test&api_key=${environment.tmdbApiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should call getMovieDetails and return movie detail', () => {
    const dummyMovie = { id: 1, title: 'Sample Movie' };

    service.getMovieDetails('1').subscribe(res => {
      expect(res.title).toBe('Sample Movie');
    });

    const req = httpMock.expectOne(
      `${service['apiUrl']}/movie/1?api_key=${environment.tmdbApiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovie);
  });
});
