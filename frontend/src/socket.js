import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connectoin": true,
    reconnectionAttempt: "Infinity",
    timeout: 1000,
    transports: ["websocket"],
  };

  //   this function return instance of a socket
  return io("http://localhost:4000", options);
};
