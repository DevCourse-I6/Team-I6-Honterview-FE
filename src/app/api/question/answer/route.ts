import { v4 as uuidv4 } from 'uuid';

export const POST = async (request: Request) => {
  const { answerContent } = (await request.json()) as {
    answerContent: string;
  };

  if (!answerContent) {
    return new Response(null, { status: 404 });
  }

  return Response.json(
    {
      message: 'ok',
      data: {
        questionContent: `${answerContent} + ${uuidv4()} 이전 답변 기준으로 생성된 꼬리 질문입니다.`,
      },
    },
    { status: 200 },
  );
};
