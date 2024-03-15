import Link from 'next/link';

import Button from '../button';

const navigation = [
  {
    title: '면접질문',
    url: '/questions/list',
    replace: false,
    scroll: false,
  },
  {
    title: '모의면접',
    url: '/interview/presetting',
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
        <Link href="/auth/login">
          <Button className="h-[4rem] px-[2rem] py-0 ">로그인</Button>
        </Link>
        <Link
          href="/mypage"
          className="font-medium"
        >
          마이페이지
        </Link>
      </div>
    </header>
  );
};

export default Header;
