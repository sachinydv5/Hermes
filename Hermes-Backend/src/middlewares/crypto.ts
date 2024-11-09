import { AES, enc, ɵf } from "crypto-ts";
import { config } from "../configs/env.config";

export const encodeOBJ = async (data: any) =>
  AES.encrypt(
    JSON.stringify(data),
    config.secret_key,
  ).toString();


export const decodeOBJ = async (ciphertext: string | ɵf): Promise<Record<string, any>> => {
  const bytes = AES.decrypt(ciphertext, config.secret_key);
  const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
  return decryptedData;
}

module.exports = { encodeOBJ, decodeOBJ };
