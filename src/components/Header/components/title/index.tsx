import Link from 'next/link';

import Logo from '@/components/logo';

const Title = () => {
  return (
    <div className="flex items-center gap-4">
      <Logo
        width={50}
        height={50}
      />
      <h1 className="text-doubleLarge font-bold">
        <Link href="/">Honterview</Link>
      </h1>
    </div>
  );
};

export default Title;
