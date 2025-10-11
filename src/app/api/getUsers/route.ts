import { connectToDB } from "@/lib/mongodb";

export async function GET() {
  await connectToDB();
  return Response.json({ msg: "Hello, World!" });
}
