import React from 'react';
import cn from 'classnames';
import baseClasses from './base-theme.module.css';
import { jediTheme, sithTheme } from './themes';

const Theme = ({ name = 'sith', children }) => {
  const baseClasses = {
    root: '',
  };
  const themeClass = cn(baseClasses.root, {
    [jediTheme.root]: name === 'jedi',
    [sithTheme.root]: name === 'sith',
  });

  return <div className={themeClass}>{children}</div>;
};

export default Theme;
