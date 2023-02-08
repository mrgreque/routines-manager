import { ProjectRepository } from "src/domain/repositories/implements/ProjectRepository";
import { IGetProjectInput, IProject } from "src/infra/dtos/project.dto";

class GetProjectUseCase {
    constructor(private projectRepository: ProjectRepository) { };

    async execute(data: IGetProjectInput): Promise<IProject> {
        const project = await this.projectRepository.getProjectByName(data.name);

        if (!project) {
            throw new Error("Project not found");
        };

        return project;
    };
};

export { GetProjectUseCase };