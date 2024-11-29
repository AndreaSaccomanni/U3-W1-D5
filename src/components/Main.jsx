import { Component } from "react";
import Actionbar from "./Actionbar";
import MainSection from "./MainSection";

class Main extends Component {
  state = {
    HarryPotter: [],
    LordOfRings: [],
    StarWars: []
  };

  fetchMovies = (search) => {
    const apikey = "f1cd5989";
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`;

    return fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => data.Search.slice(0, 6))
      .catch((e) => {
        console.log("Errore: ", e);
      });
  };

  loadGallery = () => {
    this.fetchMovies("harry potter")
      .then((HarryPotterMovies) => {
        this.setState({ HarryPotter: HarryPotterMovies });
      })
      .catch((error) => console.error("Error fetching Harry Potter movies:", error));
    this.fetchMovies("lord of the rings")
      .then((LordRingsMovies) => {
        this.setState({ LordOfRings: LordRingsMovies });
      })
      .catch((error) => console.error("Error fetching Lord of the Rings movies:", error));
    this.fetchMovies("star wars")
      .then((starwarsMovies) => {
        this.setState({ StarWars: starwarsMovies });
      })
      .catch((error) => console.error("Error fetching Star Wars movies:", error));
  };

  componentDidMount() {
    this.loadGallery();
  }

  render() {
    return (
      <>
        <Actionbar />
        <MainSection title="Harry Potter" movies={this.state.HarryPotter} />
        <MainSection title="Lord of the Rings " movies={this.state.LordOfRings} />
        <MainSection title="Star Wars" movies={this.state.StarWars} />
      </>
    );
  }
}
export default Main;
