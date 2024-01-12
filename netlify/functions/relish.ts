import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  const data = await request.json();
  switch(req?.method){
    case "POST":
      response = new Response(JSON.stringify({req, data, context}))
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

