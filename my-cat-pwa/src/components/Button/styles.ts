import { BUTTON_KIND } from './ButtonTypes';

export const buttonStyle =
  'flex items-center justify-center overflow-hidden rounded-xl p-3 hover:cursor-pointer';

export const kindStyles: Record<BUTTON_KIND, string> = {
  [BUTTON_KIND.PRIMARY]:
    'bg-blue-500 hover:bg-blue-600 font-medium text-shadow-white focus-visible:bg-blue-700 active:bg-blue-800 ',
  [BUTTON_KIND.SUCCESS]:
    'bg-green-500 hover:bg-green-600 font-medium text-shadow-white focus-visible:bg-green-700 active:bg-green-800',
  [BUTTON_KIND.ERROR]:
    'bg-red-500 hover:bg-red-600 font-medium text-shadow-white focus-visible:bg-red-700 active:bg-red-800',
  [BUTTON_KIND.NEUTRAL]:
    'bg-gray-500 hover:bg-blue-600 font-medium text-shadow-white focus-visible:bg-gray-700 active:bg-gray-800',
};
