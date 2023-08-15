<script lang="ts">
	import FeedList from '$lib/components/feeds/feed-list/FeedList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-6 flex flex-col gap-3 dark:text-white" aria-labelledby="feeds">
  <h2 id="feeds" class="text-2xl font-medium">Feeds</h2>
	<FeedList folders={data.folders} />
</section>
