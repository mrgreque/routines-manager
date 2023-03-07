import repositories from 'src/infra/helpers/repositories';
import { GetAllProjectstUseCase } from 'src/usecases/project/GetAllProjects.usecase';
import { GetProjectUseCase } from 'src/usecases/project/GetProject.usecase';
import { InsertProjectUseCase } from 'src/usecases/project/InsertProject.usecase';
import { UpdateProjectUseCase } from 'src/usecases/project/UpdateProject.usecase';
import { GetAllProjectsController } from '../controllers/project/GetAllProjects.controller';
import { GetProjectController } from '../controllers/project/GetProject.controller';
import { InsertProjectController } from '../controllers/project/InsertProject.controller';
import { UpdateProjectController } from '../controllers/project/UpdateProject.controller';

class ProjectProxy {
  insertProjectController: InsertProjectController;
  getProjectController: GetProjectController;
  getAllProjectsController: GetAllProjectsController;
  updateProjectController: UpdateProjectController;

  constructor() {
    this.insertProjectController = this.insertProject();
    this.getProjectController = this.getProject();
    this.getAllProjectsController = this.getAllProjects();
    this.updateProjectController = this.updateProject();
  }

  insertProject() {
    const insertProjectUseCase = new InsertProjectUseCase(repositories.project);
    const insertProjectController = new InsertProjectController(
      insertProjectUseCase,
    );

    return insertProjectController;
  }

  getProject() {
    const getProjectUseCase = new GetProjectUseCase(repositories.project);
    const getProjectController = new GetProjectController(getProjectUseCase);

    return getProjectController;
  }

  getAllProjects() {
    const getAllProjectsUseCase = new GetAllProjectstUseCase(
      repositories.project,
    );
    const getAllProjectsController = new GetAllProjectsController(
      getAllProjectsUseCase,
    );

    return getAllProjectsController;
  }

  updateProject() {
    const updateProjectUseCase = new UpdateProjectUseCase(repositories.project);
    const updateProjectController = new UpdateProjectController(
      updateProjectUseCase,
    );

    return updateProjectController;
  }
}

export { ProjectProxy };
