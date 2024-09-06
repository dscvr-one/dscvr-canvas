<template>
  <div class="flex flex-col items-center justify-center">
    <div v-if="!$canvasClient?.isReady" class="text-center">Loading ...</div>
    <div v-else-if="$canvasUser" class="flex gap-1">
      <b>Username </b>
      <span class="text-gray-300 group-hover:text-indigo-300">
        {{ $canvasUser.username }}
      </span>
    </div>
    <send-sol v-if="$canvasClient?.isReady" />
  </div>
</template>
