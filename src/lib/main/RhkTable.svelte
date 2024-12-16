<script>
    import RhkTableCell from "./RhkTableCell.svelte";

    let { rhkList } = $props();
</script>

<table class="w-full">
    <thead class="sticky top-0">
        <tr class="text-sm border">
            <RhkTableCell head>No</RhkTableCell>
            <RhkTableCell head>Rencana Hasil Kerja (RHK)</RhkTableCell>
        </tr>
    </thead>

    <tbody>
        {#each rhkList as rhk, i}
            <tr class="border">
                <RhkTableCell>{i + 1}</RhkTableCell>
                <RhkTableCell>{rhk.deskripsi}</RhkTableCell>
            </tr>
        {/each}
    </tbody>
</table>
