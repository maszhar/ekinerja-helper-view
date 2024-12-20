<script lang="ts">
    import type { PeriodePenilaian } from "$lib/main/model/PeriodePenilaian";
    import RibbonItem from "./RibbonItem.svelte";

    interface Properti {
        periodePenilaianList?: PeriodePenilaian[];
    }

    let { periodePenilaianList }: Properti = $props();
</script>

<div
    class="fixed z-20 top-0 left-0 w-full flex flex-col h-32 p-1.5 bg-zinc-50 dark:bg-zinc-850 border-b border-zinc-300 dark:border-zinc-700"
>
    <div class="flex-none flex justify-between">
        <div class="flex">
            <RibbonItem>Umum</RibbonItem>
            <RibbonItem>Isi Otomatis</RibbonItem>
        </div>
        <div class="flex items-center gap-2 pr-4">
            <div>Periode Penilaian</div>
            <select class="w-40 text-black">
                {#if periodePenilaianList == null}
                    <option>Memuat...</option>
                {:else}
                    <option>--Pilih Periode--</option>
                    {#each periodePenilaianList as periodePenilaian}
                        <option value={periodePenilaian.id}>
                            {periodePenilaian.nama}
                        </option>
                    {/each}
                {/if}
            </select>
        </div>
    </div>
    <div
        class="border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 flex-grow rounded-sm"
    ></div>
</div>
