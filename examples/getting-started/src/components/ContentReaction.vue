<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  reaction?: string;
}>();

const displayText = computed(() => {
  if (props.reaction === undefined) {
    return undefined;
  }
  return props.reaction ? `User reacted with "${props.reaction}"` : 'Reaction cleared!';
});
</script>

<template>
  <div v-if="displayText" class="wrapper h-6 text-green-500">
    <transition>
      <span :key="displayText">{{ displayText }}</span>
    </transition>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
