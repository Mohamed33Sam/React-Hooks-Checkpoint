import { hover } from "@testing-library/user-event/dist/hover";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
