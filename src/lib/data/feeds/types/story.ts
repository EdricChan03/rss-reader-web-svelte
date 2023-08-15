import type { Creatable, Entity } from '$lib/data/types/common';

export interface RssStory extends Entity, Creatable {
  /** Title of this story. */
  title: string;
  /** Content of this story. */
  content: string;
  /** Image source of this story, if any. */
  imageSrc?: string;
  /** URL to this story. */
  url: string;

  /** The date this story was read/manually marked as read. */
  readDate?: Date;
  /** The date this story was saved. */
  savedDate?: Date;
}
