<template>
  <div class="header">
    <div
      @click="$router.push({path: '/'})"
      class="btn-back"
    >
      <fa :icon="['fa', 'arrow-left']"/>
    </div>
    <h2>{{ title }}</h2>
  </div>
</template>


<script>
export default {
  props: {
    title: String
  }
}
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}

.btn-back {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 2px solid #3f4448;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    background: #303437;
  }
}
</style>
