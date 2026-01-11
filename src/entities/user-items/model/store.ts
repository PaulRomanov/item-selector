import { defineStore } from 'pinia';
import type { Item } from '@/entities/item/model/types';
import { MAX_SELECTED_USER_ITEMS } from '@/shared/config/constants';

interface State {
  items: Item[];
  selectedItems: Item[];
}

export const useUserItemsStore = defineStore('user-items', {
  state: (): State => ({
    items: [],
    selectedItems: [],
  }),
  actions: {
    setItems(items: Item[]) {
      this.items = items;
    },
    selectItem(item: Item) {
      if (
        this.selectedItems.length < MAX_SELECTED_USER_ITEMS &&
        !this.selectedItems.some((selected) => selected.id === item.id)
      ) {
        this.selectedItems.push(item);
      }
    },
    removeItem(item: Item) {
      this.selectedItems = this.selectedItems.filter((selected) => selected.id !== item.id);
    },
  },
});
