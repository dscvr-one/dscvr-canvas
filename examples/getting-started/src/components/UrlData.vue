<script setup lang="ts">
defineProps<{
  urlData: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <h1 class="text-lg font-bold">URL Data</h1>
    <p>
      <b>Data:</b> <span class="text-gray-300">{{ urlData }}</span>
    </p>
  </div>
</template>
