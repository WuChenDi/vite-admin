<template>
  Home组件
  <div>
    <span>Title</span>
    <input v-model="title" type="text" />
  </div>

  <Suspense>
    <template #default>
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { useTitle } from "@vueuse/core";
const title = useTitle('dd');
</script>
