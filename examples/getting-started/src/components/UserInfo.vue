<script setup lang="ts">
import { TapestryInterface } from '@dscvr-one/tapestry-client-sdk'
defineProps<{
  user: TapestryInterface.Handshake.User
}>()
</script>

<template>
  <div>
    <h1>User Info</h1>
    <p>User ID: {{ user.id }}</p>
    <p>User Name: {{ user.username }}</p>
    <img v-if="user.avatar" :src="user.avatar" alt="User Avatar" />
  </div>
</template>
