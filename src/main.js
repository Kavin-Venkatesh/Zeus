import { createApp , ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import ToastService from 'primevue/toastservice';
import { getters } from './store/auth.js';

import Login from './views/Login/Login.vue';
import Dashboard from './views/admin/index.vue';
import AnalyticsPage from './views/admin/dashboard/components/AnalyticsPage.vue';
import AddBatch from './views/admin/dashboard/addBatch/addBatch.vue';
import BatchStudentDetails from './views/admin/studentDetails/batchStudentDetails/batchStudentDetails.vue';
import IndividualDetailsPage from './views/admin/studentDetails/detailsPage.vue';
import PendingdetailsPage from './views/admin/newRequests/pendingDetailsPage.vue';
import StudentHome from './views/students/index.vue';
import AddOffer from './views/students/addoffer/addOffer.vue';
import OrganisersPage from './views/organisers/index.vue';
import OrganisersAnalytics from './views/organisers/dashboard/Analytics';
import OrganiserBatchDetails from './views/organisers/batchDetails/batchDetails.vue';
import OrganisersIndividualDetailsPage from './views/organisers/detailspage/detailsPage.vue';


import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

// Router setup
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Login },
    {
      path: '/admin/home',
      component: Dashboard,
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/admin/analytics/:id',
      component: AnalyticsPage,
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/admin/addBatch',
      component: AddBatch,
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/admin/batchStudentDetails/:id',
      component: BatchStudentDetails,
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/detailsPage/:id',
      component: IndividualDetailsPage,
      meta: { requiresAuth: true, role: ['admin', 'organiser' , 'student'] },
    },
    {
      path: '/pendingdetailsPage/:id',
      component: PendingdetailsPage,
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/student/home',
      component: StudentHome,
      meta: { requiresAuth: true, role: 'student' },
    },
    {
      path: '/student/addoffer',
      component: AddOffer,
      meta: { requiresAuth: true, role: 'student' },
    },
    {
      path: '/organisers/home',
      component: OrganisersPage,
      meta: { requiresAuth: true, role: 'organiser' },
    },
    {
      path: '/organisers/analytics/:id',
      component: OrganisersAnalytics,
      meta: { requiresAuth: true, role: 'organiser' },
    },
    {
      path: '/organisers/batchStudentDetails/:id',
      component: OrganiserBatchDetails,
      meta: { requiresAuth: true, role: 'organiser' },
    },
    {
      path: '/organisers/detailsPage',
      component: OrganisersIndividualDetailsPage,
      meta: { requiresAuth: true, role: 'organiser' },
    },
  ],
});


router.beforeEach((to, from, next) => {
  isLoading.value = true;
  const isAuthenticated = getters.isAuthenticated();
  const userRole = getters.userRole();

  // console.log(`Navigating to ${to.path}. Authenticated: ${isAuthenticated}, Role: ${userRole}`);

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      alert('Please log in to continue.');
      return next('/');
    }

    const allowedRoles = Array.isArray(to.meta.role) ? to.meta.role : [to.meta.role];
    if (to.meta.role && !allowedRoles.includes(userRole)) {
      console.warn(`Access denied. Role '${userRole}' cannot access this route.`);
      return next('/');
    }
  }

  next();
});


router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});


const isLoading = ref(false);

const app = createApp(App);

app.provide('isLoading', isLoading);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app');
