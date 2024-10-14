<template>
  <div class="main_container">
    <div class="form_container">
      <h1 class="loginHeading">Login</h1>
      <h1 class="login_subheading">BIT Career Connect</h1>
      <img :src="Logo" alt="Logo" class="logo_image" />
      <form @submit.prevent="submitForm">
        <div class="form_fields">
          <input class="form_fieldsinput" type="text" v-model="email" placeholder="Email" required />
          <input class="form_fieldsinput" type="password" v-model="password" placeholder="Password" required />
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
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:5000/auth/login', {
          email: this.email,
          password: this.password,
        });
        const { token, user } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userId', user.id); // Store user ID

        this.$toast.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Logged in Successfully',
          life: 3000,
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        if (user.role === 'admin') {
          this.$router.push('/admin/home');
        } else if (user.role === 'user') {
          console.log('student');
          this.$router.push('/student/home');
        } else if (user.role === 'organiser') {
          this.$router.push('/organisers/home');
        } else {
          this.$router.push('/');
        }
      } catch (error) {
        console.error(error);
        this.$toast.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Please check your credentials and try again',
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
      if (userRole === 'admin') {
        this.$router.push('/admin/home');
      } else if (userRole === 'student') {
        this.$router.push('/student/home');
      } else if (userRole === 'organizer') {
        this.$router.push('/organisers/home');
      } else {
        this.$router.push('/');
      }
    }
  },
};
</script>

<style>
@import './style.css';
</style>