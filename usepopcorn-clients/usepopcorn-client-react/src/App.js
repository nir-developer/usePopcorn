import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },

  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//STRUCTURAL
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  //1) INJECT THE 3 CHILDREN OF NavBar
  //2) Inject
  return (
    <>
      <NavBar movies={movies}>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
//STRUCTURAL(COMPOSITION - INJECT THE 3 children of the NumResults injected )
function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

//PRESENTATIONAL
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

//STATEFULL
function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

//PRESENTATIONAL
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

//STRUCTURAL
function Main({ children }) {
  //const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);
  // const [isOpen1, setIsOpen1] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);

  ///DERIVED STATES!
  // const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // const avgUserRating = average(watched.map((movie) => movie.userRating));
  // const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
//////////////
//LIST BOX(LEFT)
///////////////
//STATEFULL
function Box({ children }) {
  // const [watched, setWatched] = useState(tempWatchedData);
  // const [isOpen1, setIsOpen1] = useState(true);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

// function WatchedBox() {
//   const [watched, setWatched] = useState(tempWatchedData);
//   // const [isOpen1, setIsOpen1] = useState(true);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedMoviesList watched={watched} />
//           <WatchedSummary watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }

//Reusable COMPONENT - REPLACED THE PREVIOUS 2 BOXES
// function Box() {
//   const [watched, setWatched] = useState(tempWatchedData);
//   // const [isOpen1, setIsOpen1] = useState(true);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedMoviesList watched={watched} />
//           <WatchedSummary watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }

//STATEFULL
function MoviesList({ movies }) {
  // const [movies, setMovies] = useState(tempMovieData);
  // console.log("inside MovieList - the movies");
  // console.log(movies);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

//PRESENTATIONAL
function Movie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

///////////////
//WATCHED BOX
///////////
//STATEFULL

//PRESENTATIONAL
function WatchedSummary({ watched }) {
  //DERIVED STATES BASED ON THE wathced prop
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
//PRESENTATIONAL
function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

/** ----SUMMARY----
 * ************************
 * USING COMPONENT  VS COMONENT COMPOSITION
 * ************************
 *
 * -------------------
 * USING COMPONENT:
 * --------------------
 * function Modal()
 * {
 *  return <div>
 *    <Success/>
 *  </div>
 * }
 *
 * ---------------
 * COMPONENT  COMPOSITION
 * ----------------
 *  Used When I want to :
 *        1)  Create Reusable component
 *        2) Create Layouts(by product)
 *        3) Fix prop drilling problem
 *  (Modal and Success are Tightly couple)
 * -------------
 * //INJECT
 * <Modal>
 *  <Success/>
 * </Modal>
 *
 * function Modal({children})
 * {
 *    return <div>{children}</div>
 * }
 *
 *
 * >>>>>>>>>>
 *  PROJECT : COMPOSITION IMPLEMENTATION: 
 * >>>>>>>>>>>>>>
 *    
 *   1. Compose the NavBar with the Logo, Search , and NumResults : 
 *      Solve the movies prop drilling of the movies:
 *     App => NavBar => NumResults
 *
 *  INJECT THE 3 CHILDREN OF THE NavBar to the NavBar Use the NumResults in the App by Injecting it  the NumResults
 *   USE THE movies prop where it is defined - in the App!@
 * 
 * 
 * return(
 * .....
 *  <NavBar movies={movies}>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
 * )
 *
 * 
 * 2. SOLVE THE movies PROP DRILLING :
 *     App => Main => ListBox => MoviesList 
 * 
 *  <App>
 *    <Main>
 *      <ListBox>
 *        <MoviesList movies={movies} />ß
 *      
 *      </ListBox>
 *    
 *    </Main>
 * 
 *   1.Main : Replace the movies prop by children prop : function Main({children})
 *           Inject the <ListBox> and <WatchedBox > into the Main - in the App
 * 
 * 
 * *******************************
 *    Passing Elements as Props(React Router) - as an alternative to Passing Components as children
 * *****************************
 * 
 *  
 *     <App>
 *      <Main>
  *          <Box element={<MovieList movies={movies}/>} /
  *          <Box element={ 
  *               <>
  *                 <WatchedSummary watched={watched} />
  *                 <WatchedMoviesList watched={watched}
  *               </>
  *           }
  *     </Main>
  *   </App>
  * 
  * *******************************************
  *         BUILDING A REUSABLE STAR COMPONENT 
  * *******************************************
  *    Requirement: 
  * 
  *   
 */
