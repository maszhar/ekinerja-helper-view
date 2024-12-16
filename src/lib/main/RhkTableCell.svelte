<script lang="ts">
    let { head = false, rowspan = 1, children = null } = $props();
</script>

{#if head}
    <th class="border-r last:border-0" {rowspan}>
        {@render children?.()}
    </th>
{:else}
    <td class="border-r last:border-0 align-top" {rowspan}>
        {@render children?.()}
    </td>
{/if}
