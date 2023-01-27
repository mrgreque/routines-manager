import { IInsertProjectInput, IProject } from "src/infra/dtos/project.dto";


export interface IProjectRepository {
    addProject(project: IInsertProjectInput): Promise<void>;
    getProjects(): Promise<IProject[]>;
    getProjectByName(name: string): Promise<IProject>;
}