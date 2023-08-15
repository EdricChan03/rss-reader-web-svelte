import type { Creatable, Deletable, Entity } from '$lib/data/types/common';

export interface RssSource extends Entity, Creatable, Deletable {
  /** User-inputted title for this source. */
  title: string;
  /** URL to the RSS feed. */
  feedUrl: string;
  /** URL to the corresponding website. */
  webUrl: string;
  /** The source's icon. */
  icon?: string;
}
