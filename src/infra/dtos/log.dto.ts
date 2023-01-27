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