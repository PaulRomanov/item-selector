<script setup lang="ts">
import type { Item } from '../model/types';

defineProps<{
  selectedItems: Item[];
  limit?: number;
}>();

const emit = defineEmits<{
  (e: 'remove', item: Item): void;
}>();
</script>

<template>
  <div class="selected-items-list-container">
    <h3 class="title">
      <slot name="title">Selected Items</slot>
      <span v-if="limit">({{ selectedItems.length }}/{{ limit }})</span>
    </h3>
    <ul v-if="selectedItems.length > 0" class="list">
      <li v-for="item in selectedItems" :key="item.id" class="item">
        <span class="item-name">{{ item.name }}</span>
        <button @click="emit('remove', item)" class="remove-button">х</button>
      </li>
    </ul>
    <p v-else class="empty-message">Ничего не выбрано</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';

.selected-items-list-container {
  height: 100%;
}

.title {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.4em;
  border-bottom: 1px solid $color-quaternary;
  padding-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 0;
  border-radius: 5px;
  background-color: $color-tertiary;

  &-name {
    flex-grow: 1;
  }
}

.remove-button {
  padding: 8px 12px;
  background-color: $color-red;
  color: $color-font-primary;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: darken($color-red, 10%);
  }
}

.empty-message {
  color: $color-font-faded;
  padding: 15px;
  background-color: $color-tertiary;
  border-radius: 5px;
}
</style>
