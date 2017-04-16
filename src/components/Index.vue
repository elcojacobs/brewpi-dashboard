<template>
<q-layout>
    <div slot="header" class="toolbar">
      <!-- opens drawer below
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title :padding="1">
        BrewPi Dashboard
      </q-toolbar-title>
      <q-tabs slot="navigation">
        <q-tab icon="settings" route="/settings" exact>Settings</q-tab>
        <q-tab icon="help" route="/help" exact>Help</q-tab>
      </q-tabs>
    </div>
    
    <drawer></drawer>

    <router-view class="layout-view"></router-view>

    <!-- Footer
    <div slot="footer" class="toolbar"></div>
    -->
  </q-layout>
</template>

<script>
import drawer from './Drawer';

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    this.$nextTick(() => {
    });
  },
  beforeDestroy() {
  },
  components: {
    drawer,
  },
};
</script>

<style lang="styl">
</style>
