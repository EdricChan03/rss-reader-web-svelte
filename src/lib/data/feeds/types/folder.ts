import type { Creatable, Deletable, Entity, HasNestedEntities } from '$lib/data/types/common';
import type { RssSource } from './source';
import type { RssStory } from './story';

export enum RssFolderEntryType {
  Story,
  Source
};

export type RssFolderEntry = {
  type: RssFolderEntryType.Source;
  data: RssSource;
} | {
  type: RssFolderEntryType.Story;
  data: RssStory;
};

export interface RssFolder extends Entity, Creatable, Deletable, HasNestedEntities<RssFolder> {
  /** User-inputted title for this folder. */
  title: string;
  /** The folder's icon. */
  icon?: string;
  /** List of entries in this folder. */
  entries: RssFolderEntry[];
}
