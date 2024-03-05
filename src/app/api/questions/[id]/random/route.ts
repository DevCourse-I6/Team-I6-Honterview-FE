import { anotherQuestions } from '@/mocks/fixtures/questions';

export const GET = () => {
  return Response.json(
    {
      message: 'ok',
      data: anotherQuestions,
    },
    { status: 200 },
  );
};
