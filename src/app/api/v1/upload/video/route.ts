export async function PUT(request: Request) {
  const formData = await request.formData();
  const videoFile = formData.get('videoFile');
  const uploadUrl = formData.get('uploadUrl');

  if (!(videoFile instanceof File) || typeof uploadUrl !== 'string') {
    throw new Error('Missing videoFile or uploadUrl');
  }

  const response = await fetch(uploadUrl, {
    body: videoFile,
    method: 'PUT',
    headers: {
      'Content-Type': 'video/webm',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return Response.json({ success: false }, { status: response.status });
  }

  return Response.json({ success: true }, { status: 200 });
}
