<template>
  <div>
    <!-- Hamburger Menu Icon for Mobile -->
    <button class="hamburger-menu" @click="toggleSidebar">
      <i :class="sidebarOpen ? 'pi pi-times' : 'pi pi-bars'" style="font-size: 1.5rem"></i>
    </button>

    <!-- Navbar / Sidebar -->
    <div class="admin_navbar" :class="{ 'active-sidebar': sidebarOpen }">
      <div class="navButtonContainer">
        <button href="" class="nav_button" :class="{ active: activeButton === 'Dashboard' }"
        @click.prevent="$emit('set-active-button', 'Dashboard')">
          <i class="pi pi-home" style="font-size: 1.1rem; margin: 0 0 0 1vw;"></i>
        <p>  Dashboard</p>
        </button>
        <button href="" class="nav_button" :class="{ active: activeButton === 'Students Details' }"
        @click.prevent="$emit('set-active-button', 'Students Details')">
          <i class="pi pi-user" style="font-size: 1.1rem ; margin: 0 0 0 1vw"></i>
          <p>  Student Details</p>
        </button>
        <button href="" class="nav_button" :class="{ active: activeButton === 'Add User' }"
        @click.prevent="$emit('set-active-button', 'Add User')">
          <i class="pi pi-user-plus" style="font-size: 1.1rem; margin: 0 0 0 1vw"></i>
          <p>  Add User</p>
        </button>
        <button href="" class="nav_button" :class="{ active: activeButton === 'New Requests' }"
        @click.prevent="$emit('set-active-button', 'New Requests')">
          <i class="pi pi-bell" style="font-size: 1rem; margin: 0 0 0 1vw"></i>
          <p>  New Requests</p>
        </button>
      </div>

      <div class="logout_container">
        <button @click="handleLogout" class="nav_button" style="margin-top: 10px;">
          <i class="pi pi-sign-out" style="font-size: 1.1rem"></i>
          <p> Logout </p>
        </button>
      </div>
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
  },
  data() {
    return {
      sidebarOpen: false
    };
  },
  watch: {
    activeButton(newVal) {
      localStorage.setItem('activeButton', newVal);
    }
  },
  created() {
    const savedActiveButton = localStorage.getItem('activeButton');
    if (savedActiveButton) {
      this.$emit('set-active-button', savedActiveButton);
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    handleLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userId');
      localStorage.removeItem('activeButton');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@import './layout.css';

.hamburger-menu {
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1000;
}

.admin_navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background-color: #18191A;
  color: var(--text);
  margin: 0;
  transition: transform 0.3s ease-in-out;
}


.nav_button.active{
    color: #A55EED;
  background-color: #242526;
}

/* Sidebar visibility for mobile */
.admin_navbar.active-sidebar {
  transform: translateX(0);
}

@media screen and (max-width: 1000px) {
  .admin_navbar {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 70vw;
    height: 100vh;
    background-color: #18191A;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5vh;
    transform: translateX(-100%);
  }

  .hamburger-menu {
    display: block;
  }

  .admin_navbar.active-sidebar {
    display: flex;
  }

  .navButtonContainer {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 45%;
    /* background-color: white; */
  }

  .nav_button{
    width : 50vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p{
      font-size: 1.2rem;
      margin : 1vw 0 0 4vw;
    }
  }

  .logout_container {
    justify-content: center;
    width: 100%;
  }
}
</style>
