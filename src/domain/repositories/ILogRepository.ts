import { IFilters, IInserLogInput, ILog } from "src/infra/dtos/log.dto";

export interface ILogRepository {
    addLog(log: IInserLogInput): Promise<void>;
    getLogs(filters?: IFilters): Promise<ILog[]>;
    getLogsByProject(project: string, filters?: IFilters): Promise<ILog[]>;
}