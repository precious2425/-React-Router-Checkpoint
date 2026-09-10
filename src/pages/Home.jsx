import React from 'react';
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="logo">MOVIE<span>HUB</span></Link>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main className="home">
        <section className="hero">
          <div>
            <p className="eyebrow">WELCOME TO MOVIEHUB</p>
            <h1>Find your next<br /><span>favorite movie.</span></h1>
            <p className="hero-text">
              Explore our movie collection and click any movie to discover
              its description and watch its trailer.
            </p>
          </div>
        </section>

        <section className="movies-section">
          <div className="section-heading">
            <h2>Popular Movies</h2>
            <p>{movies.length} movies available</p>
          </div>

          <div className="movie-grid">
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
                <div className="poster-wrapper">
                  <img src={movie.poster} alt={movie.title} />
                  <div className="rating">★ {movie.rating}</div>
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>View details →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer>© 2026 MovieHub — React Router Checkpoint</footer>
    </div>
  );
}

export default Home;