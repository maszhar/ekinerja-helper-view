<script lang="ts">
    interface Properti {
        head?: boolean;
        rowspan?: number;
        colspan?: number;
        children?: any;
        class?: string;
    }
    let {
        head = false,
        rowspan = 1,
        colspan = 1,
        children = null,
        class: clazz = "",
    }: Properti = $props();
</script>

{#if head}
    <th class="border-r last:border-0 {clazz}" {rowspan} {colspan}>
        {@render children?.()}
    </th>
{:else}
    <td class="border-r last:border-0 align-top {clazz}" {rowspan} {colspan}>
        {@render children?.()}
    </td>
{/if}
