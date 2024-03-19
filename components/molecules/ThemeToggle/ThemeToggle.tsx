'use client'

import { useRecoilState, useRecoilValue } from 'recoil';
import ThemeIcon from '@/components/atoms/ThemeIcon/ThemeIcon';
import { customThemeColorsAtom, themeAtom } from '@/state/atmos/themeAtom';

import Link from 'next/link';

const ThemeToggle = () => {

  const [theme, setTheme] = useRecoilState(themeAtom);
  const customColors = useRecoilValue(customThemeColorsAtom);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isCustomTheme = theme.startsWith('custom');

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded ${isCustomTheme ? 'opacity-50' : ''}`}
      >
        <ThemeIcon theme={theme} />
      </button>
      <Link href="/themeColors">
        <button className="ml-4 px-4 py-2 rounded bg-blue-500 text-white">
          選択テーマ色
        </button>
      </Link>
      {isCustomTheme && (
        <div
          className="ml-4 w-6 h-6 rounded-full"
          style={{
            backgroundColor:
              customColors[parseInt(theme.replace('custom', '')) - 1].main,
          }}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
