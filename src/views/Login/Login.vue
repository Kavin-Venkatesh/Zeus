<template>
  <div class="main_container">
    <div class="form_container">
      <h1 class="loginHeading">Login</h1>
      <h1 class="login_subheading">BIT Career Connect</h1>
      <img :src="Logo" alt="Logo" class="logo_image" />
      <form @submit.prevent="submitForm">
        <div class="form_fields">
          <input class="form_fieldsinput" type="text" v-model="email" placeholder="Email" required />
          <div class="password_container">
            <input class="form_fieldsinput" :type="passwordFieldType" v-model="password" placeholder="Password" required />
            <button type="button" class="togglePassword" @click="togglePasswordVisibility">
                <i :class="passwordFieldType === 'password' ? 'pi pi-eye' : 'pi pi-eye-slash'"></i>
            </button>
          </div>
          <button class="loginButton" type="submit">Login</button>
          <a class="forgotPassword" href="#">Forgot Password?</a>
        </div>
      </form>
      <Toast />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Logo from '../../assets/logo.png';
import Toast from 'primevue/toast';
import { store } from '../../store/auth.js'; // Import the store

export default {
  name: 'LoginForm',
  components: {
    Toast,
  },
  data() {
    return {
      email: '',
      password: '',
      Logo: Logo,
      passwordFieldType: 'password',
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:5000/auth/login', {
          email: this.email,
          password: this.password,
        });

        const { token, user } = response.data;

        // Update state and localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userId', user.id);

        // Sync the store state with localStorage
        store.state.token = token;
        store.state.userRole = user.role;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Toast message for success
        this.$toast.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Logged in Successfully',
          life: 3000,
        });

        // Ensure the state is updated before navigating
        await this.$nextTick();

        // Navigate based on user role
        switch (user.role) {
          case 'admin':
            console.log('Redirecting to /admin/home');
            this.$router.push('/admin/home');
            break;
          case 'student':
            console.log('Redirecting to /student/home');
            this.$router.push('/student/home');
            break;
          case 'organiser':
            console.log('Redirecting to /organisers/home');
            this.$router.push('/organisers/home');
            break;
          default:
            this.$toast.add({
              severity: 'warn',
              summary: 'Role Undefined',
              detail: 'Please contact support.',
              life: 3000,
            });
        }
      } catch (error) {
        console.error('Login failed:', error);
        this.$toast.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Please check your credentials and try again.',
          life: 3000,
        });
      }
    },
  },
  mounted() {
    document.title = 'BCC';

    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.$nextTick(() => {
        switch (userRole) {
          case 'admin':
            this.$router.push('/admin/home');
            console.log("from mounted page");
            break;
          case 'student':
            this.$router.push('/student/home');
            console.log("from mounted page");
            break;
          case 'organiser':
            this.$router.push('/organisers/home');
            console.log("from mounted page");
            break;
          default:
            console.warn('Invalid user role.');
        }
      });
    } else {
      console.warn('No token found. Redirecting to login.');
    }
  },
};
</script>

<style>
@import './style.css';
</style>

