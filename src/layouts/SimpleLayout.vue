<template>
  <div class="simple-layout">
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.simple-layout {
  max-width: 400px;
  // margin: -4rem auto 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
</style>
