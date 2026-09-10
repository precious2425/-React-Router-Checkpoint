import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <div className="not-found">
        <h1>Movie not found</h1>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="logo">MOVIE<span>HUB</span></Link>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main className="details-page">
        <Link to="/" className="back-link">← Back to Home</Link>

        <section className="details">
          <div className="details-poster">
            <img src={movie.poster} alt={movie.title} />
          </div>

          <div className="details-content">
            <p className="eyebrow">MOVIE DETAILS</p>
            <h1>{movie.title}</h1>
            <div className="details-rating">★ {movie.rating} / 10</div>

            <h2>Description</h2>
            <p className="description">{movie.description}</p>

            <a
              href="#trailer"
              className="watch-button"
            >
              Watch Trailer ↓
            </a>
          </div>
        </section>

        <section className="trailer-section" id="trailer">
          <h2>Trailer</h2>
          <div className="video-container">
            <iframe
              src={movie.trailer}
              title={`${movie.title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer>© 2026 MovieHub — React Router Checkpoint</footer>
    </div>
  );
}

export default MovieDetails;