<script setup lang="ts">
import { TapestryInterface } from '@dscvr-one/tapestry-client-sdk'
defineProps<{
  user: TapestryInterface.Lifecycle.User
}>()
</script>

<template>
  <div>
    <p>User ID: {{ user.id }}</p>
    <p>User Name:</p>
    <img v-if="user.avatar" :src="user.avatar" alt="User Avatar" />
  </div>
</template>
