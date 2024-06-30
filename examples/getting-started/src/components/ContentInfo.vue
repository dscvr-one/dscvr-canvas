<script setup lang="ts">
import { TapestryInterface } from '@dscvr-one/tapestry-client-sdk'
defineProps<{
  content: TapestryInterface.Handshake.Content
}>()
</script>

<template>
  <div>
    <h1>Content Info</h1>
    <p>ID: {{ content.id }}</p>
    <template v-if="content.portalId">
      <p>Portal Id: {{ content.portalId }}</p>
      <p>Portal Name: {{ content.portalName }}</p>
    </template>
  </div>
</template>
