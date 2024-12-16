<script lang="ts">
    import { DateUtils } from "$lib/utils/DateUtils";

    let { skp, onSelectSkp = () => {} } = $props();
</script>

<button
    class="bg-zinc-800 flex items-stretch gap-4 p-4 rounded-md border border-zinc-600"
    onclick={() => onSelectSkp(skp)}
>
    <div
        class="flex-none flex justify-center items-center w-16 bg-green-400 text-zinc-800 font-semibold rounded-sm"
    >
        {skp.tahun}
    </div>
    <div class="flex flex-col">
        <div class="text-left flex">
            <div class="w-14">Awal</div>
            : {DateUtils.formatLocalDate(skp.periodeAwal)}
        </div>
        <div class="text-left flex">
            <div class="w-14">Akhir</div>
            : {DateUtils.formatLocalDate(skp.periodeAkhir)}
        </div>
    </div>
</button>
