import { IInserLogInput } from "src/infra/dtos/log.dto";
import { Request, Response } from "express";
import { InsertLogUseCase } from "src/usecases/log/InsertLog.usecase";

class InsertLogController {

    constructor(private insertLogUseCase: InsertLogUseCase) { };

    async handle(request: Request, response: Response): Promise<Response> {

        const data: IInserLogInput = request.body;

        try {
            await this.insertLogUseCase.execute(data);

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };

    };

};

export { InsertLogController };