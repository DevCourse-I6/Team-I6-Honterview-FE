import Input from '@/components/input';

const CreateCategoryInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input className="h-[30px] w-[200px]">
        <Input.Text />
      </Input>
      <button
        type="button"
        className="rounded-xl border-[1px] px-6 py-2"
      >
        카테고리 생성
      </button>
    </div>
  );
};

export default CreateCategoryInput;
