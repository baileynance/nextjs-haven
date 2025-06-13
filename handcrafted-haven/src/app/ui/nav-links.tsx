'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Products', path: '/dashboard/products' },
  { name: 'User', path: '/dashboard/user' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={clsx(
            'px-4 py-2 rounded-md text-sm font-medium transition-colors',
            pathname.startsWith(link.path)
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
