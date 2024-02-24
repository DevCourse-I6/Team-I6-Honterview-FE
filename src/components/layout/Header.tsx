import Link from 'next/link';

import Button from '../button';

const navigation = [
  {
    title: '면접질문',
    url: '/',
    replace: false,
    scroll: false,
  },
  {
    title: '면접연습',
    url: '/',
    replace: false,
    scroll: false,
  },
];

const Header = () => {
  return (
    <header className="flex h-28 flex-wrap items-center justify-around">
      <h1 className="text-doubleLarge font-bold">
        <Link href="/">Honterview</Link>
      </h1>
      <nav className="text-medium font-medium">
        <ul className="flex justify-center gap-10">
          {navigation.map((item) => (
            <Link
              href={item.url}
              replace={item.replace}
              scroll={item.scroll}
              key={item.title}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-6 text-medium">
        <Link href="/">
          <Button style={{ width: '10rem', height: '4rem', padding: '0 1rem' }}>
            로그아웃
          </Button>
        </Link>
        <Link href="/">
          <Button
            style={{ width: '10rem', height: '4rem', padding: '0 1rem' }}
            className="border-none bg-slate-400 px-4 hover:bg-slate-500"
          >
            로그인
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
