import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';
import { useRecoilValue } from 'recoil';

import { themeAtom } from '@/state/atmos/themeAtom';

import Sidebar from '@/components/template/Sidebar/Sidebar';
import ThemeToggle from '@/components/molecules/ThemeToggle/ThemeToggle';


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

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className={wrapperStyles}>
        <header className="bg-gray-200 py-4 px-6 dark:bg-gray-800">
          <ul className="flex items-center gap-10 text-gray-500 ">
            {links.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={slug} className="inline-block p-2 transition-colors hover:text-green-300">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              {/* ... */}
              <ThemeToggle />
              {/* ... */}
            </li>
          </ul>
        </header>
        <div className="flex flex-1 h-full dark:bg-gray-800">
          <Sidebar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
        <footer className="flex items-center justify-center p-4 dark:bg-gray-800">
          © kevin28gou Copyright 2024
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
