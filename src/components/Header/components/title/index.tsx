import Link from 'next/link';

import Logo from '@/components/logo';

const Title = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <Logo
          width={50}
          height={50}
        />
      </Link>
      <h1 className="hidden text-doubleLarge font-bold md:block">
        <Link href="/">Honterview</Link>
      </h1>
    </div>
  );
};

export default Title;
