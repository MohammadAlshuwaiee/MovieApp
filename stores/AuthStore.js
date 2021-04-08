// Importing instance
import instance from "./instance";

// Omporting AutoObservable
import { makeAutoObservable } from "mobx";

// Importing jwt decode
import decode from "jwt-decode";

class AuthStore {
  user = null;
  loading = true;
  usersList = [];

  constructor() {
    makeAutoObservable(this);
  }
  // signup function
  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
      alert("Your account has been successfuly created");
    } catch (error) {
      console.error(error);
    }
  };
  // signin function
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
      alert("You are signed in");
    } catch (error) {
      console.error(error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
