<!--
  Project Name: E-Kinerja Helper
  Author: Fikri Mustofa
  Created: 2025

  License: MIT
  
  Copyright (c) 2025, Fikri Mustofa
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
-->

<script lang="ts">
    import Button from "$lib/ui/Button.svelte";
    import VerifiedIcon from "$lib/ui/icon/VerifiedIcon.svelte";

    const {
        onlogin = () => {},
        onlogout = () => {},
        type = "",
        class: clazz = "",
        account = "",
    } = $props();
</script>

<div
    class="rounded-md p-4 bg-zinc-100 dark:bg-zinc-700 border border-zinc-400 dark:border-zinc-500 flex flex-col {clazz}"
>
    <div class="flex gap-4">
        <div class="flex-grow">
            <div class="font-semibold text-black dark:text-white">{type}</div>
            <div class="text-sm mt-0.5">
                {#if !account}
                    Status: <span class="text-red-500">Belum login</span>
                {:else}
                    Status: <span class="text-green-500">Terotentikasi</span>
                    a.n. {account}
                {/if}
            </div>
        </div>
        <div class="flex-none">
            {#if account}
                <VerifiedIcon />
            {/if}
        </div>
    </div>
    {#if !account}
        <Button class="mt-4" onclick={onlogin}>Login</Button>
    {:else}
        <Button class="mt-4" onclick={onlogout} color="red">Logout</Button>
    {/if}
</div>
