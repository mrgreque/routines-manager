import mongoose, { Collection, Connection, isValidObjectId } from "mongoose";
import { createConnection } from "net";
import { IFilters } from "src/infra/dtos/log.dto";
import { MongoProvider } from "src/infra/providers/MongoProvider";

export abstract class AbstractRepository<T> {

    public _collection: Collection;

    constructor(collectionName: string) {
        this.initialize(collectionName);
    }

    async initialize(collectionName: string): Promise<void> {
        const mongoProvider = new MongoProvider();
        const connection = await mongoProvider.connect();
        this._collection = connection.collection(collectionName);
    }

    public async create(data: T): Promise<void> {
        await this._collection.insertOne(data);
    }

    public async getAll(filters: IFilters): Promise<T[]> {
        return await this._collection.find(filters).toArray() as T[];
    }

    public async get(id: string): Promise<T> {
        return await this._collection.findOne({ _id: new mongoose.Types.ObjectId(id) }) as T;
    }

    public async update(id: string, data: T): Promise<void> {
        await this._collection.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: data });
    }
}