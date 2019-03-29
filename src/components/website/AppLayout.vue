<template>
 <h2>Hola Mundo</h2>
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
