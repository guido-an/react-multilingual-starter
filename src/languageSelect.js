import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languageMap = {
  en: { label: "English", active: true },
  fr: { label: "Français", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = useState(null);

  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

  return (
    <div>
      {Object.keys(languageMap)?.map(item => (
        <p
          key={item}
          onClick={() => {
            i18next.changeLanguage(item);
            setMenuAnchor(null);
          }}
        >
          {languageMap[item].label}
        </p>
      ))}
    </div>
  );
};

export default LanguageSelect;
