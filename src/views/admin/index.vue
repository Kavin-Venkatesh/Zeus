<template>
  <div class="admin_mainContainer">
    
    <NavBar :activeButton="activeButton" @set-active-button="setActiveButton" />

    <Dashboard v-show="activeButton === 'Dashboard'" />
    <StudentsDetails v-show="activeButton === 'Students Details'" />
    <AvailableUsers v-show="activeButton === 'Add User'"/>
    <NewRequests v-show = "activeButton === 'New Requests'"/>
  </div>
</template>

<script>
import Dashboard from './dashboard/dashboard.vue';
import StudentsDetails from './studentDetails/studentsDetails.vue';
import NavBar from '../../components/layout/layout.vue';
import AvailableUsers from './adduser/home/AvailableUsers.vue';
import NewRequests from './newRequests/newRequests.vue';
import 'primeicons/primeicons.css';
import './dashboard/dashboard.css';
export default {
  name: 'HomePage',
  components: {
    Dashboard,
    StudentsDetails,
    NavBar,
    AvailableUsers,
    NewRequests
  },
  data() {
    return {
      activeButton: 'Dashboard'
    }
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
    }
  }
}
</script>

<style scoped>
@import './dashboard/dashboard.css';

.nav_button.active {
  color: #A55EED;
  background-color: #242526;
}
</style>
