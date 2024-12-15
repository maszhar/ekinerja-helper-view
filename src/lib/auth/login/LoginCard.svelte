<script lang="ts">
    import Button from "$lib/ui/Button.svelte";

    const { onlogin = () => {}, type = "", class: clazz = "" } = $props();
</script>

<div
    class="rounded-md p-4 bg-zinc-100 dark:bg-zinc-700 border border-zinc-400 dark:border-zinc-500 flex flex-col {clazz}"
>
    <div>
        <div>
            <div class="font-semibold text-black dark:text-white">{type}</div>
            <div class="text-sm mt-0.5">Status: Belum login</div>
        </div>
        <div></div>
    </div>
    <Button class="mt-4" onclick={onlogin}>Login</Button>
</div>
