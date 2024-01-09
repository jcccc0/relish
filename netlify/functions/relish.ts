import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  const body = req?.body;
  const header = req?.headers;
  return new Response("Welcome relish!", body, header)
}
