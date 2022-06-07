import { hashPassword } from '../authentication';
import { db } from '../db';

export async function initializeApp() {
  const passwordHash = await hashPassword('Password1');
  const email = 'hi@calirvine.com';
  const payload = {
    email,
    password: passwordHash,
    verified: true,
  };
  await db.user.upsert({
    where: {
      email,
    },
    update: {
      ...payload,
    },
    create: {
      ...payload,
    },
  });
}
