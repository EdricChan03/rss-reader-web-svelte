import { createFolders } from '$lib/data/feeds/mocks';
import type { RssFolder } from '$lib/data/feeds/types/folder';
import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    folders: createFolders()
  } satisfies { folders: RssFolder[] };
}) satisfies PageLoad;
