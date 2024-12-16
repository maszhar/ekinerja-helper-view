<script lang="ts">
    let { head = false, children } = $props();
</script>

{#if head}
    <th class="border-r last:border-0">
        {@render children?.()}
    </th>
{:else}
    <td class="border-r last:border-0">
        {@render children?.()}
    </td>
{/if}
