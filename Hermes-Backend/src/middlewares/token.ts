

import { Request, Response, NextFunction } from 'express';
import { ERROR_RESPONSE } from '../types/common/error';
import { TypedRequestEmail, TypedResponse } from '../types/express.types';
import { JwtPayload, verify } from 'jsonwebtoken';
import { config } from '../configs/env.config';
import { findUserLoginByTokenId } from '../database/login/user.login';
import { findUserByEmail } from '../database/users/user';
import { findBlackListedByTokenId } from '../database/login/blacklist.token';

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
      const blacklistedToken = await findBlackListedByTokenId(token);
      if (blacklistedToken) {
        resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 2" })
      } else {
        verify(token, config.secret_key, async (err, payload) => {
          if (err)
            resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 2" })
          else if (payload) {
            if (isJwtPayload(payload)) {
              const blacklistedToken = await findBlackListedByTokenId(payload.tokenId);
              const userLogin = await findUserLoginByTokenId(payload.tokenId ?? "");
              if (!userLogin)
                resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 3" })
              else {

                req.body.email = userLogin.userEmail;
                (req as TypedRequestEmail<any>).email = userLogin.userEmail;
                // const user = await findUserByEmail(userLogin.userEmail);
                next()

              }
            }
          } else {
            resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 4" })
          }
        })
      }
    }
  } catch (error) {

    resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 5" })
  }
}
