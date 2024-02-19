import { NextFont } from 'next/dist/compiled/@next/font';

export const generateFontClasses = (...fonts: NextFont[]) => {
  return fonts.map((font) => font.className).join(' ');
};
