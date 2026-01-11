<script setup lang="ts">
import type { Item } from '../model/types';

defineProps<{
  item: Item | null;
}>();
</script>

<template>
  <div class="selected-item-content">
    <div v-if="item" class="details">
      <p class="detail-row">ID: {{ item.id }}</p>
      <p class="detail-row">Название: {{ item.name }}</p>
    </div>
    <p v-else class="empty-message">Ничего не выбрано</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';

.selected-item-content {
  height: 100%;
}

.details {
  padding: 10px;
  background-color: $color-secondary;
  border-radius: 5px;
}

.detail-row {
  margin: 5px 0;
}

.empty-message {
  color: $color-font-faded;
  padding: 15px;
  background-color: #262626;
  border-radius: 5px;
}
</style>
