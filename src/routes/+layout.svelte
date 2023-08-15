<script lang="ts">
	import NavBar from '$lib/components/nav-bar/NavBar.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>RSS Reader</title>
</svelte:head>

<NavBar />

<main>
  <slot />
</main>
