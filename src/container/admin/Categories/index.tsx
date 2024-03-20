import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import Loading from '@/components/loading';
import { getCategoriesAdmin } from '@/libs/services/admin';

import Category from './components/Category';
import CreateCategoryInput from './components/CreateCategoryInput';

const Categories = () => {
  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ['admin', 'categories'],
    queryFn: getCategoriesAdmin,
  });

  return (
    <div className="rounded-lg border-[1px] border-dotted p-8">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-large">카테고리</h1>
        <CreateCategoryInput />
      </div>
      <div className="flex flex-wrap items-start gap-3">
        {isLoading ? (
          <Loading />
        ) : (
          categoriesData?.data.map(({ name, id }) => (
            <Category
              key={uuidv4()}
              name={name}
              id={id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
