import { PResponse } from "../types/express.types";


interface SEND_EMAIL_TYPE { from: string, to: string, subject: string, html: string }

export const sendEmail = async ({ from, to, subject, html }: SEND_EMAIL_TYPE ): Promise<PResponse<"SUCCESS" | "FAILURE">> =>
  new Promise((resolve) => {
    resolve({ value: "FAILURE" });
  });


