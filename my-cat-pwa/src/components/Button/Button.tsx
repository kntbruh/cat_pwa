import React, { forwardRef, type ForwardedRef } from 'react';
import clsx from 'clsx';
import { BUTTON_KIND, BUTTON_SIZE, type ButtonType } from './ButtonTypes';
import { buttonStyle, kindStyles } from './styles';

export const Button = forwardRef(function Button(
  { kind, text, isLoading, size, className, onClick }: ButtonType,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={clsx(
        buttonStyle,
        kind === BUTTON_KIND.PRIMARY && kindStyles[0],
        kind === BUTTON_KIND.SUCCESS && kindStyles[1],
        kind === BUTTON_KIND.ERROR && kindStyles[2],
        kind === BUTTON_KIND.NEUTRAL && kindStyles[3],
        size === BUTTON_SIZE.S && 'gap-1 text-s',
        size === BUTTON_SIZE.M && 'gap-2 text-m',
        size === BUTTON_SIZE.L && 'gap-2.5 text-xl',
        className
      )}
      onClick={onClick}
    >
      {isLoading ? 'loading...' : text}
    </button>
  );
});
