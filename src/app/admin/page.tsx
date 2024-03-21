'use client';

import Categories from '@/container/admin/Categories';
import CreateQuestion from '@/container/admin/CreateQuestion';

const AdminPage = () => {
  return (
    <div className="w-full max-w-[100rem] space-y-11">
      <Categories />
      <CreateQuestion />
    </div>
  );
};

export default AdminPage;
