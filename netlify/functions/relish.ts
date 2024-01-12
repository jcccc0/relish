import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.json();
  const header = await req.headers;
  console.log('body:', body)
  switch(req?.method){
    case "POST":
      response = new Response({header})
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

