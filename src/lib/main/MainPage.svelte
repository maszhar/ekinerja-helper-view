<script lang="ts">
    import { Application } from "$lib/app/Application";
    import Ribbon from "$lib/ui/Ribbon.svelte";
    import { onMount } from "svelte";
    import { MainRepository } from "./MainRepository";
    import RhkTable from "./RhkTable.svelte";
    import SkpList from "./SkpList.svelte";
    import type { Skp } from "./model/Skp";
    import type { PeriodePenilaian } from "./model/PeriodePenilaian";

    const app = Application.INSTANCE;
    const repository = new MainRepository(app.getRemoteSource());

    let page: "skp" | "rhk" = $state("skp");
    let skpList: Skp[] = $state([]);
    let selectedSkp: Skp | null = $state(null);
    let selectedPeriodePenilaian: PeriodePenilaian | null = $state(null);

    let redrawing = $state(false);

    async function loadSkpList() {
        const lSkpList = await repository.getSkpList();
        skpList = lSkpList;
    }

    async function onSelectSkp(skp: Skp) {
        page = "rhk";

        await repository.getRhkList(skp);
        await repository.getPeriodePenilaianList(skp);

        selectedSkp = skp;
    }

    async function onSelectPeriodePenilaian(
        periodePenilaian: PeriodePenilaian | null,
    ) {
        if (periodePenilaian && selectedSkp) {
            await repository.getRencanaAksiList(selectedSkp, periodePenilaian);
            refreshRhkUi();
        }
        selectedPeriodePenilaian = periodePenilaian;
    }

    function refreshRhkUi() {
        redrawing = true;
        setTimeout(() => {
            redrawing = false;
        }, 10);
    }

    onMount(async () => {
        await loadSkpList();
    });
</script>

<main
    class="pt-32 min-h-screen bg-zinc-200 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 overflow-x-auto"
>
    <Ribbon
        showPeriodePenilaianOptions={page != "skp"}
        periodePenilaianList={selectedSkp?.periodePenilaianList}
        {onSelectPeriodePenilaian}
    />

    <div class="p-6">
        {#if page == "skp"}
            <h1 class="font-semibold text-xl mb-4">Pilih Tahun/Periode SKP</h1>
            <SkpList {skpList} {onSelectSkp} />
        {:else if page == "rhk" && selectedSkp}
            {#if !redrawing}
                <RhkTable rhkList={selectedSkp.rhkList} />
            {/if}
        {/if}
    </div>
</main>
