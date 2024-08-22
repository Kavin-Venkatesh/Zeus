<template>
  <div class="organiser_mainContainer">
    
    <NavBar :activeButton="activeButton" @set-active-button="setActiveButton" />
    
    <Dashboard v-show="activeButton === 'Dashboard'" />
    <OrgraniserStudentsDetails v-show="activeButton === 'Students Details'" />
  </div>
</template>

<script>
import NavBar from '../organisers/components/navBar.vue';
import Dashboard from './dashboard/organisersHome.vue';
import OrgraniserStudentsDetails from './studentdetails/studentDetails.vue';
export default {
  name: 'OrganisersPage',
  components: {
    Dashboard,
    NavBar,
    OrgraniserStudentsDetails,
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
.organiser_mainContainer {
    --background : #08080B;
    --text :  #D4D4D7;
    --secondary : #8540ca;
    --accent : #18191A;
    --accent2 : #4489DC;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    color: var(--text);
    overflow-y: auto;
    align-items: center;
    overflow-x: hidden;
}

.nav_button.active {
  color: #A55EED;
  background-color: #242526;
}
</style>