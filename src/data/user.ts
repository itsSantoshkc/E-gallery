import { eq } from "drizzle-orm";
import { accounts, users } from "./../schema/userSchema";
import { db } from "@/db/db";
import { sendEmail } from "@/lib/nodemailer";

const generateVerificationToken = () => {
  const verificationToken = Math.floor(100000 + Math.random() * 900000);
  return verificationToken;
};

export const reSendVerificationToken = async (id: string, email: string) => {
  const token = generateVerificationToken();
  try {
    await db
      .update(users)
      .set({ verificationToken: token })
      .where(eq(users.id, id));
    // sendEmail({ email: email, type: "VERIFY", verificationCode: token });
    return token;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const verifyUser = async (id: string) => {
  try {
    await db.update(users).set({ emailVerified: null }).where(eq(users.id, id));
    return { message: "Email has been verified" };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const insertNewUser = async (email: string, password: string) => {
  try {
    const token = generateVerificationToken();
    await db.insert(users).values({
      email: email,
      password: password,
      emailVerified: false,
      verificationToken: token,
    });
    // sendEmail({ email: email, type: "VERIFY", verificationCode: token });
    return token;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByEmail = async (email: string) => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (user) {
    return user[0];
  }
  return null;
};

export const getUserById = async (id: string) => {
  const user = await db.select().from(users).where(eq(users.id, id));

  if (user) {
    return user[0];
  }
  return null;
};

export const getUsersAccountTableData = async (id: string) => {
  const accountData = await db
    .select()
    .from(accounts)
    .where(eq(accounts.userId, id));

  if (accountData.length > 0) {
    return accountData[0];
  }
  return null;
};
