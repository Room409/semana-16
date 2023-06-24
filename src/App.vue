<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full bg-yellow-100 fixed shadow-xl z-50">
    <nav class="container mx-auto py-3 flex items-center">
      <div class="pe-10">
        <RouterLink to="/"> <img class="w-32" src="./assets/Rick_and_Morty.svg.png" alt=""></RouterLink>
      </div>
      <ul class="flex gap-x-5 font-semibold text-slate-900">
        <li>
        </li>
        <li>
          <RouterLink to="/characters">Chracter</RouterLink>
        </li>
        <li>
          <RouterLink to="/episodes">Episodes</RouterLink>
        </li>
        <li>
          <RouterLink to="/locations" >Location</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="bg-green-600">
    <RouterView />
  </main>
</template>

<style scoped>
.router-link-active {
  color: red;
}
</style>
