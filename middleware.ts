import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/routes";

const defaultLocale = 'en';
const localePrefix = 'always';

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};


export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix,
});