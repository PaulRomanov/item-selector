import { defineStore } from 'pinia';
import type { Item } from '@/entities/item/model/types';

interface State {
  items: Item[];
  selectedItem: Item | null;
}

export const useAvailableItemsStore = defineStore('available-items', {
  state: (): State => ({
    items: [],
    selectedItem: null,
  }),
  actions: {
    setItems(items: Item[]) {
      this.items = items;
    },
    selectItem(item: Item) {
      this.selectedItem = item;
    },
  },
});
