import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  switch(req?.method){
    case "POST":
      response = new Response("Post method")
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

