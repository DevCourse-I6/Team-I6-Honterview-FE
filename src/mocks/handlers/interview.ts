import { http, HttpResponse } from 'msw';

import { interviews as interviewsData } from '../fixtures/interview';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const interviews = [...interviewsData];

const interviewsHandlers = [
  // 면접 정보 상세 조회
  http.get(`${API_BASE_URL}interview/:id`, ({ params }) => {
    const { id } = params;

    if (!id) {
      return new HttpResponse(null, { status: 404 });
    }

    const result = interviews.filter(({ interviewId }) => interviewId === id);

    return HttpResponse.json(
      { message: 'ok', data: result[0] },
      { status: 200 },
    );
  }),
];

export default interviewsHandlers;
