import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import { useMovies } from "./useMovies";
import { Search } from "./Search";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { WatchedMoviesList } from "./WatchedMoviesList";
import { WatchedSummary } from "./WatchedSummary";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { Box } from "./Box";
import { NumResults } from "./NumResults";
import { NavBar } from "./NavBar";

// 2024 - 01 - 13

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const KEY = "8ea6d203";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/skald1311/film-vault">
        <img className="resize" src="./github logo.png" alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/hmd1311/">
        <img className="resize" src="./linkedin logo.png" alt="linkedin logo" />
      </a>
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
