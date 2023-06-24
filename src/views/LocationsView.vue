<script setup>
import { ref } from 'vue'
import axios from 'axios'

const locations = ref([])
const apiRickMortyLocation = async () => {
    const request = await axios.get('https://rickandmortyapi.com/api/location')
    locations.value = request.data.results
}
apiRickMortyLocation()
</script>

<template>
    <main class="bg-slate-950">
        <section class="container grid grid-cols-3 gap-10 py-28 max-w-6xl mx-auto">
            <article v-for="location in locations" :key="location.id"
                class="shadow shadow-white flex flex-col hover:-translate-y-1 transition-transform">
                <header class="bg-slate-600 py-5">
                    <h2 class="text-white font-semibold text-xl ps-4"> {{ location.name }}</h2>
                </header>
                <main class="bg-white py-10 ps-3 h-full">
                    <h3>Type: <span class="font-semibold">{{ location.type }}</span></h3>
                    <h4>Dimension: <span class="font-semibold">{{ location.dimension }}</span></h4>
                    <h5>Created: <span class=font-semibold>{{ location.created }}</span></h5>
                </main>
            </article>
        </section>
    </main>
</template>

<style></style>