'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <nav className="hidden md:block space-x-6 lg:space-y-6 lg:flex lg:flex-col lg:space-x-0 lg:mx-auto text-xl font-bold" aria-label="main">
      <Link href="/" className={clsx(
        'rounded p-2 lg:text-center bg-blue-600 hover:bg-blue-400 hover:text-gray-700',
          {
          'bg-gray-600 text-gray-300': pathname === '/',
          },
        )}>
      Home</Link>
      <Link href="/techs/scratch" className={clsx(
        'rounded p-2 lg:text-center bg-emerald-600 hover:bg-emerald-400 hover:text-gray-700',
          {
          'bg-gray-600 text-gray-300': pathname === '/techs/scratch',
          },
        )}>
      Scratch</Link>
      <Link href="/techs/python" className={clsx(
        'rounded p-2 lg:text-center bg-emerald-600 hover:bg-emerald-400 hover:text-gray-700',
          {
          'bg-gray-600 text-gray-300': pathname === '/techs/python',
          },
        )}>
      Python</Link>
      <Link href="/techs/web" className={clsx(
        'rounded p-2 lg:text-center bg-emerald-600 hover:bg-emerald-400 hover:text-gray-700',
          {
          'bg-gray-600 text-gray-300': pathname === '/techs/web',
          },
        )}>
      Web</Link>
    </nav>
  );
}
