<script setup>
import { ref } from 'vue'
import axios from 'axios'

const characters = ref([])

const apiCharacters = async () => {
    const request = await axios.get('https://rickandmortyapi.com/api/character')
    characters.value = request.data.results
}
apiCharacters()
</script>

<template>
    <main class="container mx-auto py-32">
        <section class="grid grid-cols-3 gap-10 mx-auto max-w-6xl">
            <article v-for="character in characters" :key="character.id"
                class="flex flex-col bg-sky-100 shadow-lg shadow-black rounded-md hover:-translate-y-1 transition-transform">
                <header class="bg-green-800 py-5">
                    <h2 class="text-white font-semibold text-xl ps-5">{{ character.name }}</h2>
                </header>
                <main class="flex justify-center p-6 bg-green-400">
                    <img :src="character.image" alt="image">
                </main>
                <footer class="flex items-start justify-start flex-col px-4 py-6 bg-slate-200 gap-y-2">
                    <div class="flex mx-auto gap-20">
                        <h3>Specie: <span class="font-semibold">{{ character.species }}</span></h3>
                        <h4>Gender: <span class="font-semibold">{{ character.gender }}</span></h4>
                    </div>
                    <h5 class="mx-auto font-semibold">{{ character.origin.name }}</h5>
                </footer>
            </article>
        </section>
    </main>
</template>


<style scoped></style>