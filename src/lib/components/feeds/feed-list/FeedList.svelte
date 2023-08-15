<script lang="ts">
	import FolderIcon from 'lucide-svelte/dist/svelte/icons/folder.svelte';
	import PlusCircleIcon from 'lucide-svelte/dist/svelte/icons/plus-circle.svelte';

	import type { RssFolder } from '$lib/data/feeds/types/folder';
	import FeedListFolder from './FeedListFolder.svelte';

	export let folders: RssFolder[];
</script>

<ul class="flex flex-col gap-3 dark:text-white">
	{#each folders as folder}
		<FeedListFolder {folder} />
	{/each}
</ul>
