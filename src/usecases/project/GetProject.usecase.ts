import { ProjectRepository } from 'src/domain/repositories/implements/ProjectRepository';
import { IGetProjectInput, IProject } from 'src/infra/dtos/project.dto';

class GetProjectUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private projectRepository: ProjectRepository) {}

  async execute(data: IGetProjectInput): Promise<IProject> {
    const project = await this.projectRepository.get(data.id);

    if (!project) {
      throw new Error('Project not found');
    }

    return project;
  }
}

export { GetProjectUseCase };
