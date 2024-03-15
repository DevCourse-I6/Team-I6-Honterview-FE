import { http, HttpResponse } from 'msw';

import { anotherQuestions, question } from '../fixtures/questions';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const questionHandlers = [
  // 면접 질문 상세 조회
  http.get(`${API_BASE_URL}questions/:id`, ({ params, request }) => {
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
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(
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
  }),

  // 꼬리 질문 조회
  http.get(`${API_BASE_URL}questions/:id/random`, () => {
    return HttpResponse.json(
      {
        message: 'ok',
        data: anotherQuestions,
      },
      { status: 200 },
    );
  }),
];

export default questionHandlers;
