import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {t("home.finished_loading")}
      </Suspense>
    </>
  );
}
