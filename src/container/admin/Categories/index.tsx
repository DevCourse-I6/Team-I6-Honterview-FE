import Category from './components/Category';
import CreateCategoryInput from './components/CreateCategoryInput';

const Categories = () => {
  return (
    <div className="rounded-lg border-[1px] border-dotted p-8">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-large">카테고리</h1>
        <CreateCategoryInput />
      </div>
      <div className="flex flex-wrap items-start gap-3">
        <Category name="React" />
      </div>
    </div>
  );
};

export default Categories;
