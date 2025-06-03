import type { ComponentPropsWithRef } from 'react';

export enum BUTTON_KIND {
  PRIMARY,
  SUCCESS,
  ERROR,
  NEUTRAL,
}

export enum BUTTON_SIZE {
  S,
  M,
  L,
}

export type ButtonType = Omit<ComponentPropsWithRef<'button'>, 'children'> & {
  kind: BUTTON_KIND;
  text: string;
  isLoading?: boolean;
  size: BUTTON_SIZE;
  onClick: () => void;
};
