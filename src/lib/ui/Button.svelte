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
    let {
        class: clazz = "",
        children,
        onclick = undefined,
        color = "primary",
        disabled = false,
    } = $props();
</script>

<button
    type="button"
    class="px-4 py-1.5 {color == 'primary'
        ? 'bg-orange-400 text-zinc-800'
        : color == 'red'
          ? 'bg-red-700 text-zinc-100'
          : ''} disabled:bg-zinc-100 disabled:text-zinc-300 dark:disabled:bg-zinc-700 dark:disabled:text-zinc-500 rounded-md {clazz}"
    onclick={() => onclick?.()}
    {disabled}
>
    {@render children?.()}
</button>
