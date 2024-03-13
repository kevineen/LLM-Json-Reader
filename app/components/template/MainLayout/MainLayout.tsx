import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/app/lib/utils/cn';
import Sidebar from '@/app/components/organisms/Sidebar/Sidebar';


interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' }
];

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      <header className="bg-slate-900 p-4">
        <ul className="flex items-center gap-10 text-gray-50">
          {links.map(({ slug, label }) => (
            <li key={slug}>
              <Link href={slug} className="inline-block p-2 transition-colors hover:text-green-300">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <footer className="flex items-center justify-center p-4">© kevin28gou Copyright 2024</footer>
    </div>
  );
};
