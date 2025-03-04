import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ta"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  console.log(`../messages/${locale}.json`,"locale")

  if (locale && !locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
