import { getUserById } from "@/data/user";

export async function POST(request: Request) {
  const { id } = await request.json();

  const user = await getUserById(id);

  console.log(user);

  if (!user) {
    return Response.json({ message: "User doesn't exist" }, { status: 401 });
  }

  return Response.json(user, { status: 200 });
}
