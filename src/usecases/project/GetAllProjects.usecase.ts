import { ProjectRepository } from 'src/domain/repositories/implements/ProjectRepository';
import { IFilters } from 'src/infra/dtos/log.dto';
import { IProject } from 'src/infra/dtos/project.dto';
import { IQueryFilters } from 'src/infra/dtos/query.dto';

class GetAllProjectstUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private projectRepository: ProjectRepository) {}

  async execute(query: IQueryFilters): Promise<IProject[]> {
    let filters: IFilters = {};

    filters = {
      // eslint-disable-next-line no-prototype-builtins
      withError: query.hasOwnProperty('error')
        ? query.error === 'true'
          ? true
          : false
        : null,
      // eslint-disable-next-line no-prototype-builtins
      active: query.hasOwnProperty('active')
        ? query.active === 'true'
          ? true
          : false
        : null,
    };

    Object.keys(filters).forEach((key) => {
      if (filters[key] === null) {
        delete filters[key];
      }
    });

    const project = await this.projectRepository.getAll(filters);

    return project;
  }
}

export { GetAllProjectstUseCase };
