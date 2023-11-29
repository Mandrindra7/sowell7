import { mount } from '@vue/test-utils';
import AuthPageVue from '../pages/AuthPage.vue';
import { useFormStore } from '../stores/form-store.ts';
import { createPinia, setActivePinia } from 'pinia';

describe('authentification page', () => {
  it('renders login form correctly', async () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    const wrapper = mount(AuthPageVue);

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find('.title').text()).toBe('Login');
    expect(wrapper.find('.subtitle').text()).toContain(
      'Type a username and a complex password to log in'
    );
  });

  it('submits the form with valid data', async () => {
    const wrapper = mount(AuthPageVue);

    await wrapper
      .findComponent({ ref: 'username' })
      .setValue((username = 'testuser'));
    await wrapper
      .findComponent({ ref: 'password' })
      .setValue((password = 'TestPassword123'));

    await wrapper.findComponent({ ref: 'form' }).trigger('submit.prevent');

    const username = SessionStorage.getItem('loggedUser');
    expext(username).toEqual('testuser');

    expect(window.location.pathname).toEqual('/');
    const { resetForm } = useFormStore();
    resetForm();
  });

  it('submits the form with invalid data', async () => {
    const wrapper = mount(AuthPageVue);

    await wrapper.setData({
      username: 'testuser',
      password: 'TestPassword123',
    });
    await wrapper.find('form').trigger('submit.prevent');

    expect(window.location.pathname).toEqual('/login');
  });
});
