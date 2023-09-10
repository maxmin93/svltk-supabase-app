// src/routes/drafts/+page.server.ts
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // 1.
  const response = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
    orderBy: { createdAt: 'desc' },
  });

  // 2.
  return { drafts: response };
};
