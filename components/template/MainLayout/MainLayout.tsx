import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';
import { useRecoilValue } from 'recoil';

import { customThemeColorsAtom, themeAtom } from '@/state/atmos/themeAtom';

import Sidebar from '@/components/template/Sidebar/Sidebar';
import ThemeToggle from '@/components/molecules/ThemeToggle/ThemeToggle';
import { lightColors, darkColors } from '@/styles/themeColorPalette';


interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' },
];

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const theme = useRecoilValue(themeAtom);
  const customColors = useRecoilValue(customThemeColorsAtom);
  const wrapperStyles = cn('layout flex flex-col min-h-screen 100vh', className);

  const getColors = () => {
    switch (theme) {
      case 'light':
        return lightColors;
      case 'dark':
        return darkColors;
      default:
        if (theme.startsWith('custom')) {
          const customIndex = parseInt(theme.replace('custom', ''), 10) - 1;
          return customColors[customIndex];
        }
        return lightColors;
    }
  };

  const colors = getColors();

  return (
    <div>
      <div className={wrapperStyles}>
        <div style={{ backgroundColor: colors.main, color: colors.text }}>
          <header className="py-4 px-6" style={{ backgroundColor: colors.header }}>
            <div className="flex justify-between items-center">
              <ul className="flex items-center gap-10 text-gray-500">
                {links.map(({ slug, label }) => (
                  <li key={slug}>
                    <Link href={slug} className="inline-block p-2 transition-colors hover:text-green-300">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ThemeToggle />
            </div>
          </header>
          <div className="flex flex-1 h-full" style={{ backgroundColor: colors.sidebar }}>
            <Sidebar
              backgroundColor={colors.sidebar}
              textColor={colors.text}
              selectedBackgroundColor={colors.sidebarSelected}
              selectedTextColor={colors.text}
              hoverBackgroundColor={colors.sidebarHover}
            />
            <main className="flex-grow p-6">
              {children}
            </main>
          </div>
          <footer className="flex items-center justify-center p-4" style={{ backgroundColor: colors.footer }}>
            ファイル名
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
