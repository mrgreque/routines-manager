import { IFilters } from "src/infra/dtos/log.dto";

export interface IAbstractRepository<T> {
    create(data: T): Promise<void>;
    get(id: string): Promise<T>;
    getAll(filters: IFilters): Promise<T[]>;
};