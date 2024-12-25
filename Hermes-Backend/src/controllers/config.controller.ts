import { getConfig, updateConfig } from "../database/config/app.config"
import { AppConfig, AppConfigRequest, AppConfigResponse, UpdateAppConfig, UpdateAppConfigRequest, UpdateAppConfigResponse } from "../types/config/appConfig";
import { TypedRequest, TypedResponse } from "../types/express.types";


export const configController = async (_req: TypedRequest<AppConfigRequest>, res: TypedResponse<AppConfigResponse>) => {
  const dbConfig = await getConfig();
  if (dbConfig) {
    console.log(dbConfig)
    res.json({ status: "SUCCESS", config: dbConfig });
  } else {
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurred" });
  }
}

export const configUpdateController = async (req: TypedRequest<UpdateAppConfigRequest>, res: TypedResponse<UpdateAppConfigResponse>) => {
  try {
    const appConfig: UpdateAppConfig = {
      primary_colour: req.body.primary_colour,
      secondary_colour: req.body.secondary_colour
    };
    await updateConfig(appConfig);
    res.json({ status: "SUCCESS" });

  } catch (error) {
    console.error(error)
    res.json({ error_code: "INTERNAL_SERVER_ERROR", description: "Some error Occurredewf " });
  }

}
