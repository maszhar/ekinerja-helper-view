<script lang="ts">
    import type { PeriodePenilaian } from "$lib/main/model/PeriodePenilaian";
    import RibbonItem from "./RibbonItem.svelte";

    interface Properti {
        showPeriodePenilaianOptions: boolean;
        periodePenilaianList?: PeriodePenilaian[];
        onSelectPeriodePenilaian?: (
            periodePenilaian: PeriodePenilaian | null,
        ) => void;
    }

    let {
        showPeriodePenilaianOptions,
        periodePenilaianList,
        onSelectPeriodePenilaian,
    }: Properti = $props();

    function selectPeriodePenilaian(e: Event) {
        const periodePenilaianId = (e.target as HTMLSelectElement).value;
        if (!periodePenilaianId) {
            onSelectPeriodePenilaian?.(null);
            return;
        }

        const periodePenilaian = periodePenilaianList?.find(
            (item) => item.id == periodePenilaianId,
        );

        onSelectPeriodePenilaian?.(periodePenilaian || null);
    }
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
            {#if showPeriodePenilaianOptions}
                <div>Periode Penilaian</div>
                <select
                    class="w-40 text-black"
                    onchange={selectPeriodePenilaian}
                >
                    {#if periodePenilaianList == null}
                        <option value="">Memuat...</option>
                    {:else}
                        <option value="">--Pilih Periode--</option>
                        {#each periodePenilaianList as periodePenilaian}
                            <option value={periodePenilaian.id}>
                                {periodePenilaian.nama}
                            </option>
                        {/each}
                    {/if}
                </select>
            {/if}
        </div>
    </div>
    <div
        class="border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 flex-grow rounded-sm"
    ></div>
</div>
