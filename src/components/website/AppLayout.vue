<template>
  <vuestic-layout v-layout>
    <header></header>
    <main
      slot="content"
      id="content"
      class="content va-layout gutter--lg fluid"
      role="main"
    >
        <vuestic-pre-loader
        v-show="isLoading"
        class="pre-loader"
      />
      <router-view/>
    </main>
    <footer></footer>
    <span slot="footer">
      ©2018. Made by&nbsp;<a href="#" target="_blank"> xyz</a>
    </span>
  </vuestic-layout>
</template>

<script>
import VuesticLayout from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import Header from './app-navbar/Header'
import Footer from './app-navbar/Footer'
import Layout from '../../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout-web-site',
  components: {
    VuesticLayout,
    Header,
    Footer
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
