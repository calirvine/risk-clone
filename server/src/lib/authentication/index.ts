import { compare, hash } from 'bcryptjs';
import crypto from 'crypto'

function generateSalt(): string {
    return crypto.randomUUID()
}

export function hashPassword(password: string) {
  return hash(password, generateSalt());
}

export function comparePassword(password: string, hash: string) {
  return compare(password, hash);
}
