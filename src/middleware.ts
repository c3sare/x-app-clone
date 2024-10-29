import { auth } from "@/auth"; // import your Better Auth instance
import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale, requestHasLocale } from "astro:i18n";

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (!requestHasLocale(context)) return redirectToDefaultLocale(context, 302)!;

  const lang = context.url.pathname.split("/")[1];

  if (!isAuthed && context.url.pathname !== `/${lang}`)
    return context.redirect(`/${lang}`);

  return next();
});
