export const POST = () => {
  // const { pathname } = new URL(request.url);
  // const id = pathname.split('/')[3];

  return Response.json(
    {
      message: 'ok',
      data: {
        questionHeartCount: 5,
        isHearted: false,
      },
    },
    { status: 200 },
  );
};
