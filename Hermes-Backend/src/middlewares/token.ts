

import { Request, Response, NextFunction } from 'express';
import { ERROR_RESPONSE } from '../types/common/error';
import { TypedResponse } from '../types/express.types';
import { JwtPayload, verify } from 'jsonwebtoken';
import { config } from '../configs/env.config';
import { findUserLoginByTokenId } from '../database/login/user.login';
import { findUserByEmail  } from '../database/users/user';

function isJwtPayload(payload: JwtPayload | string): payload is JwtPayload {
  return typeof payload !== 'string';
}

export const authTokenVerification = async (req: Request, resp: TypedResponse<ERROR_RESPONSE>, next: NextFunction) => {
  try {
    const authenticationHeader = req.headers.authorization;
    const token = authenticationHeader ? authenticationHeader.split(" ")[1] : null;
    if (token == null)
      resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 1" })
    else {
      verify(token, config.secret_key, async (err, payload) => {
        if (err)
          resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 2" })
        else if (payload) {
          console.log(payload)
          if (isJwtPayload(payload)) {
            const userLogin = await findUserLoginByTokenId(payload.tokenId ?? "");
            if (!userLogin)
              resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 3" })
            else {
              const user = await findUserByEmail(userLogin.userEmail);
              console.log(user)
              next()

            }
          }
        } else {
          resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 4" })
        }
      })
    }
  } catch (error) {

    resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 5" })
  }
}
