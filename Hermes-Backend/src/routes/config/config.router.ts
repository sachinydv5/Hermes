import { Router } from 'express';
import { configController, configUpdateController } from '../../controllers/config.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { updateAppConfigScheme } from '../../types/config/appConfig';



export const configRouter = Router();

configRouter.get("/appConfig", configController)

configRouter.post("/appConfig", validateData(updateAppConfigScheme) ,configUpdateController)
