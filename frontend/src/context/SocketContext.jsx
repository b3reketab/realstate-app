import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL, { withCredentials: true });
    setSocket(newSocket);
  
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
  currentUser && socket?.emit("newUser", currentUser.id);
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};