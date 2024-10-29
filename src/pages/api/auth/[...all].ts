import { auth } from "@/auth"; // import your Better Auth instance
import type { APIRoute } from "astro";

const handler: APIRoute = async (ctx) => {
  return auth.handler(ctx.request);
};

export { handler as GET, handler as POST };
