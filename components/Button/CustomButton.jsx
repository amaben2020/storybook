import React from 'react';
import style from './customButton.module.css';
import cn from 'classnames';
const CustomButton = ({ variant, type, className, children }) => {
  const buttonClass = cn(className, style.root, {
    [style.button__primary]: type === 'primary',
    [style.button__secondary]: type === 'secondary',
    [style.button__s]: variant === 'primary',
    [style.button__m]: variant === 'danger',
  });
  return <button className={buttonClass}>{children}</button>;
};

export default CustomButton;
