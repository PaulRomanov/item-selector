<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="content-card">
    <div v-if="title || $slots.header" class="content-card__header">
      <h3 v-if="title" class="content-card__title">{{ title }}</h3>
      <slot name="header" />
    </div>
    <div class="content-card__body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/_variables.scss';
@import '@/app/styles/_mixins.scss';

.content-card {
  @include card;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    margin-bottom: 15px;
    border-bottom: 1px solid $color-quaternary;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin: 0;
    font-size: 1.4em;
    color: $color-font-primary;
  }

  &__body {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
