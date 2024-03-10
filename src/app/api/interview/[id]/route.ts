import { interviews } from '@/mocks/fixtures/interview';

export const GET = (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const { id } = params;

  if (!id) {
    return new Response(null, { status: 404 });
  }

  const result = interviews.filter(
    ({ interviewId }) => String(interviewId) === id,
  );

  return Response.json({ message: 'ok', data: result[0] }, { status: 200 });
};
