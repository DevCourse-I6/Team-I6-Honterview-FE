import { v4 as uuidv4 } from 'uuid';

export const POST = async (request: Request) => {
  const { categories } = (await request.json()) as {
    categories: string[];
  };

  if (!categories) {
    return new Response(null, { status: 404 });
  }

  return Response.json(
    {
      message: 'ok',
      data: {
        questionContent: `${categories.join(' ')} + ${uuidv4()} 카테고리 기준으로 생성된 꼬리 질문입니다.`,
      },
    },
    { status: 200 },
  );
};
