<template>
  <div class="homeMainContainer">
    <DataTable />
    <div class="addButtonContainer">
      <button class="AddButton" @click="showModal = true">
        <i class="pi pi-plus" style="font-size: 1.1rem; cursor: pointer;"></i>
      </button>

      <UserModal :isVisible="showModal" @close="showModal = false">
        <template v-slot:header>
          <h2>Add User</h2>
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label for="name">Name</label>
            <input class="editInput" v-model="form.name" type="text" id="name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <label for="registerNumber">Register Number (or) <br /> Staff Id</label>
            <input class="editInput" v-model="form.registerNumber" type="text" id="registerNumber" placeholder="Register Number" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input class="editInput" v-model="form.email" type="email" id="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <select class="inputSelection" v-model="form.role" id="role" required>
              <option value="admin">Admin</option>
              <option value="organiser">Organiser</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-container">
          <input class="editInput" :type="passwordFieldType" v-model="form.password" placeholder="Password" required />
          <button type="button" class="togglePasswordButton" @click="togglePassVisibility">
            <i :class="passwordFieldType === 'password' ? 'pi pi-eye' : 'pi pi-eye-slash'"></i>
          </button>
        </div>
            
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input class="editInput" v-model="form.confirmPassword" :type="passwordFieldType" id="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <div class="form-group" v-if="form.role === 'student'">
            <label for="batch">Batch</label>
            <select class="inputSelection" id="batch" v-model="selectedBatch" required>
              <option v-for="batch in batches" :key="batch._id" :value="batch._id">{{ batch.batchName }}</option>
            </select>
          </div>
        </template>
        <template v-slot:footer>
          <div class="buttonContainer">
            <button class="CancelButton" @click="showModal = false">Cancel</button>
            <button class="SaveButton" @click="handleInputValues">Save</button>
          </div>
        </template>
      </UserModal>
    </div>
    <Toast ref="toast" />
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import DataTable from "./components/dataTable.vue";
import UserModal from "../../../../components/Modal.vue";
import Toast from 'primevue/toast';
import axios from 'axios';

export default {
  name: "AvailableUsers",
  components: {
    DataTable,
    UserModal,
    Toast,
  },
  data() {
    return {
      showModal: false,
      form: {
        name: "",
        registerNumber: "",
        email: "",
        role: "student",
        password: "",
        confirmPassword: "",
      },
      passwordFieldType: "password",
      batches: [],
      selectedBatch: null
    };
  },
  methods: {
    togglePassVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    },
    validatePassword(password) {
      const minLength = 6;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasDigit = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (password.length < minLength) {
        return `Password must be at least ${minLength} characters long`;
      }
      if (!hasUpperCase) {
        return 'Password must contain at least one uppercase letter';
      }
      if (!hasLowerCase) {
        return 'Password must contain at least one lowercase letter';
      }
      if (!hasDigit) {
        return 'Password must contain at least one digit';
      }
      if (!hasSpecialChar) {
        return 'Password must contain at least one special character';
      }
      return '';
    },
    showToast(severity, summary, detail) {
      this.$toast.add({ severity, summary, detail, life: 3000 });
    },
    async handleInputValues() {
      const email = this.form.email;
      const password = this.form.password;
      const confirmPassword = this.form.confirmPassword;

      let isValid = true;

      if (!this.validateEmail(email)) {
        this.showToast('error', 'Validation Error', 'Enter a valid Email ID');
        isValid = false;
      }

      const passwordValidationError = this.validatePassword(password);
      if (passwordValidationError) {
        this.showToast('error', 'Validation Error', passwordValidationError);
        isValid = false;
      }

      if (password !== confirmPassword) {
        this.showToast('error', 'Validation Error', 'Passwords do not match');
        isValid = false;
      }

      if (isValid) {
        try {

          await axios.post('http://localhost:5000/auth/register', {
            name: this.form.name,
            registerNumber: this.form.registerNumber,
            email: email,
            role: this.form.role,
            password: password,
            confirmPassword: confirmPassword,
            batch: this.selectedBatch
          });

          this.form = {
            name: "",
            registerNumber: "",
            email: "",
            role: "student",
            password: "",
            confirmPassword: "",
          }; 
          this.showToast('success', 'Success', 'User added successfully');
          this.showModal = false;
        } catch (error) {
          this.showToast('error', 'Error', 'Failed to add user');
          console.error(error);
        }
      }
    },

    async availableBatches() {
      try {
        const response = await axios.get('http://localhost:5000/batches/getBatch', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.batches = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.$toast = this.$refs.toast;
    this.availableBatches();
  },
};
</script>

<style scoped>
@import '../home/AvailableUsers.css';
</style>