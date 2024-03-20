import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { notify } from '@/components/toast';
import { deleteCategoryAdmin, patchCategoryAdmin } from '@/libs/services/admin';

import { IProps } from './types';

const Category = ({ name, id }: IProps) => {
  const [value, setValue] = useState(name);
  const queryClient = useQueryClient();

  const { mutate: patchCategoryMutate, isPending: patchIsPending } =
    useMutation({
      mutationFn: () => patchCategoryAdmin(id, { categoryName: value }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['admin', 'categories'] });
        notify('success', '수정 완료!!');
      },
      onError: (error) => notify('error', error.message),
    });

  const { mutate: deleteCategoryMutate, isPending: deleteIsPending } =
    useMutation({
      mutationFn: () => deleteCategoryAdmin(id),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['admin', 'categories'] }),
      onError: (error) => notify('error', error.message),
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-5 rounded-md border-2 border-dashed border-blue-200 px-5 py-3 transition-all hover:border-blue-400">
      <span className="text-medium">
        <input
          onChange={handleChange}
          value={value}
          className="w-[8rem]"
        />
        : {id}
      </span>
      <button
        onClick={() => patchCategoryMutate()}
        disabled={patchIsPending}
        type="button"
      >
        수정
      </button>
      <button
        onClick={() => deleteCategoryMutate()}
        disabled={deleteIsPending}
        type="button"
      >
        삭제
      </button>
    </div>
  );
};

export default Category;
