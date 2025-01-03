import { reactive } from 'vue';

// Define the reactive store
const store = reactive({
  state: {
    token: localStorage.getItem('token') || null,
    userRole: localStorage.getItem('userRole') || null, // e.g., 'admin', 'student', 'organiser'
  },
});

// Sync localStorage changes with the store
const syncStateWithLocalStorage = () => {
  store.state.token = localStorage.getItem('token') || null;
  store.state.userRole = localStorage.getItem('userRole') || null;
};

// Define getters
const getters = {
  isAuthenticated: () => !!store.state.token,
  userRole: () => store.state.userRole,
};

// Watch for localStorage updates
window.addEventListener('storage', syncStateWithLocalStorage);

// Export the store and getters
export { store, getters };
