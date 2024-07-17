<script setup lang="ts">
import { CanvasInterface } from '@dscvr-one/canvas-client-sdk';
defineProps<{
  content: CanvasInterface.Lifecycle.Content;
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <h1 class="text-lg font-bold">Content Info</h1>
    <p>
      <b>ID:</b> <span class="text-gray-300">{{ content.id }}</span>
    </p>
    <template v-if="content.portalId">
      <p>
        <b>Portal Id: </b> <span class="text-gray-300">{{ content.portalId }}</span>
      </p>
      <p>
        <b>Portal Name: </b> <span class="text-gray-300">{{ content.portalName }}</span>
      </p>
    </template>
  </div>
</template>
