<script setup lang="ts">
import { useAvailableItemsStore } from '@/entities/available-items/model/store';
import ItemGrid from '@/entities/item/ui/ItemGrid.vue';
import SelectedItemCard from '@/entities/item/ui/SelectedItemCard.vue';
import SplitView from '@/shared/ui/SplitView.vue';
import ContentCard from '@/shared/ui/ContentCard.vue';

const itemsStore = useAvailableItemsStore();
</script>

<template>
  <div class="available-items-dashboard">
    <SplitView>
      <template #top>
        <ContentCard title="Выбранная вещь">
          <SelectedItemCard :item="itemsStore.selectedItem" />
        </ContentCard>
      </template>

      <template #bottom>
        <ContentCard title="Вещи на выбор">
          <ItemGrid
            :items="itemsStore.items"
            :selectedItem="itemsStore.selectedItem"
            @select="itemsStore.selectItem"
          />
        </ContentCard>
      </template>
    </SplitView>
  </div>
</template>

<style scoped lang="scss">
.available-items-dashboard {
  height: 100%;
}
</style>
