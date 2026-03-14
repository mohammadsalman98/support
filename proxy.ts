
import { NextRequest, NextResponse } from "next/server";
import { languages, defaultLanguage } from "@/i18n/settings";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = languages.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLanguage}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};