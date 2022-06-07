import { config } from 'dotenv';
config();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error('JWT_SECRET not set!!!!');
export const CONFIG = { JWT_SECRET } as const;
