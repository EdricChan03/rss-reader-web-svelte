<script lang="ts">
	import FolderIcon from 'lucide-svelte/dist/svelte/icons/folder.svelte';
	import PlusCircleIcon from 'lucide-svelte/dist/svelte/icons/plus-circle.svelte';
	import { RssFolderEntryType, type RssFolder } from '$lib/data/feeds/types/folder';
	import FeedListSourceEntry from './entry/FeedListSourceEntry.svelte';

	export let folder: RssFolder;
</script>

<li class="border border-emerald-500 rounded p-6 flex flex-col gap-2">
  <slot name="folder-title">
    <div class="flex gap-2 items-center border p-3 rounded">
      <span class="p-3 rounded-full border">
        <FolderIcon />
      </span>
      <span class="font-bold mr-auto">{folder.title}</span>
      <button
        class="transition-all p-3 border rounded-full
        border-blue-400 dark:border-blue-500
        hover:bg-blue-200 dark:hover:bg-blue-800
        active:bg-blue-300 dark:active:bg-blue-700
        focus:outline-none focus:ring focus:ring-blue-600"
      >
        <PlusCircleIcon />
      </button>
    </div>
  </slot>
  {#if folder.children}
    {#each folder.children as subFolder}
      <svelte:self folder={subFolder} />
    {/each}
  {/if}
  <ul class="flex flex-col gap-2">
    {#each folder.entries as entry}
      {#if entry.type === RssFolderEntryType.Source}
        {@const source = entry.data}
        <slot name="source-title">
          <FeedListSourceEntry {source} />
        </slot>
      {/if}
    {/each}
  </ul>
</li>
