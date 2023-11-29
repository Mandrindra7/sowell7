import { mount } from '@vue/test-utils';
import IndexPageVue from '../pages/IndexPage.vue';
createPinia
import { useFormStore } from '../stores/form-store.ts';
import { createPinia, setActivePinia } from 'pinia';

describe('testing stepper', () => {
  it('renders the component and steps correctly', async () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    const wrapper = mount(IndexPageVue);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.container').exists()).toBe(true);

    await wrapper.setData({ step: 2 });
    expect(wrapper.find('.q-step').text()).toContain('Your info');
  });

  it('navigates through steps correctly', async () => {
    const wrapper = mount(IndexPageVue);

    await wrapper.setData({ step: 2 });
    expect(wrapper.vm.step).toBe(2);

    // await wrapper.find('.q-btn').trigger('click');
    // expect(wrapper.vm.step).toBe(3);

    // await wrapper.find('.q-btn').trigger('click');
    // expect(wrapper.vm.step).toBe(2);
  });
});
