import prisma from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// 1.
export const load: PageServerLoad = async ({ params: { id } }) => {
  // 2.
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });

  // 3.
  return { post };
};

export const actions = {
  publishPost: async ({ params: { id } }) => {
    await prisma.post.update({
      where: { id: Number(id) },
      data: {
        published: true,
      },
    });
    throw redirect(303, `/blog/p/${id}`);
  },

  deletePost: async ({ params: { id } }) => {
    await prisma.post.delete({
      where: { id: Number(id) },
    });
    throw redirect(303, `/blog`);
  },
} satisfies Actions;
