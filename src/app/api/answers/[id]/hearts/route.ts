export const POST = () => {
  // const { pathname } = new URL(request.url);
  // const id = pathname.split('/')[3];
  // console.log(id);

  return Response.json(
    {
      message: 'ok',
      data: {
        isHearted: true,
      },
    },
    { status: 200 },
  );
};
