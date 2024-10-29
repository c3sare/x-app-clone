import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: import.meta.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.AUTH_GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: import.meta.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.AUTH_GOOGLE_CLIENT_SECRET,
    },
  },
});
