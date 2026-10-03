import createMiddleware from "next-intl/middleware";

const locales = ['pt', 'en', 'es'];
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