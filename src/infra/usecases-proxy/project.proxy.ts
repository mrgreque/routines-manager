import repositories from "src/infra/helpers/repositories";
import { InsertProjectUseCase } from "src/usecases/project/InsertProject.usecase";
import { InsertProjectController } from "../controllers/project/InsertProject.controller";

class ProjectProxy {
    insertProjectController: InsertProjectController;

    constructor() {
        this.insertProjectController = this.insertProject();
    };

    insertProject() {
        const insertProjectUseCase = new InsertProjectUseCase(repositories.project);
        const insertProjectController = new InsertProjectController(insertProjectUseCase);

        return insertProjectController;
    };
};

export { ProjectProxy };
