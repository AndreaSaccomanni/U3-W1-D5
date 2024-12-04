import { Component } from "react";
import Actionbar from "./Actionbar";
import MainSection from "./MainSection";

class TvShows extends Component {
  state = {
    RickAndMorty: [],
    TheOffice: [],
    Shameless: []
  };

  //metodo che genera una fetch per ogni gallery in base al parametro search che riempie dinamicamente l'url
  fetchMovies = (search) => {
    const apikey = "f1cd5989";
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`;

    //url riempito dinamicanente
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

  //metodo che chiama fetchMovies e tramite il parametro genera una fetch specifica che andrà a modificare lo state

  loadGallery = () => {
    this.fetchMovies("rick and morty")
      .then((RickAndMortyEpisodes) => {
        this.setState({ RickAndMorty: RickAndMortyEpisodes });
      })
      .catch((error) => console.error("Error fetching Rick&Morty episodes:", error));
    this.fetchMovies("the office")
      .then((TheOfficeEpisodes) => {
        this.setState({ TheOffice: TheOfficeEpisodes });
      })
      .catch((error) => console.error("Error fetching The Office episodes:", error));
    this.fetchMovies("shameless")
      .then((ShamelessEpisodes) => {
        this.setState({ Shameless: ShamelessEpisodes });
      })
      .catch((error) => console.error("Error fetching Star Wars movies:", error));
  };

  componentDidMount() {
    this.loadGallery();
  }

  render() {
    return (
      <>
        <Actionbar title="Tv Shows" />
        <MainSection title="Rick & Morty" movies={this.state.RickAndMorty} />
        <MainSection title="The Office" movies={this.state.TheOffice} />
        <MainSection title="Shameless" movies={this.state.Shameless} />
      </>
    );
  }
}
export default TvShows;
