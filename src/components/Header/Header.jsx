import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from '@context/ThemeContext';

import LanguageSelector from '@components/LanguageSelector';

import LogoHorizontal from '@assets/logoHorizontal.svg?react';
import ThemeDarkIcon from '@assets/themeDark.svg?react';
import ThemeLightIcon from '@assets/themeLight.svg?react';
import GithubIcon from '@assets/github.svg?react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <div className="header">
      <LogoHorizontal
        className="header--logo"
        onClick={() => {
          navigate('/');
        }}
      />
      <div className="header--options">
        <LanguageSelector />
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
