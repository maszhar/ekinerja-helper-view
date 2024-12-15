<script>
    import Button from "$lib/ui/Button.svelte";
    import LoginCard from "./LoginCard.svelte";

    async function openLoginEkinerja() {
        try {
            await fetch("/api/login-ekinerja", {
                method: "POST",
            });
        } catch (e) {
            console.error(e);
        }
    }
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
            />

            <LoginCard type="Google Drive" />
        </div>

        <Button class="mt-8">Mulai Aplikasi</Button>
    </div>
</main>
