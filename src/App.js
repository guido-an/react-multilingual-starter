import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelect />
      <>
        <p>{t('title')}</p>
        <p>{t('description')}</p>
      </>
    </>
  );
}
