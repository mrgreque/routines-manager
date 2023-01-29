import { IFilters, IInserLogInput, ILog } from "src/infra/dtos/log.dto";
import { IAbstractRepository } from "./IAbstractRepository";

export interface ILogRepository extends IAbstractRepository<ILog> {
    getLogsByProject(project: string, filters?: IFilters): Promise<ILog[]>;
}