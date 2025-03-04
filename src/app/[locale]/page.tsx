import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">{t("welcome")}</h1>
    </div>
  );
}
