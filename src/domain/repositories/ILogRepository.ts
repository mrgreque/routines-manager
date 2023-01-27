import { IInserLogInput, ILog } from "src/infra/dtos/log.dto";


export interface ILogRepository {
    addLog(log: IInserLogInput): Promise<void>;
    getLogs(): Promise<ILog[]>;
    getLogsByProject(project: string): Promise<ILog>;
}