import { shallowMount } from '@vue/test-utils'; // Update the path accordingly
import { vi } from 'vitest';

import UserListPageVue from '../pages/Stepper/UserListPage.vue';

vi.mock('quasar', () => ({
  useQuasar: vi.fn(() => ({
    loading: {
      show: vi.fn(),
      hide: vi.fn(),
    },
    notify: vi.fn(),
  })),
}));

vi.mock('src/service/user', () => ({
  getUserList: vi.fn(() =>
    Promise.resolve({
      data: [
        { id: '1', name: 'name', username: 'username', email: 'email' },
        { id: '2', name: 'test', username: 'test3', email: 'test@est.com' },
      ],
    })
  ),
}));

describe('user list components', () => {
 
  it('fetch and displays user list', async () => {
    const wrapper = shallowMount(UserListPageVue);
    await wrapper.vm.initialize();
    expect(wrapper.vm.$q.loading.show).toHaveBeenCalled();
    expect(wrapper.vm.userList.length).toBe(2);
    expect(wrapper.vm.$q.loading.hide).toHaveBeenCalled();
  });
});
