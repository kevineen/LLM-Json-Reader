import { ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils/cn';
import { useRecoilValue } from 'recoil';

import Sidebar from '@/components/template/Sidebar/Sidebar';
import ThemeToggle from '@/components/molecules/ThemeToggle/ThemeToggle';
import { lightColors, darkColors } from '@/styles/themeColorPalette';
import { themeAtom, customThemeColorsAtom } from '@/state/atmos/themeAtom';
import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import Footer from '@/components/template/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' },
  { slug: '/datas', label: 'Data' },
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
        <div className="flex flex-col h-screen" style={{ backgroundColor: colors.main, color: colors.text }}>
          <header className="py-4 px-6" style={{ backgroundColor: colors.header, color: colors.headerText }}>
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
          <div className="flex flex-1 overflow-hidden">
            <div className="w-full md:w-[300px] lg:block hidden" style={{ backgroundColor: colors.sidebar }}>
              <Sidebar
                backgroundColor={colors.sidebar}
                textColor={colors.text}
                selectedBackgroundColor={colors.sidebarSelected}
                selectedTextColor={colors.text}
                hoverBackgroundColor={colors.sidebarHover}
              />
            </div>
            <main className="flex-grow overflow-y-auto p-6 md:w-[calc(100%-300px)] w-full">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
