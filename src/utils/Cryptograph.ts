import { AES, enc } from "crypto-js";

export const Securitykey = "fpsreconcile2024";

export const decrypt = (data: string | undefined) => {
  if (data) {
    const bytes = AES.decrypt(data, Securitykey);
    const decryptedData = bytes.toString(enc.Utf8);
    return decryptedData;
  } else {
    return null;
  }
};

export const encrypt = (data: string) => {
  return AES.encrypt(data, Securitykey).toString();
};
