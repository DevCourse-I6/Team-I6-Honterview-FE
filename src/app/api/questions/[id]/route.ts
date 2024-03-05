import { question } from '@/mocks/fixtures/questions';

export const GET = (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page'))!;
  const { id } = params;

  const answerData = question.answers.data;
  const resAnswerData = [];

  for (let i = page * 5 - 4; i < page * 5 + 1; i += 1) {
    if (!answerData[i - 1]) break;
    resAnswerData.push(answerData[i - 1]);
  }

  if (!id) {
    return new Response(null, { status: 404 });
  }

  return Response.json(
    {
      message: 'ok',
      data: {
        ...question,
        answers: {
          ...question.answers,
          currentPage: page,
          data: resAnswerData,
        },
      },
    },
    { status: 200 },
  );
};
