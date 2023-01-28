import mongoose, { Connection } from "mongoose";
import { config } from "dotenv";

config();

function MongoProvider(): Connection {
    const connection = mongoose.createConnection(process.env.MONGO_URL);
    return connection;
}

export { MongoProvider };