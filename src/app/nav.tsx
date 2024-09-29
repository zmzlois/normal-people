import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const navigation = [
  { name: 'Project', href: '/project' },
  //{
  //  name: 'Speeches',
  //  href: '/pre',
  //},
  { name: 'Blog', href: '/blogs' },
  { name: 'CV', href: '/intro' },
];

export const Nav = () => {
  const [blur, setBlur] = useState(false);
  return (
    <nav className="py-6 group/link">
      <ul
        onMouseEnter={() => setBlur(true)}
        onMouseLeave={() => setBlur(false)}
        className="flex items-center justify-center gap-4 py-4 duration-500 transform-all blur-sm hover:blur-none group/link"
      >
        {navigation.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="mx-3 text-base  font-light group-hover/link:scale-95 transition-all duration-500 text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-0 after:bg-zinc-300 after:transition-all after:duration-500 after:hover:w-full hover:text-zinc-100 hover:scale-125"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <h1
        className={cn(
          'z-10 text-6xl font-extrabold  transform-all duration-500  text-center cursor-default duration-800  md:text-9xl text-zinc-50  ',
          blur
            ? 'blur-sm duration-500 scale-100 tracking-tighter '
            : 'blur-none scale-[1.02] transition-all tracking-tight duration-500',
        )}
      >
        zmzlois
      </h1>
    </nav>
  );
};
