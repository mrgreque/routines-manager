export interface IProjectPaths {
    projectFolder?: string;
    resultFolder?: string;
    start?: string;
    stop?: string;
}

export interface IProject {
    _id?: string;
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
    id: string;
}

export interface IUpdateProjectInput {
    id: string;
    update: IProject;
    nameHasUpdated: boolean;
}