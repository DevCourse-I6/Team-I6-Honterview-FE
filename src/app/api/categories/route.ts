export const GET = () => {
  return Response.json(
    {
      message: 'ok',
      data: [
        { id: 1, name: 'Java' },
        { id: 2, name: 'Spring' },
        { id: 3, name: 'Backend' },
        { id: 4, name: 'Java' },
        { id: 5, name: 'Spring' },
        { id: 6, name: 'Backend' },
        { id: 7, name: 'Java' },
        { id: 8, name: 'Spring' },
        { id: 9, name: 'Backend' },
        { id: 10, name: 'Java' },
      ],
    },
    { status: 200 },
  );
};
