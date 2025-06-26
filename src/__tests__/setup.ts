import { config } from '@vue/test-utils';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/vue';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Ajoute les matchers de testing-library
expect.extend(matchers);

// Configuration globale pour les tests
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Nettoie le DOM après chaque test
afterEach(() => {
  cleanup();
});

// Configuration des stubs globaux
config.global.stubs = {
  // Ajoutez ici les composants que vous souhaitez stubber globalement
  'router-link': true,
  'router-view': true,
};

// Configuration des mocks globaux
config.global.mocks = {
  $t: (msg: string) => msg, // Pour i18n si vous l'utilisez
};

// Configuration des directives globales
config.global.directives = {
  // Ajoutez ici vos directives globales
};

// Configuration des plugins globaux
config.global.plugins = [
  // Ajoutez ici vos plugins globaux
];

// Configuration des composants globaux
config.global.components = {
  // Ajoutez ici vos composants globaux
};
