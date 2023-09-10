import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase/client';

export const load: PageServerLoad = async ({ params }) => {
  const { data } = await supabase.from('countries').select();
  return {
    countries: data ?? [],
  };
};
