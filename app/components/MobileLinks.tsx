'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function MobileLinks({ closeMenu }: { closeMenu: () => void }) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col min-h-screen items-center py-8 space-y-6">
      <span>
        <Link href="/" onClick={closeMenu} className={clsx(
          'text-blue-400',
            {
            'text-gray-600': pathname === '/',
            },
          )}>
        Home</Link>
        <hr className={clsx(
          'border-t-4 border-blue-400 mt-2',
            {
            'border-gray-600': pathname === '/',
            },
          )}/>
      </span>
      <span>
        <Link href="/techs/scratch" onClick={closeMenu} className={clsx(
          'text-emerald-400',
            {
            'text-gray-600': pathname === '/techs/scratch',
            },
          )}>
        Scratch</Link>
        <hr className={clsx(
            'border-t-4 border-emerald-400 mt-2',
              {
              'border-gray-600': pathname === '/techs/scratch',
              },
          )}/>
      </span>
      <span>
      <Link href="/techs/python" onClick={closeMenu} className={clsx(
        'text-emerald-400',
          {
          'text-gray-600': pathname === '/techs/python',
          },
        )}>
      Python</Link>
              <hr className={clsx(
            'border-t-4 border-emerald-400 mt-2',
              {
              'border-gray-600': pathname === '/techs/python',
              },
          )}/>
      </span>
      <span>
        <Link href="/techs/web" onClick={closeMenu} className={clsx(
          'text-emerald-400',
            {
            'text-gray-600': pathname === '/techs/web',
            },
          )}>
        Web</Link>
                <hr className={clsx(
              'border-t-4 border-emerald-400 mt-2',
                {
                'border-gray-600': pathname === '/techs/web',
                },
          )}/>
      </span>
    </nav>
  );
}
