import { shallowMount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import LoginForm from '../views/Login/Login.vue'; // Adjust the path as needed

jest.mock('axios');

describe('LoginForm.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoginForm, {
      global: {
        mocks: {
          $toast: {
            add: jest.fn(),
          },
          $router: {
            push: jest.fn(),
          },
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the login form', () => {
    expect(wrapper.find('.loginHeading').text()).toBe('Login');
    expect(wrapper.find('.login_subheading').text()).toBe('BIT Career Connect');
    expect(wrapper.find('input[placeholder="Email"]').exists()).toBe(true);
    expect(wrapper.find('input[placeholder="Password"]').exists()).toBe(true);
    expect(wrapper.find('button.loginButton').text()).toBe('Login');
  });

  test('updates data properties when input fields change', async () => {
    const emailInput = wrapper.find('input[placeholder="Email"]');
    const passwordInput = wrapper.find('input[placeholder="Password"]');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');

    expect(wrapper.vm.email).toBe('test@example.com');
    expect(wrapper.vm.password).toBe('password123');
  });

  test('displays a success toast and navigates on successful login', async () => {
    const mockResponse = {
      data: {
        token: 'mockToken',
        user: { role: 'student', id: '12345' },
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    const emailInput = wrapper.find('input[placeholder="Email"]');
    const passwordInput = wrapper.find('input[placeholder="Password"]');
    const form = wrapper.find('form');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');
    await form.trigger('submit.prevent');
    await flushPromises();

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/auth/login', {
      email: 'test@example.com',
      password: 'password123',
    });

    expect(localStorage.getItem('token')).toBe('mockToken');
    expect(localStorage.getItem('userRole')).toBe('student');
    expect(localStorage.getItem('userId')).toBe('12345');

    expect(wrapper.vm.$toast.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Login Successful',
      detail: 'Logged in Successfully',
      life: 3000,
    });

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/student/home');
  });

  test('displays an error toast on failed login', async () => {
    axios.post.mockRejectedValueOnce(new Error('Invalid credentials'));

    const emailInput = wrapper.find('input[placeholder="Email"]');
    const passwordInput = wrapper.find('input[placeholder="Password"]');
    const form = wrapper.find('form');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('wrongpassword');
    await form.trigger('submit.prevent');
    await flushPromises();

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/auth/login', {
      email: 'test@example.com',
      password: 'wrongpassword',
    });

    expect(wrapper.vm.$toast.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Login Failed',
      detail: 'Please check your credentials and try again.',
      life: 3000,
    });
  });

  test('redirects based on role when token exists', async () => {
    localStorage.setItem('token', 'mockToken');
    localStorage.setItem('userRole', 'admin');

    axios.defaults.headers.common['Authorization'] = 'Bearer mockToken';

    const mountedWrapper = shallowMount(LoginForm, {
      global: {
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
      },
    });

    await flushPromises();

    expect(mountedWrapper.vm.$router.push).toHaveBeenCalledWith('/admin/home');
  });

  test('warns and stays on login page if token is missing', async () => {
    localStorage.removeItem('token');

    const mountedWrapper = shallowMount(LoginForm, {
      global: {
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
      },
    });

    await flushPromises();

    expect(mountedWrapper.vm.$router.push).not.toHaveBeenCalled();
  });
});
