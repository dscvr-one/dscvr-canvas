<script setup lang="ts">
import { CanvasInterface } from '@dscvr-one/canvas-client-sdk';
defineProps<{
  user: CanvasInterface.Lifecycle.User;
}>();

defineEmits<{
  (e: 'open'): void;
}>();
</script>

<template>
  <a class="flex gap-4 group hover:text-indigo-400 hover:cursor-pointer" @click="$emit('open')">
    <img v-if="user.avatar" :src="user.avatar" alt="User Avatar" class="size-20 rounded-full" />

    <div class="flex flex-col gap-1">
      <h1 class="text-lg font-bold">User Info</h1>
      <p>
        <b>User ID: </b><span class="text-gray-300 group-hover:text-indigo-300">{{ user.id }}</span>
      </p>
      <p>
        <b>User Name: </b
        ><span class="text-gray-300 group-hover:text-indigo-300">{{ user.username }}</span>
      </p>
    </div>
  </a>
</template>
