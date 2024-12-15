<script lang="ts">
    let clazz = "";
    export { clazz as class };
</script>

<button
    type="button"
    class="px-4 py-1.5 bg-orange-400 text-zinc-800 rounded-md {clazz}"
>
    <slot />
</button>
