<script>
    import RibbonItem from "./RibbonItem.svelte";
</script>

<div
    class="fixed z-20 top-0 left-0 w-full flex flex-col h-32 p-1.5 bg-zinc-50 dark:bg-zinc-850 border-b border-zinc-300 dark:border-zinc-700"
>
    <div class="flex-none flex">
        <RibbonItem>Umum</RibbonItem>
        <RibbonItem>Isi Otomatis</RibbonItem>
    </div>
    <div
        class="border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 flex-grow rounded-sm"
    ></div>
</div>
