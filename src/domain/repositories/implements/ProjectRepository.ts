import { IInsertProjectInput, IProject } from "src/infra/dtos/project.dto";
import { IProjectRepository } from "../IProjectRepository";

class ProjectRepository implements IProjectRepository {
    async addProject(project: IInsertProjectInput): Promise<void> {
        console.log(project);
    };

    async getProjects(): Promise<IProject[]> {
        return [];
    };

    async getProjectByName(name: string): Promise<IProject> {
        return {
            name: 'Project 1',
            description: 'Project 1 description',
            active: true,
            withError: false,
            paths: {}
        };
    };
};

export { ProjectRepository };