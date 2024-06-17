import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '@context/ThemeContext';

import LogoVerticalDark from '@assets/logoVerticalDark.svg?react';
import LogoVerticalLight from '@assets/logoVerticalLight.svg?react';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="home">
      {theme === 'dark' && <LogoVerticalDark className="home--logo" />}
      {theme === 'light' && <LogoVerticalLight className="home--logo" />}
      <div>
        <b className="home--title">OpenAPI Builder</b> {t('home.itsFree')}{' '}
        <b>{t('home.noAccount')}</b>
      </div>
      <div>{t('home.description')}</div>
      <button
        type="button"
        className="home--button"
        onClick={() => {
          navigate('/builder');
        }}
      >
        {t('home.button')}
      </button>
    </div>
  );
};

export default Home;
