<template>
  <div class="vuestic-layout"
       v-resize
       :class="classObject"
  >
    <slot></slot>
    <div class="content-wrap" id="content-wrap">
      <slot name="content"></slot>
    </div>
    <div class="made-by-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Resize from '../../../directives/ResizeHandler'
export default {
  name: 'layout-web-site',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    resize: Resize,
  },
  computed: {
    classObject: function () {
      return {
        'layout-fixed': this.fixed,
      }
    },
  },
}
</script>

<style lang="scss">

</style>
