'use client';

import { HomeIcon, NewspaperIcon, RectangleGroupIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: RectangleGroupIcon,
  },
  { name: 'Blog', href: '/blog', icon: NewspaperIcon },
];

export const HeadNav = () => {
  const pathname = usePathname();

  const isRouteActive = (href: string) => {
    console.log('isRouteActive')
    console.log('pathname', pathname)
    console.log('href', href)

    if (href === '/') {
      const isRoot = pathname === '/'
      return isRoot
    }

    return pathname.includes(href.slice(1))
  }
  
  return (
    <nav className=' flex text-white'>
        {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': isRouteActive(link.href),
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  )
}
