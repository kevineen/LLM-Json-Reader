import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';
import { useRecoilValue } from 'recoil';

import { themeAtom } from '@/state/atmos/themeAtom';

import Sidebar from '@/components/template/Sidebar/Sidebar';
import ThemeToggle from '@/components/molecules/ThemeToggle/ThemeToggle';
import { lightColors, darkColors, originalColors } from '@/styles/colorPalette';


interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' }
];

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const theme = useRecoilValue(themeAtom);
  const wrapperStyles = cn('layout flex flex-col h-screen', className);

  const getColors = () => {
    switch (theme) {
      case 'light':
        return lightColors;
      case 'dark':
        return darkColors;
      default:
        const originalIndex = parseInt(theme.replace('original', ''), 10);
        return originalColors[originalIndex];
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
            <main className="flex-1 p-6">
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
