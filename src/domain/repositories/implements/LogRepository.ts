import { IFilters, IInserLogInput, ILog } from "src/infra/dtos/log.dto";
import { ILogRepository } from "../ILogRepository";
import { AbstractRepository } from "./AbstractRepository";

class LogRepository extends AbstractRepository<ILog> implements ILogRepository {
    async getLogsByProject(project: string, filters?: IFilters): Promise<ILog[]> {
        return await this._collection.find({ project, ...filters }).toArray() as unknown as ILog[];
    };
};

export { LogRepository };