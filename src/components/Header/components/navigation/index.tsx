'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as v4uuid } from 'uuid';

import { navigationItems } from './constants/navigationItems';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="text-medium font-medium">
      <ul className="flex justify-center gap-10">
        {navigationItems.map(({ url, replace, scroll, title }) => {
          const enabledStyle = pathname === url ? 'text-primaries-primary' : '';

          return (
            <Link
              key={v4uuid()}
              href={url}
              replace={replace}
              scroll={scroll}
              className={`${enabledStyle}`}
            >
              {title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
