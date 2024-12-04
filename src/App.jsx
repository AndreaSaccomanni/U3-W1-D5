import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/TvShows" element={<TvShows />}></Route>
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
