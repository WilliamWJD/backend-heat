import { Request, Response } from "express";

import { CreateServiceMessage } from "../services/CreateMessageService";

class CreateMessageController{
    async handle(req:Request, res:Response):Promise<Response>{
        const { message } = req.body;
        const { user_id } = req
        
        const service = new CreateServiceMessage();

        const result = await service.execute(message, user_id)

        return res.json(result);
    }
}

export { CreateMessageController }