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
    <header className="flex h-28 w-screen items-center justify-between bg-white px-10">
      <div className="w-1/3">
        <Link
          href="/"
          className="text-5xl font-bold"
        >
          Honterview
        </Link>
      </div>
      <ul className="flex w-1/3 justify-center gap-6 text-base font-bold">
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
      <div className="flex w-1/3 items-center justify-end gap-6">
        <Link href="/">
          <Button
            style={{ height: '40px' }}
            className=" px-4 py-2"
          >
            마이페이지
          </Button>
        </Link>
        <Link href="/">
          <Button
            styleType={1}
            style={{ height: '40px' }}
            className="border-slate-400 bg-slate-400 px-4 py-2 hover:border-slate-400 hover:bg-slate-500"
          >
            로그아웃
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
