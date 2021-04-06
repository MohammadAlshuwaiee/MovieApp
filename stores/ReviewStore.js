import { makeAutoObservable } from "mobx";
import instance from "./instance";

class Review {
  reviews = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchReviews = async (movieID) => {
    try {
      const res = await instance.get(`/${movieID}/reviews`);
      this.reviews = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createReview = async (newReview) => {
    try {
      const res = await instance.post("/createReview", newReview);
      const review = res.data;
      this.reviews.push(review);
    } catch (error) {
      console.log(error);
    }
  };

  updateReview = async (updatedReview, movieID) => {
    try {
      await instance.put(`/${movieID}/${updatedReview.id}`, updatedReview);
      const review = this.reviews.find(
        (review) => review.id === updatedReview.id
      );
      for (const key in review) {
        review[key] = updatedReview[key];
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteReview = async (reviewID, movieID) => {
    try {
      await instance.delete(`/${movieID}/${reviewID}`);
      this.reviews = this.reviews.filter((review) => review.id !== +reviewID);
    } catch (error) {
      console.log(error);
    }
  };
}
const reviewStore = new ReviewStore();
reviewStore.fetchReviews();
export default reviewStore;
