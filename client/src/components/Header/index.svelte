<script>
    import { page } from '$app/stores';
</script>
<ul>
    <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
    <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
</ul>