<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserItemsStore } from '@/entities/user-items/model/store';
import { useAvailableItemsStore } from '@/entities/available-items/model/store';
import UserItemsDashboard from '@/widgets/UserItemsDashboard/ui/UserItemsDashboard.vue';
import AvailableItemsDashboard from '@/widgets/AvailableItemsDashboard/ui/AvailableItemsDashboard.vue';
import userItemsData from '@/shared/api/fixtures/userItems.json';
import availableItemsData from '@/shared/api/fixtures/availableItems.json';

const userItemsStore = useUserItemsStore();
const availableItemsStore = useAvailableItemsStore();

const loading = ref(false);
const error = ref<string | null>(null);

const loadItems = async () => {
  loading.value = true;
  error.value = null;
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    userItemsStore.setItems(userItemsData);
    availableItemsStore.setItems(availableItemsData);
  } catch (err: any) {
    error.value = 'Не удалось загрузить данные.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadItems();
});
</script>

<template>
  <div class="home-page">
    <h1 class="home-page__title">Item Selector</h1>
    <div v-if="loading">Загрузка данных...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-if="!error" class="home-page__content">
      <div class="home-page__column">
        <UserItemsDashboard />
      </div>
      <div class="home-page__column">
        <AvailableItemsDashboard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';

.home-page {
  padding: 20px;

  &__title {
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    gap: 20px;
  }

  &__column {
     flex: 1;
  }
}

.error-message {
  color: $color-red;
  margin-top: 20px;
}
</style>
