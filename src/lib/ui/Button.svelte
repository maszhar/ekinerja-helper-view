<script lang="ts">
    let { class: clazz = "", children, onclick = undefined } = $props();
</script>

<button
    type="button"
    class="px-4 py-1.5 bg-orange-400 text-zinc-800 rounded-md {clazz}"
    onclick={() => onclick?.()}
>
    {@render children?.()}
</button>
