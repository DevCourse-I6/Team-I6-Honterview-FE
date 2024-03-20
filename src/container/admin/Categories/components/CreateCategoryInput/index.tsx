import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import Input from '@/components/input';
import { notify } from '@/components/toast';
import { createCategoryAdmin } from '@/libs/services/admin';

const CreateCategoryInput = () => {
  const [value, setValue] = useState('');
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => createCategoryAdmin({ categoryName: value }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['admin', 'categories'] }),
    onError: (error) => notify('error', error.message),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <Input className="h-[30px] w-[200px]">
        <Input.Text
          value={value}
          onChange={handleChange}
        />
      </Input>
      <button
        onClick={() => mutate()}
        type="button"
        className="rounded-xl border-[1px] px-6 py-2"
      >
        카테고리 생성
      </button>
    </div>
  );
};

export default CreateCategoryInput;
