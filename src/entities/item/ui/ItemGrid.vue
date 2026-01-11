<script setup lang="ts">
import type { Item } from '../model/types';

defineProps<{
  items: Item[];
  selectedItem?: Item | null;
  selectedItems?: Item[];
}>();

const emit = defineEmits<{
  (e: 'select', item: Item): void;
}>();

const isSelected = (item: Item, selectedItem?: Item | null, selectedItems?: Item[]) => {
  if (selectedItems) {
    return selectedItems.some(i => i.id === item.id);
  }
  return selectedItem?.id === item.id;
};
</script>

<template>
  <ul class="item-grid">
    <li
      v-for="item in items"
      :key="item.id"
      class="item-grid__item"
      :class="{ 'item-grid__item--selected': isSelected(item, selectedItem, selectedItems) }"
      @click="emit('select', item)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';

.item-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  &__item {
    padding: 10px;
    margin-bottom: 0;
    border-radius: 5px;
    background-color: $color-tertiary;
    color: $color-font-secondary;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: $color-quaternary;
    }

    &--selected {
      background-color: $color-accent;
      color: $color-primary;
      font-weight: bold;

      &:hover {
        background-color: $color-accent;
        cursor: not-allowed;
      }
    }
  }
}
</style>
