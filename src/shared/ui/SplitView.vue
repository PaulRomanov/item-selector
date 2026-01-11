<template>
  <div class="split-view">
    <div class="split-view__top">
      <slot name="top" />
    </div>
    <div class="split-view__bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.split-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  &__top {
    flex: 1 0 auto;
    flex-basis: 0;
    min-height: 310px;
  }

  &__bottom {
    flex: 1 0 auto;
    flex-basis: 0;
  }
}
</style>
