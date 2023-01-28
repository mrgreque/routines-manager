export interface ILog {
    project: string;
    log: string;
    error: boolean;
    createdAt: Date;
}

export interface IInserLogInput {
    project: string;
    log: string;
    error: boolean;
}

export interface IFilters {
    withError?: boolean;
}

export interface IGetLogByProject {
    project: string;
    filters?: IFilters;
}