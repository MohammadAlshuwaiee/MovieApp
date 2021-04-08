import { observer } from "mobx-react";
import React, { useEffect } from "react";
import roomStore from "../../stores/RoomStore";
import { List, Content } from "native-base";
import RoomDetails from "./RoomDetails";

const RoomList = ({ navigation }) => {
  useEffect(() => {
    roomStore.fetchRooms();
  }, []);
  const roomsList = roomStore.rooms.map((room) => (
    <RoomDetails navigation={navigation} room={room} key={room.id} />
  ));

  return (
    <Content>
      <List>{roomsList}</List>
    </Content>
  );
};

export default observer(RoomList);
