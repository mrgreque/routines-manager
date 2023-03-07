import { ProjectRepository } from 'src/domain/repositories/implements/ProjectRepository';
import { IProject, IUpdateProjectInput } from 'src/infra/dtos/project.dto';

class UpdateProjectUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private projectRepository: ProjectRepository) {}

  async execute(data: IUpdateProjectInput): Promise<IProject> {
    const project = await this.projectRepository.get(data.id);

    if (!project) {
      throw new Error('Project not found');
    }

    if (data.nameHasUpdated) {
      const project = await this.projectRepository.getProjectByName(
        data.update.name,
      );

      if (project) {
        throw new Error('Project name already exists');
      }
    }

    await this.projectRepository.update(data.id, data.update);

    return project;
  }
}

export { UpdateProjectUseCase };
