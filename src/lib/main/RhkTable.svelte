<script lang="ts">
    import type { Rhk } from "./model/Rhk";
    import RhkTableCell from "./RhkTableCell.svelte";

    interface Properti {
        rhkList?: Rhk[];
    }
    let { rhkList = [] }: Properti = $props();
</script>

<table class="w-full">
    <thead class="sticky top-0">
        <tr class="text-sm border">
            <RhkTableCell head>No</RhkTableCell>
            <RhkTableCell head>Rencana Hasil Kerja (RHK)</RhkTableCell>
            <RhkTableCell head>Indikator</RhkTableCell>
            <RhkTableCell head>Deskripsi Indikator</RhkTableCell>
            <RhkTableCell head class="whitespace-nowrap">Di isi</RhkTableCell>
            <RhkTableCell head>Rencana Aksi</RhkTableCell>
            <RhkTableCell head>Target</RhkTableCell>
            <RhkTableCell head>Satuan</RhkTableCell>
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
                <RhkTableCell rowspan={rhk.indikatorList?.length || 1}
                ></RhkTableCell>
                <RhkTableCell rowspan={rhk.indikatorList?.length || 1}>
                    {#if rhk.rencanaAksi}
                        {rhk.rencanaAksi.deskripsi}
                    {/if}
                </RhkTableCell>
                <RhkTableCell rowspan={rhk.indikatorList?.length || 1}>
                    {#if rhk.rencanaAksi}
                        {rhk.rencanaAksi.target}
                    {/if}
                </RhkTableCell>
                <RhkTableCell rowspan={rhk.indikatorList?.length || 1}>
                    {#if rhk.rencanaAksi}
                        {rhk.rencanaAksi.satuanTarget}
                    {/if}
                </RhkTableCell>
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
