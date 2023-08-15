<script lang="ts">
	import type { RssSource } from '$lib/data/feeds/types/source';

	export let source: RssSource;
</script>

<a
	href={source.webUrl}
	class="transition-all p-2 border
  border-slate-500 dark:border-slate-400
  hover:bg-slate-200 dark:hover:bg-slate-700
  active:bg-slate-300 dark:active:bg-slate-600
  focus:outline-none focus:ring focus:ring-slate-300 rounded"
>
	<li class="flex gap-3 items-center">
		{#if source.icon}
			<img src={source.icon} alt={source.title} class="h-8" />
		{/if}
		{source.title}
	</li>
</a>
