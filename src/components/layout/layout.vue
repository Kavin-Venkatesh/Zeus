<template>
    <div class="admin_navbar">
      <div class="navButtonContainer">
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
        <button href="" class="nav_button" :class="{ active: activeButton === 'Add User' }"
        @click.prevent="$emit('set-active-button', 'Add User')">
          <i class="pi pi-user-plus" style="font-size: 1.1rem"></i>
          Add User
        </button>
        <button href="" class="nav_button" :class="{ active: activeButton === 'New Requests' }"
        @click.prevent="$emit('set-active-button', 'New Requests')">
          <i class="pi pi-bell" style="font-size: 1rem"></i>
          New Requests
        </button>

      </div>
    </div>

</template>

<script>
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
@import './layout.css';

.nav_button.active{
    color: #A55EED;
  background-color: #242526;
}

</style>
