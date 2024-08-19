<template>
    <div class = "homeMainContainer">
        <DataTable/>
        <div class = "addButtonContainer">
            <button class= "AddButton" @click="showModal = true">  <i class="pi pi-plus" style="font-size: 1.1rem; cursor: pointer;"></i></button>

      <UserModal :isVisible="showModal" @close="showModal = false">
        <template v-slot:header>
          <h2>Add User</h2>
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label for="name">Name</label>
            <input class="editInput" ref="name" type="text" id="name" placeholder="Name" required>
          </div>
          <div class="form-group">
            <label for="registerNumber">Register Number (or) <br/> Staff Id</label>
            <input class="editInput" ref="registerNumber" type="text" id="registerNumber" placeholder="Register Number" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input class="editInput" ref="email" type="email" id="email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <select class="inputSelection" for="role" id="role" required>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input class="editInput" ref="password" type="password" id="password" placeholder="Password" required>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input class="editInput" ref="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm Password" required>
          </div>
        </template>
        <template v-slot:footer>
            <div class="buttonConatiner">
                <button class= "CancelButton" @click="showModal = false">Cancel</button>
                <button class= "SaveButton" @click = "handleInputValues"> Save</button>
            </div>
        </template>
      </UserModal>
    
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
import DataTable from './components/dataTable.vue';
import UserModal from '../../../../components/Modal.vue';

export default {
  name: 'AvailableUsers',
  components: {
    DataTable,
    UserModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    handleInputValues(){
        console.log("Name: ", this.$refs.name.value);   
        console.log("Register Number: ", this.$refs.registerNumber.value);
        console.log("Email: ", this.$refs.email.value);
        console.log("Role: ", document.getElementById("role").value);
        console.log("Password: ", this.$refs.password.value);
        console.log("Confirm Password: ", this.$refs.confirmPassword.value);

    }
  }
};
</script>

<style scoped>   
@import '../home/AvailableUsers.css';
</style>
