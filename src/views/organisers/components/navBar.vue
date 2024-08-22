<template>
  <div class="organiser_navbar">
    <div class="nav_buttonContainer">
      <button href="" class="nav_button" :class="{ active: activeButton === 'Dashboard' }"
        @click.prevent="$emit('set-active-button', 'Dashboard')">
        <i class="pi pi-home" style="font-size: 1.1rem"></i>
        Dashboard
      </button>
      <button href="" class="nav_button" :class="{ active: activeButton === 'Students Details' }"
        @click.prevent="$emit('set-active-button', 'Students Details')">
        <i class="pi pi-user" style="font-size: 1.1rem "></i>
        Students Details
      </button>
    </div>
  </div>
</template>

<script>

import './navBar.css';
export default {
  name: 'NavBar',
  props: {
    activeButton: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import './navBar.css';

.nav_button.active {
  color: #A55EED;
  background-color: #242526;
}
</style>