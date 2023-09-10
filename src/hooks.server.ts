import type { Handle } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
