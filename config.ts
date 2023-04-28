import dotenv from 'dotenv';
dotenv.config();

export const SENDGRID_APIKEY: string = process.env.SENDGRID_APIKEY!;
export const FROM_EMAIL: string = process.env.FROM_EMAIL!;
export const TO_EMAIL: string = process.env.TO_EMAIL!;
