// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies = async () => {
    try {
      const response = await instance.get("/movies");
      this.movies = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  getMovieById = async (movieId) => {
    await instance.get(`/movies/${movieId}`);
    this.movies.find((movie) => movie.id === +movieId);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  createMovie = async (newMovie) => {
    try {
      const formData = new FormData();
      for (const key in newMovie) formData.append(key, newMovie[key]);
      const res = await instance.post(`/movies`, formData);
      this.movies.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateMovie = async (updateMovie) => {
    try {
      const formData = new FormData();
      for (const key in updateMovie) formData.append(key, updateMovie[key]);
      await instance.put(`/movies/${updateMovie.id}`, formData);
      const movie = this.movies.find((movie) => movie.id === updateMovie.id);
      for (const key in movie) movie[key] = updateMovie[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteMovie = async (movieId) => {
    await instance.delete(`/movies/${movieId}`);
    this.movies = this.movies.filter((movie) => movie.id !== +movieId);
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const movieStore = new MovieStore();
// movieStore.fetchMovies();

export default movieStore;
