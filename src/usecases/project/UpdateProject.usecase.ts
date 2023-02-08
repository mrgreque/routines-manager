import { ProjectRepository } from "src/domain/repositories/implements/ProjectRepository";
import { IGetProjectInput, IProject, IUpdateProjectInput } from "src/infra/dtos/project.dto";

class UpdateProjectUseCase {
    constructor(private projectRepository: ProjectRepository) { };

    async execute(data: IUpdateProjectInput): Promise<IProject> {
        const project = await this.projectRepository.getProjectByName(data.name);

        if (!project) {
            throw new Error("Project not found");
        };

        if (data.nameHasUpdated) {
            const project = await this.projectRepository.getProjectByName(data.update.name);

            if (project) {
                throw new Error("Project name already exists");
            };
        };

        await this.projectRepository.updateProjectByName(data.name, data.update);

        return project;
    };
};

export { UpdateProjectUseCase };