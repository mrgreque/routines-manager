import { ILogRepository } from 'src/domain/repositories/ILogRepository';
import { IProjectRepository } from 'src/domain/repositories/IProjectRepository';
import { ISenderRepository } from 'src/domain/repositories/ISenderRepository';
import { IInserLogInput } from '../../infra/dtos/log.dto';

class InsertLogUseCase {
    constructor(private logRepository: ILogRepository, private projectRepository: IProjectRepository, private senderRepository: ISenderRepository) { };

    async execute(logInput: IInserLogInput): Promise<void> {

        if (!logInput.hasOwnProperty('project') || !logInput.hasOwnProperty('log') || !logInput.hasOwnProperty('error')) {
            throw new Error('Log data not provided');
        };

        const projectExists = await this.projectRepository.getProjectByName(logInput.project);

        if (!projectExists) {
            throw new Error('Project not found');
        };

        await this.logRepository.addLog(logInput);

        if (logInput.error) {
            try {
                await this.senderRepository.sendMessage({
                    to: "5516991344675@c.us",
                    body: `Project: ${projectExists.name}\nLog: ${logInput.log}\nError: ${logInput.error}`
                });
            } catch (error) {
                console.log("Não foi possível sinalizar o erro: " + logInput.error + " devido ao erro:" + error);
            };
        };
    };
};

export { InsertLogUseCase };