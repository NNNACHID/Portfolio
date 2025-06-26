import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '../App.vue';

describe('App.vue', () => {
  it('renders the main app container', () => {
    const wrapper = mount(App);
    expect(wrapper.find('.min-h-screen').exists()).toBe(true);
  });

  it('renders all main components', () => {
    const wrapper = mount(App);
    
    // Vérifie que tous les composants principaux sont rendus
    expect(wrapper.findComponent({ name: 'Navbar' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Header' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'About' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Skills' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Experience' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Projects' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Contact' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Footer' }).exists()).toBe(true);
  });

  it('has the correct CSS classes', () => {
    const wrapper = mount(App);
    const div = wrapper.find('div');
    expect(div.classes()).toContain('min-h-screen');
    expect(div.classes()).toContain('bg-gray-500');
  });
});
