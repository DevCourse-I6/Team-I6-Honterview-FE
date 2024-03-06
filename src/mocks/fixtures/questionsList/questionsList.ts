import { IQuestionsList } from '@/types/questionsList/questionsList';

export const questionsList: IQuestionsList = {
  message: 'ok',
  data: {
    currentPage: 1,
    pageSize: 5,
    totalElements: 100,
    startIndex: 1,
    endIndex: 5,
    hasPreviousPage: false,
    hasNextPage: true,
    data: [
      {
        id: '1',
        content: 'JVM의 역할에 대해 설명해주세요.1',
        heartsCount: 1,
        categoryNames: ['JavaScript', 'Java'],
      },
      {
        id: '2',
        content: 'JVM의 역할에 대해 설명해주세요.2',
        heartsCount: 2,
        categoryNames: ['Python'],
      },
      {
        id: '3',
        content: 'JVM의 역할에 대해 설명해주세요.3',
        heartsCount: 3,
        categoryNames: ['React'],
      },
      {
        id: '4',
        content: 'JVM의 역할에 대해 설명해주세요.4',
        heartsCount: 4,
        categoryNames: ['Angular'],
      },
      {
        id: '5',
        content: 'JVM의 역할에 대해 설명해주세요.5',
        heartsCount: 5,
        categoryNames: ['Vue.js'],
      },
      {
        id: '6',
        content: 'JVM의 역할에 대해 설명해주세요.6',
        heartsCount: 6,
        categoryNames: ['Node.js'],
      },
    ],
  },
};
