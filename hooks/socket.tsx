import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:3001";

export default function useSocket() {
  const [socket, setSocket] = useState<Socket<any, any>>();
  useEffect(() => {
    if (!socket) setSocket(io(SOCKET_URL));
  }, [socket]);
  return socket;
}
