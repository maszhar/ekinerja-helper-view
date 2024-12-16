<script lang="ts">
    import SkpItem from "./SkpItem.svelte";

    let { skpList = [] } = $props();
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
>
    {#each skpList as skp}
        <SkpItem {skp} />
    {/each}
</div>
