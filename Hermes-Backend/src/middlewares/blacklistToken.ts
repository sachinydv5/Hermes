

import { Request, Response, NextFunction } from 'express';
import { ERROR_RESPONSE } from '../types/auth/trigger';
import { TypedResponse } from '../types/express.types';
import { JwtPayload, verify } from 'jsonwebtoken';
import { config } from '../configs/env.config';
import { createBlackListToken, findBlackListedByTokenId } from '../database/login/blacklist.token';
import { findUserLoginByTokenId, updateUserLoginAsDeleted } from '../database/login/user.login';

function isJwtPayload(payload: JwtPayload | string): payload is JwtPayload {
  return typeof payload !== 'string';
}

export const blacklistToken = async (req: Request, resp: TypedResponse<ERROR_RESPONSE>, next: NextFunction) => {
  try {
    const authenticationHeader = req.headers.authorization;
    const token = authenticationHeader ? authenticationHeader.split(" ")[1] : null;
    if (token == null)
      resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 1" })
    else {
      const blacklistedToken = await findBlackListedByTokenId(token);
      if (blacklistedToken) {
        resp.json({ error_code: "UNAUTHORIZED", description: "Blacklisted Token" })
      } else {
        verify(token, config.secret_key, async (err, payload) => {
          if(err) {
            resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 1" })
          }
          if (payload && isJwtPayload(payload)) {
            console.log(payload)
            const userLogin = await findUserLoginByTokenId(payload.tokenId ?? "");
            if (!userLogin)
              resp.json({ error_code: "UNAUTHORIZED", description: "Token not found wef w3" })
            else {
              updateUserLoginAsDeleted(payload.tokenId)
              createBlackListToken(token)
              next();
            }
          }
        })
      }
    }
  } catch (error) {
    resp.json({ error_code: "UNAUTHORIZED", description: "Token not found 5" })
  }
}
