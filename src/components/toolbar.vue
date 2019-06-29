<template>
  <div class="toolbar dontTouchMe">
    <vuescroll :ops="ops">
      <div class="tool-item">
        <fa :icon="['fa', 'bold']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'strikethrough']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'italic']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'quote-left']"/>
      </div>

      <hr>

      <div class="tool-item">
        <p>Aa</p>
      </div>
      <div class="tool-item">
        <p>A</p>
      </div>
      <div class="tool-item">
        <p>a</p>
      </div>

      <hr>

      <div class="tool-item">
        <p>h1</p>
      </div>
      <div class="tool-item">
        <p>h2</p>
      </div>
      <div class="tool-item">
        <p>h3</p>
      </div>
      <div class="tool-item">
        <p>h4</p>
      </div>
      <div class="tool-item">
        <p>h5</p>
      </div>
      <div class="tool-item">
        <p>h6</p>
      </div>

      <hr>

      <div class="tool-item">
        <fa :icon="['fa', 'list-ul']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'list-ol']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'minus']"/>
      </div>

      <hr>

      <div class="tool-item">
        <fa :icon="['fa', 'link']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'anchor']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['far', 'image']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'code']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'terminal']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['fa', 'table']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['far', 'clock']"/>
      </div>
      <div class="tool-item">
        <fa :icon="['far', 'copyright']"/>
      </div>
    </vuescroll>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

@Component({
  components: {
    vuescroll,
  },
})
export default class Toolbar extends Vue {
  private ops: object = {
    vuescroll: {},
    scrollPanel: {},
    rail: {
      size: '0',
    },
    bar: {
      size: '0',
    },
  };
}
</script>
