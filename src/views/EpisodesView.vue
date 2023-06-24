<script setup>
import { ref } from 'vue'
import axios from 'axios'

const episodes = ref([])
const apiRickMorty = async () => {
    const request = await axios.get('https://rickandmortyapi.com/api/episode')
    episodes.value = request.data.results
}
apiRickMorty()
</script>

<template>
    <main class="bg-red-700">
        <section class="container grid grid-cols-3 gap-10 py-28 max-w-6xl mx-auto">
            <article v-for="episode in episodes" :key="episode.id" class="shadow shadow-white flex flex-col hover:-translate-y-1 transition-transform">
                <header class="bg-red-400 py-5">
                    <h2 class="text-white font-semibold text-xl ps-4"> {{episode.name }}</h2>
                </header>
                <main class="bg-white py-10 ps-3 h-full">
                    <h3>Air Date: <span class="font-semibold">{{ episode.air_date }}</span></h3>
                    <h4>Created: <span class="font-semibold">{{ episode.created }}</span></h4>
                </main>
            </article>
        </section>
    </main>
</template>

<style scoped></style>