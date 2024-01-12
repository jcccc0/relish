import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.json();
  const header = await req?.headers;
  switch(req?.method){
    case "POST":
      response = new Response(JSON.stringify({req, body?.data, header, context}))
      break;
    case "GET":
      response = new Response("Get method")
      break;
    default:
      response  = new Response("Default");
      break;
  }
  return response;
}

