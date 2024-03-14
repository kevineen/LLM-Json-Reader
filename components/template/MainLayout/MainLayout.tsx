import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';
import Sidebar from '@/components/template/Sidebar/Sidebar';


interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' }
];

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('layout flex flex-col h-screen', className);

  return (
    <div className={wrapperStyles}>
      <header className="bg-gray-200 py-4 px-6">
        <ul className="flex items-center gap-10 text-gray-500">
          {links.map(({ slug, label }) => (
            <li key={slug}>
              <Link href={slug} className="inline-block p-2 transition-colors hover:text-green-300">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <div className="flex flex-1 h-full">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <footer className="flex items-center justify-center p-4">
        © kevin28gou Copyright 2024
      </footer>
    </div>
  );
};

export default MainLayout;