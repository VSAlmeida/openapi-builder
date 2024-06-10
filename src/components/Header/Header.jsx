import React, { useContext } from 'react';

import { ThemeContext } from '@context/ThemeContext';

import LogoHorizontal from '@assets/logoHorizontal.svg?react';
import ThemeDarkIcon from '@assets/themeDark.svg?react';
import ThemeLightIcon from '@assets/themeLight.svg?react';
import LanguageIcon from '@assets/language.svg?react';
import GithubIcon from '@assets/github.svg?react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="header--logo">
        <LogoHorizontal />
      </div>
      <div className="header--options">
        <LanguageIcon />
        {theme === 'light' && (
          <ThemeDarkIcon
            style={{ height: '42px' }}
            onClick={() => {
              toggleTheme();
            }}
          />
        )}
        {theme === 'dark' && (
          <ThemeLightIcon
            style={{ height: '42px' }}
            onClick={() => {
              toggleTheme();
            }}
          />
        )}
        <GithubIcon
          onClick={() => {
            window.open(
              'https://github.com/VSAlmeida/openapi-builder',
              '_blank',
              'noopener,noreferrer'
            );
          }}
        />
      </div>
    </div>
  );
};

export default Header;
