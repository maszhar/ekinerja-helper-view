<script lang="ts">
    import { Application } from "$lib/app/Application";
    import Ribbon from "$lib/ui/Ribbon.svelte";
    import { onMount } from "svelte";
    import { MainRepository } from "./MainRepository";
    import RhkTable from "./RhkTable.svelte";
    import SkpList from "./SkpList.svelte";
    import type { Skp } from "./model/Skp";

    const app = Application.INSTANCE;
    const repository = new MainRepository(app.getRemoteSource());

    let page: "skp" = $state("skp");
    let skpList: Skp[] = $state([]);

    async function loadSkp() {
        const lSkpList = await repository.getSkpList();
        skpList = lSkpList;
    }

    onMount(async () => {
        await loadSkp();
    });
</script>

<main
    class="pt-32 min-h-screen bg-zinc-200 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300"
>
    <Ribbon />

    <div class="p-6">
        {#if page == "skp"}
            <h1 class="font-semibold text-xl mb-4">Pilih Tahun/Periode SKP</h1>
            <SkpList {skpList} />
        {:else}
            <RhkTable />
        {/if}
    </div>
</main>
