//@ts-ignore
import multer from "multer";
const uploadDestination = multer({ dest: "../../../../public/files" });

export async function POST(request: Request) {
  return Response.json({ message: "File has been uploaded" }, { status: 200 });
}
