import Link from 'next/link';

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
      <div className="flex w-1/3 justify-end gap-6">
        <button type="button">마이페이지</button>
        <button type="button">로그아웃</button>
      </div>
    </header>
  );
};

export default Header;
