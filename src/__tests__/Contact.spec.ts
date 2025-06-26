import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Contact from '../components/Contact.vue';

describe('Contact.vue', () => {
  let wrapper: any;
  
  // Données de test
  const formData = {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Test Subject',
    message: 'This is a test message'
  };

  beforeEach(() => {
    // Monter le composant avant chaque test
    wrapper = mount(Contact);
  });

  it('renders the contact form', () => {
    // Vérifie que le formulaire est rendu
    expect(wrapper.find('form').exists()).toBe(true);
    
    // Vérifie que tous les champs sont présents
    expect(wrapper.find('#name').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#subject').exists()).toBe(true);
    expect(wrapper.find('#message').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('updates form data when input values change', async () => {
    // Remplir le formulaire
    await wrapper.find('#name').setValue(formData.name);
    await wrapper.find('#email').setValue(formData.email);
    await wrapper.find('#subject').setValue(formData.subject);
    await wrapper.find('#message').setValue(formData.message);

    // Vérifier que les valeurs ont été mises à jour
    expect((wrapper.find('#name').element as HTMLInputElement).value).toBe(formData.name);
    expect((wrapper.find('#email').element as HTMLInputElement).value).toBe(formData.email);
    expect((wrapper.find('#subject').element as HTMLInputElement).value).toBe(formData.subject);
    expect((wrapper.find('#message').element as HTMLTextAreaElement).value).toBe(formData.message);
  });

  it('validates email format', async () => {
    // Remplir avec un email invalide
    const invalidEmail = 'invalid-email';
    await wrapper.find('#email').setValue(invalidEmail);
    
    // Déclencher la validation
    await wrapper.find('form').trigger('submit');
    
    // Vérifier que l'email est marqué comme invalide
    const emailInput = wrapper.find('#email');
    expect(emailInput.element.validity.valid).toBe(false);
  });

  it('submits the form with correct data', async () => {
    // Créer un mock pour la fonction de soumission
    const submitHandler = vi.fn();
    wrapper.vm.$el.querySelector('form').onsubmit = submitHandler;
    
    // Remplir le formulaire
    await wrapper.find('#name').setValue(formData.name);
    await wrapper.find('#email').setValue(formData.email);
    await wrapper.find('#subject').setValue(formData.subject);
    await wrapper.find('#message').setValue(formData.message);
    
    // Soumettre le formulaire
    await wrapper.find('form').trigger('submit');
    
    // Vérifier que le gestionnaire de soumission a été appelé
    expect(submitHandler).toHaveBeenCalled();
  });

  it('shows error when required fields are empty', async () => {
    // Soumettre le formulaire vide
    await wrapper.find('form').trigger('submit');
    
    // Vérifier que les champs requis sont marqués comme invalides
    const requiredInputs = ['name', 'email', 'subject', 'message'];
    requiredInputs.forEach(field => {
      const input = wrapper.find(`#${field}`);
      expect(input.element.validity.valueMissing).toBe(true);
    });
  });
});
