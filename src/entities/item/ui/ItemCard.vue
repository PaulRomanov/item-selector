<script setup lang="ts">
import type { Item } from '../model/types';

defineProps<{
  item: Item;
  selected?: boolean;
}>();
</script>

<template>
  <div
    class="item-card"
    :class="{ 'item-card--selected': selected }"
  >
    {{ item.name }}
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';

.item-card {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  &--selected {
    border-color: $color-primary;
    background-color: #f0f8ff;
  }
}
</style>
