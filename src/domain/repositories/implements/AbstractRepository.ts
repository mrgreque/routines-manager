import mongoose, { Collection, Connection } from "mongoose";
import { createConnection } from "net";
import { IFilters } from "src/infra/dtos/log.dto";

export abstract class AbstractRepository<T> {

    public _collection: Collection;

    constructor(dbProvider: () => Connection, collectionName: string) {
        const connn = dbProvider();
        this._collection = connn.collection(collectionName);
    }

    public async create(data: T): Promise<void> {
        await this._collection.insertOne(data);
    }

    public async getAll(filters: IFilters): Promise<T[]> {
        return await this._collection.find(filters).toArray() as T[];
    }

    public async get(id: string): Promise<T> {
        return await this._collection.findOne({ _id: id }) as T;
    }
}