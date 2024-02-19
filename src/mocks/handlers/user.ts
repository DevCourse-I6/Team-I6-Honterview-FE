import { http, HttpResponse } from 'msw';

import { users as userData } from '../fixtures/user';

const API_BASE_POINT = process.env.NEXT_PUBLIC_API_BASE_URL;
const users = [...userData];

const invitationHandlers = [
  http.get(`${API_BASE_POINT}users`, () => {
    return HttpResponse.json({ users }, { status: 200 });
  }),
];

export default invitationHandlers;
