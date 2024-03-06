export async function getQuestionsList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questions/list`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}