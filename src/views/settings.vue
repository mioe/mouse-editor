<template>
  <div class="view view-settings">
    <top-header :title="'Settings'"/>
    <div class="view-body">
      <div class="setting-item">
        <div class="left">
          <h3>Markdown stylesheet</h3>
          <p>Set current markdown style</p>
        </div>
        <div class="right">
          <select v-model="selectedStyle">
            <option
              v-for="s in styles" :key="s"
              :value="s"
              :selected="currentStyle === s"
            >
              {{ s }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import topHeader from '../components/header.vue'
export default {
  components: {
    topHeader
  },

  computed: {
    ...mapGetters({
      styles: 'getAllStyles',
      currentStyle: 'getCurrentStyle'
    }),

    selectedStyle: {
      get () { return this.currentStyle },
      set (value) { this.setStyle(value) }
    }
  },

  methods: {
    ...mapActions({
      setStyle: 'setStyle'
    }),
  }
}
</script>


<style>
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

select {
  height: 40px;
  border-radius: 3px;
  border: 2px solid #3f4448;
  background: transparent;
  padding: 0 15px;
  color: #fff;
}
</style>
