<template>
  <div
    class="navigation dontTouchMe"
    :class="{'open': flags.navigation}"
  >
    <div class="nav-top">
      <div
        class="logo"
        :class="{'open': flags.navigation}"
      >
        <logo />
      </div>
      <div class="nav-item">
        <fa :icon="['fa', 'file-code']"/>
        <p>Import md</p>
      </div>
      <div class="nav-item">
        <fa :icon="['fa', 'save']"/>
        <p>Save md</p>
      </div>
      <div class="nav-item">
        <fa :icon="['fa', 'file-powerpoint']"/>
        <p>Export pdf</p>
      </div>
    </div>

    <div class="nav-bottom">
      <div class="nav-item">
        <fa :icon="['far', 'question-circle']"/>
        <p>About</p>
      </div>
      <div class="nav-item">
        <fa :icon="['fa', 'cog']"/>
        <p>Setting</p>
      </div>
      <div
        @click="flags.navigation = !flags.navigation"
        class="nav-item"
        :class="{'open': flags.navigation}"
      >
        <fa :icon="['fa', 'chevron-right']"/>
        <p>Minimize</p>
      </div>
    </div>
  </div>
</template>


<script>
import logo from './logo.vue'
export default {
  components: {
    logo
  },

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s;
  &.open {
    width: 240px;
  }
}

.logo {
  width: 100%;
  position: relative;
  padding: 0 2px;
  margin-bottom: 30px;
  transition: .3s;
  svg {
    width: 100%;
  }
  &.open {
    padding: 0 20px;
  }
}

.nav-item {
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
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
    margin-right: 23px;
    path {
      fill: #fff;
    }
  }
  p {
    min-width: 80px;
    color: #fff;
  }
  &.open {
    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
