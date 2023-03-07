import { App } from './app';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = new App();
const server = createServer(app.app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('New connection', socket.id);
});

app.setSocketConnection(io);

server.listen(3333, () => {
  console.log('Server is running on: http://localhost:3333');
});
