import mongoose, { Connection } from 'mongoose';
import { config } from 'dotenv';

config();

class MongoProvider {
  public async connect(): Promise<Connection> {
    const conn = mongoose.createConnection();
    const uriConn = await conn.openUri(process.env.MONGO_URL, {});
    console.log('MongoDB connected');
    return uriConn;
  }
}

export { MongoProvider };
