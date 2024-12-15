<script lang="ts">
    let { children } = $props();
</script>

<button class="px-4 py-2 text-center text-sm hover:cursor-pointer">
    {@render children?.()}
</button>
