<template>
  <div
    class="navigation"
    :class="{'open': flags.navigation}"
  >
    <div class="nav-top">
      <div class="nav-item">
        <fa :icon="['far', 'bookmark']"/>
      </div>
    </div>

    <div class="nav-bottom">
      <div
        @click="flags.navigation = !flags.navigation"
        class="nav-item"
      >
        <fa :icon="['far', 'question-circle']"/>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      flags: {
        navigation: false
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.navigation {
  position: relative;
  width: 64px;
  height: 100vh;
  background: #24292e;
  padding: 30px 10px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s;
  &.open {
    width: 240px;
  }
}

.nav-item {
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  flex: 0 0 auto;
  padding: 8px 12px;
  &.active {
    background: #3f4448;
  }
  &:hover {
    background: #303437;
  }
  svg {
    height: 20px;
    width: 20px;
    path {
      fill: rgb(255, 255, 255);
    }
  }
}
</style>
