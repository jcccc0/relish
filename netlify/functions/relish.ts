import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  const header = await req.json();
  switch(req?.method){
    case "POST":
      response = new Response({body, header})
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

