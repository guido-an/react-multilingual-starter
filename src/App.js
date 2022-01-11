import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

export default function App() {
  const { t } = useTranslation();

  return (
    <div>
    <div>
        <LanguageSelect />
    </div>
    <div>
      <div className="example-text">
        <p>{t("title")}</p>
        <p>{t("description")}</p>
      </div>
    </div>
    </div>
  );
}
