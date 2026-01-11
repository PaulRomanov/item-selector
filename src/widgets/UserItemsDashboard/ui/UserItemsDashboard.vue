<script setup lang="ts">
import { useUserItemsStore } from '@/entities/user-items/model/store';
import ItemGrid from '@/entities/item/ui/ItemGrid.vue';
import SelectedItemsList from '@/entities/item/ui/SelectedItemsList.vue';

const itemsStore = useUserItemsStore();
</script>

<template>
  <div class="user-items-dashboard">
    <div class="top-section">
        <SelectedItemsList
            :selectedItems="itemsStore.selectedItems"
            :limit="6"
            @remove="itemsStore.removeItem"
        >
            <template #title>Выбранные вещи</template>
        </SelectedItemsList>
    </div>

    <div class="bottom-section">
        <div class="items-container">
            <h3 class="list-title">Вещи у пользователя</h3>
            <ItemGrid
                :items="itemsStore.items"
                :selectedItems="itemsStore.selectedItems"
                @select="itemsStore.selectItem"
            />
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';
@import '@/app/styles/_mixins.scss';

.user-items-dashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}

.top-section {
    flex: 1 0 auto;
    flex-basis: 0;
    min-height: 310px;
}

.bottom-section {
    flex: 1 0 auto;
    flex-basis: 0;
}

.items-container {
    @include card;
    height: 100%;
}

.list-title {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.4em;
    color: $color-font-primary;
    border-bottom: 1px solid $color-quaternary;
    padding-bottom: 10px;
}
</style>
