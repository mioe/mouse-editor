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
      <div @click="$emit('import')" class="nav-item">
        <fa :icon="['fa', 'file-code']"/>
        <p>Import md</p>
      </div>
      <div @click="$emit('save')" class="nav-item">
        <fa :icon="['fa', 'save']"/>
        <p>Save md</p>
      </div>
      <div @click="$emit('export')" class="nav-item">
        <fa :icon="['fa', 'file-powerpoint']"/>
        <p>Export pdf</p>
      </div>
    </div>

    <div class="nav-bottom">
      <router-link to="/about" class="nav-item">
        <fa :icon="['far', 'question-circle']"/>
        <p>About</p>
      </router-link>
      <router-link to="/settings" class="nav-item">
        <fa :icon="['fa', 'cog']"/>
        <p>Setting</p>
      </router-link>
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


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import logo from '../components/logo.vue';

@Component({
  components: {
    logo,
  },
})
export default class Navigation extends Vue {
  private flags: object = {
    navigation: false,
  };
}
</script>
