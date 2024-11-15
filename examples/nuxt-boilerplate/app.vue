<script setup lang="ts">
useHead({
  title: 'Nuxt Boilerplate',
  meta: [
    {
      name: 'dscvr:canvas:version',
      content: 'vNext',
    },
  ],
  htmlAttrs: {
    class: 'overflow-hidden',
  },
  bodyAttrs: {
    class: 'bg-gray-900 text-white flex items-center justify-center p-4 m-0',
  },
});
</script>

<template>
  <ClientOnly>
    <intro />
  </ClientOnly>
</template>
