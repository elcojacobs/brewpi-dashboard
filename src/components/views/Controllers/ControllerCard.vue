<template>
  <div class="card">
    <div class="card-title bg-secondary text-white">
      <span>{{controller.name}}</span>
    </div>
    <div class="card-content">
      {{controller.description}}
    </div>
    <div class="card-actions">
      <div v-if="controller.connected">
        <i class="on-left">check</i>Connected
      </div>
      <div v-else>
        <i class="on-left">close</i> Disconnected
      </div>
      <div class="auto"></div>
      <div>
        <i v-if="isWifi" class="on-left">network_wifi</i>
        <i v-if="isSerial" class="on-left">usb</i>
        {{controller.connection.location}}
      </div>
    </div>

      
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  data() {
    return {};
  },
  props: {
    controller: VueTypes.shape({
      id: VueTypes.integer.isRequired,
      name: String,
      connected: Boolean,
      description: String,
      connection: VueTypes.shape({
        type: String,
        location: String,
      }),
    }),
  },
  computed: {
    isWifi() {
      return this.controller.connection.type === 'wifi';
    },
    isSerial() {
      return this.controller.connection.type === 'serial';
    },
  },
};
</script>

<style>
</style>
