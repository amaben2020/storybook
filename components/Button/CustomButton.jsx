import React from 'react';
import style from './customButton.module.css';
import cn from 'classnames';
const CustomButton = ({ variant, type, className, children, handleClick }) => {
  // const combinedClassName = [style.button, className].filter(Boolean).join(' ');

  const buttonClass = cn(style.button, style.root, {
    [style.button__primary]: type === 'primary',
    [style.button__secondary]: type === 'secondary',
    [style.button__success]: variant === 'success',
    [style.button__danger]: variant === 'danger',
  });
  return (
    <button onClick={handleClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default CustomButton;
