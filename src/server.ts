import { app } from "./app";

const server = app;

server.listen(3333, () => {
    console.log("Server is running on: http://localhost:3333");
});