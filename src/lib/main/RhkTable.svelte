<script>
    import { Indikator } from "./model/Indikator";
    import RhkTableCell from "./RhkTableCell.svelte";

    let { rhkList } = $props();
</script>

<table class="w-full">
    <thead class="sticky top-0">
        <tr class="text-sm border">
            <RhkTableCell head>No</RhkTableCell>
            <RhkTableCell head>Rencana Hasil Kerja (RHK)</RhkTableCell>
            <RhkTableCell head>Indikator</RhkTableCell>
            <RhkTableCell head>Deskripsi Indikator</RhkTableCell>
        </tr>
    </thead>

    <tbody>
        {#each rhkList as rhk, i}
            <tr class="border">
                <RhkTableCell rowspan={rhk.indikatorList?.length || 1}>
                    {i + 1}
                </RhkTableCell>
                <RhkTableCell rowspan={rhk.indikatorList?.length || 1}>
                    {rhk.deskripsi}
                </RhkTableCell>
                {#if rhk.indikatorList && rhk.indikatorList.length > 0}
                    <RhkTableCell>
                        {rhk.indikatorList[0].aspek}
                    </RhkTableCell>
                    <RhkTableCell>
                        {rhk.indikatorList[0].deskripsi}
                    </RhkTableCell>
                {:else}
                    <RhkTableCell />
                    <RhkTableCell />
                {/if}
            </tr>

            {#if rhk.indikatorList && rhk.indikatorList.length > 1}
                {#each rhk.indikatorList as indikator, i}
                    {#if i > 0}
                        <tr class="border">
                            <RhkTableCell>
                                {indikator.aspek}
                            </RhkTableCell>
                            <RhkTableCell>
                                {indikator.deskripsi}
                            </RhkTableCell>
                        </tr>
                    {/if}
                {/each}
            {/if}
        {/each}
    </tbody>
</table>
