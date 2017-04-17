<template>
  <div class="layout-padding">
    <ControllerCard
        v-for="item in controllers"
        :key="item.id"
        :controller="item"
      >
    </ControllerCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ControllerCard from './ControllerCard';

export default {
  data() {
    return {};
  },
  computed: {
    controllers() {
      return this.$store.state.controllers.all;
    },
    ...mapGetters({
      msg: 'controllers/msg',
    }),
  },
  components: {
    ControllerCard,
  },
};
</script>

<style>
</style>
