import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  // 1.
  default: async ({ request }) => {
    const data = await request.formData();

    let title = data.get('title');
    let content = data.get('content');
    let authorEmail = data.get('authorEmail');

    // 2. 빈 값 체크
    if (!title || !content || !authorEmail) {
      return fail(400, { content, authorEmail, title, missing: true });
    }

    // 3. 타입 체크
    if (
      typeof title != 'string' ||
      typeof content != 'string' ||
      typeof authorEmail != 'string'
    ) {
      return fail(400, { incorrect: true });
    }

    // 4. 새로운 포스트 생성
    await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { email: authorEmail } },
      },
    });

    //5. 리다이렉트
    throw redirect(303, `/blog`);
  },
} satisfies Actions;
