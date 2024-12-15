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
    import { onDestroy, onMount } from "svelte";
    import LoginCard from "./LoginCard.svelte";
    import { Application } from "$lib/app/Application";
    import { EKinerjaSession } from "$lib/app/EKinerjaSession";
    import { EKinerjaTokens } from "$lib/app/EKinerjaTokens";

    const globalData = Application.INSTANCE.getGlobalData();
    const ekinerjaSession$$ = globalData.getEkinerjaSession$$();

    async function openLoginEkinerja() {
        try {
            await fetch("/api/login-ekinerja", {
                method: "POST",
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function verifyEkinerjaTokens(data: any) {
        try {
            const response = await fetch(
                "https://kinerja.bkn.go.id/api/pegawai/detil",
                {
                    headers: {
                        Authorization: `Bearer ${data.accessToken}`,
                        "X-Xsrf-Token": data.xsrfToken,
                    },
                },
            );
            if (response.status != 200) {
                throw new Error(response.status.toString());
            }

            const respBody = await response.json();

            const newEkinerjaSession = new EKinerjaSession(
                new EKinerjaTokens(
                    data.accessToken,
                    data.xsrfToken,
                    data.sessionAuth,
                    data.cookieAuth,
                ),
                respBody.data.nama,
            );
            globalData.setEkinerjaSession(newEkinerjaSession);
        } catch (e) {
            console.error(e);
        }
    }

    onMount(() => {
        (window as any).verifyEkinerjaTokens = verifyEkinerjaTokens;
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            (window as any).verifyEkinerjaTokens = undefined;
        }
    });
</script>

<main class="w-full min-h-screen bg-zinc-100 dark:bg-zinc-900 p-8">
    <div
        class="flex flex-col border border-zinc-300 dark:border-zinc-600 max-w-lg mx-auto rounded-md bg-white dark:bg-zinc-800 p-6 text-zinc-700 dark:text-zinc-300"
    >
        <h1 class="font-semibold text-2xl text-black dark:text-white">Login</h1>

        <div class="flex flex-col gap-6 mt-6">
            <LoginCard
                type="E-Kinerja"
                onlogin={() => {
                    openLoginEkinerja();
                }}
                onlogout={() => {
                    globalData.clearEkinerjaSession();
                }}
                account={$ekinerjaSession$$?.name}
            />

            <LoginCard type="Google Drive" />
        </div>

        <Button class="mt-8">Mulai Aplikasi</Button>
    </div>
</main>
