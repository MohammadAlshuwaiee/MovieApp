import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RoomStore {
  rooms = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchRooms = async () => {
    try {
      const res = await instance.get("/rooms");
      this.rooms = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  createRoom = async (newRoom) => {
    try {
      const res = await instance.post("/rooms", newRoom);
      this.rooms.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  updateRoom = async (updatedRoom) => {
    try {
      await instance.put(`/rooms/${updatedRoom.id}`, updatedRoom);
      const room = this.rooms.find((room) => room.id === updatedRoom.id);
      for (const key in room) {
        room[key] = updatedRoom[key];
      }
    } catch (error) {
      console.log(error);
    }
  };
  deleteRoom = async (roomID) => {
    try {
      await instance.delete(`/rooms/${id}`);
      this.rooms = this.rooms.filter((room) => room.id !== +roomID);
    } catch (error) {
      console.log(error);
    }
  };
}
const roomStore = new RoomStore();
roomStore.fetchRooms();
export default roomStore;
