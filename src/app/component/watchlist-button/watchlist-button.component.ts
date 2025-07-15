import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist-button',
  templateUrl: './watchlist-button.component.html',
  styleUrls: ['./watchlist-button.component.scss']
})
export class WatchlistButtonComponent implements OnInit {
  @Input() movie: any;
  isInWatchlist = false;

  ngOnInit(): void {
    const storedList = JSON.parse(localStorage.getItem('watchlist') || '[]');
    this.isInWatchlist = storedList.some((m: any) => m.id === this.movie.id);
  }

  toggleWatchlist(): void {
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

    if (this.isInWatchlist) {
      watchlist = watchlist.filter((m: any) => m.id !== this.movie.id);
    } else {
      watchlist.push(this.movie);
    }

    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    this.isInWatchlist = !this.isInWatchlist;
  }
}
