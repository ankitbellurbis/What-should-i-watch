
# 🎬 What Should I Watch Tonight?

A movie discovery app built with **Angular 16**, **Bootstrap 5.3** that uses the **TMDB API** to let users explore, search, and save movies based on moods and preferences.

---

## 🌟 Features

- 🔥 Mood-based discovery: *Feel Good*, *Action Fix*, *Mind Benders*, and more
- 🔍 Search movies by title or actor
- 📋 View detailed movie info: title, poster, rating, language, genres, type, director & cast
- 📌 Add/Remove from Watchlist (stored via `localStorage`)
- ⚡ Fully responsive with Bootstrap 5 and Bootswatch Quartz theme
- 📊 Unit tests using Jasmine + Karma with >80% test coverage
- 🚀 Carousel for trending movies and category-wise display
- ✨ Animations, tooltips, badges, and custom icons

---

## 🛠️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/what-should-i-watch-tonight.git
cd what-should-i-watch-tonight

# Install dependencies
npm install

# Set your TMDB API key
# (Create a file named .env if using ngx-environment or store it in environment.ts)
# environment.ts
export const environment = {
  production: false,
  tmdbApiKey: 'your_tmdb_api_key'
};

# Start the dev server
ng serve
```

Access the app at: [http://localhost:4200](http://localhost:4200)

---

## 🧪 Running Unit Tests

```bash
ng test --code-coverage
```

Check coverage report at `/coverage/index.html`  
> Ensure components like `WatchlistButtonComponent`, `MovieCardComponent`, `MovieDetailComponent` etc. are properly tested.

---

## 🗂 Folder Structure

```
src/
├── app/
│   ├── components/
|   |   |-- compact-movie-card/
|   |   |-- footer/
│   │   ├── movie-card/
│   │   ├── navbar/
│   │   └── trending-carousel/
│   │   └── watchlist-button/
│   ├── constants/
│   ├── pages/
│   │   ├── landing/
│   │   ├── discover/
│   │   ├── movie-detail/
│   │   └── watchlist/
│   │   └── search/
│   ├── services/
│   ├── models/
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
└── environments/
```

---

## 🌐 API Used

- [TMDB API](https://developers.themoviedb.org/3)  
  Used for movie data, search, genre list, trending, etc.

---

## 👨‍💻 Tech Stack

- Angular 16
- Bootstrap 5.3 + Bootswatch Quartz
- TypeScript
- TMDB API
- Jasmine + Karma (Unit testing)
- HTML/CSS (SCSS)

---

## 🙌 Author

Made with ❤️ by [Ankit](https://github.com/your-username)  
© 2025 What Should I Watch Tonight?
