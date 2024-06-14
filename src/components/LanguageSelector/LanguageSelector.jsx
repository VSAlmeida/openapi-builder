import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import useOutsideClick from '@hooks/useOutsideClick';

import LanguageIcon from '@assets/language.svg?react';

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const ref = useRef(null);

  const handleChangeLanguage = (lng) => {
    if (i18n.language === lng) {
      return;
    }

    i18n.changeLanguage(lng);

    setOpen(false);
  };

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <div ref={ref} className="languageSelector">
      <LanguageIcon
        onClick={() => {
          setOpen(!open);
        }}
      />

      {open && (
        <div className="languageSelector__menu">
          <button
            type="button"
            aria-current={i18n.language === 'en-US'}
            onClick={() => {
              handleChangeLanguage('en-US');
            }}
          >
            {t('languages.english')}
          </button>
          <button
            type="button"
            aria-current={i18n.language === 'es'}
            onClick={() => {
              handleChangeLanguage('es');
            }}
          >
            {t('languages.spanish')}
          </button>
          <button
            type="button"
            aria-current={i18n.language === 'pt-BR'}
            onClick={() => {
              handleChangeLanguage('pt-BR');
            }}
          >
            {t('languages.portuguese')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
