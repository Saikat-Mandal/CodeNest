import {io} from "socket.io-client"

const socket = io();


export const initSocket = async ()=>{
  const options = {
    "force new connection" :"Infinity",
    reconnectionAttempt : true,
    timeout : 10000,
    transport : ["websocket"]
  }

  return io("http://localhost:4000" , options)
}
