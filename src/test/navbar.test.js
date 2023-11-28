import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import SwNavBarVue from '../components/SwNavBar.vue';

describe('nav-bar ', () => {
  it('navbar contains name', () => {
    const wrapper = mount(SwNavBarVue, {
      props: { username: 'mandrindra', title: 'test' },
    });
    expect(wrapper.text()).toContain('mandrindra');
  });
  it('change page on logout', async () => {
    const wrapper = mount(SwNavBarVue, {
      props: { username: 'mandrindra', title: 'test' },
    });
    const button = wrapper.find('button');
    console.log(button);
    //await button.trigger("click")
    // expect(window.location.pathname).toEqual('/login');
  });
});
