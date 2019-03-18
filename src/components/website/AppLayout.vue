<template>
  <layout-web-site v-layout>
      
      <main  
        slot="content"
        id="content"
        class="content va-layout gutter--lg fluid"
        role="main">  
      </main>
  </layout-web-site>
</template>

<script>
import LayoutWebSite from '../../vuestic-theme/vuestic-components/vuestic-layout/LayoutWebSite'
import Layout from '../../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    LayoutWebSite
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>
