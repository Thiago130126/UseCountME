import { getRequestConfig } from "next-intl/server";
import * as rootParams from 'next/root-params';

const locales = ["pt", "es", "en"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
    if(!locale){
        const paramValue = await rootParams.locale();

        if(paramValue && locales.includes(paramValue as any)){
            locale = paramValue;
        }else{
            locale = defaultLocale;
        }
    }

    if(!locales.includes(locale as any)){
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});