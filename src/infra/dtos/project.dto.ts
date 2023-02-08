export interface IProjectPaths {
    resultFolder?: string;
    start?: string;
    end?: string;
}

export interface IProject {
    name: string;
    description: string;
    withError: boolean;
    active: boolean;
    paths?: IProjectPaths;
}

export interface IInsertProjectInput {
    name: string;
    description: string;
    paths?: IProjectPaths;
}

export interface IGetProjectInput {
    name: string;
}

export interface IUpdateProjectInput {
    name: string;
    update: IProject;
    nameHasUpdated: boolean;
}