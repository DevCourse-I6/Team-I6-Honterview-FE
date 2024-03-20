const Category = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-5 rounded-md border-2 border-dashed border-blue-200 px-5 py-3">
      <span className="text-medium">
        <input
          value={name}
          className="w-[8rem]"
        />
        : 1
      </span>
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </div>
  );
};

export default Category;
