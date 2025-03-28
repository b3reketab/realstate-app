import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();
const server = http.createServer(app);

// ✅ Socket.IO server config
const io = new Server(server, {
  cors: {
    origin: ['https://b3reketab.github.io', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// ✅ Express middleware
app.use(cors({
  origin: ['https://b3reketab.github.io', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// ✅ Optional test route
app.get("/", (req, res) => {
  res.send("Server running with API + Socket.IO");
});

// ✅ Socket.IO logic
let onlineUsers = [];

const addUser = (userId, socketId) => {
  if (!onlineUsers.find((user) => user.userId === userId)) {
    onlineUsers.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

// ✅ PORT for Render or local fallback
const PORT = process.env.PORT || 8800;
server.listen(PORT, () => {
  console.log(`🚀 Server with API + Socket.IO running on port ${PORT}`);
});
