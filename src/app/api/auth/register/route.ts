//@ts-ignore
import bcrypt from "bcryptjs";
import { getUserByEmail, insertNewUser } from "@/data/user";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await getUserByEmail(email);

  if (user) {
    return Response.json(
      { message: "User with this email already exist" },
      { status: 401 }
    );
  }
  const saltRounds = Number(process.env.AUTH_SALT_ROUNDS);

  bcrypt.hash(password, saltRounds, async function (err: Error, hash: string) {
    try {
      await insertNewUser(email, hash);
    } catch (err: any) {
      throw new Error(err);
    }
  });

  return Response.json(
    { message: "User Registered Sucessfully" },
    { status: 200 }
  );
}
