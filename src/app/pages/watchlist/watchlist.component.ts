import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlist: any[] = [];

  ngOnInit(): void {
    this.loadWatchlist();
  }

  loadWatchlist() {
    this.watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
  }
}
