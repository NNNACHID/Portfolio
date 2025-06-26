# Guide de Tests

Ce guide explique comment exécuter et écrire des tests pour le projet Portfolio.

## Exécution des Tests

### Tous les tests
```bash
npm test
```

### Tests en mode watch
```bash
npm run test:watch
```

### Couverture de code
```bash
npm run test:coverage
```

### Interface utilisateur de test (utile pour le débogage)
```bash
npm run test:ui
```

## Structure des Tests

- Les tests unitaires sont situés dans le dossier `src/__tests__/`
- Les fichiers de test doivent être nommés avec le suffixe `.spec.ts` ou `.test.ts`
- Les tests utilisent Vitest comme framework de test
- Les composants Vue sont testés avec Vue Test Utils

## Écrire de Nouveaux Tests

### Test de Composant de Base

```typescript
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import YourComponent from '../YourComponent.vue';

describe('YourComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(YourComponent);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
```

### Tester les Props

```typescript
it('accepts valid props', () => {
  const wrapper = mount(YourComponent, {
    props: {
      message: 'Test message'
    }
  });
  
  expect(wrapper.props('message')).toBe('Test message');
});
```

### Tester les Événements

```typescript
it('emits an event when clicked', async () => {
  const wrapper = mount(YourComponent);
  await wrapper.find('button').trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});
```

### Tester les Appels API (avec mocks)

```typescript
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import YourComponent from '../YourComponent.vue';

// Mock axios
vi.mock('axios');

describe('YourComponent API', () => {
  it('fetches data on mount', async () => {
    const mockData = { data: 'test data' };
    (axios.get as MockedFunction<typeof axios.get>).mockResolvedValue(mockData);
    
    const wrapper = mount(YourComponent);
    await wrapper.vm.$nextTick();
    
    expect(axios.get).toHaveBeenCalledWith('/api/data');
    expect(wrapper.vm.data).toBe('test data');
  });
});
```

## Bonnes Pratiques

1. **Un test, une assertion** : Chaque test ne devrait tester qu'une seule chose
2. **Noms descriptifs** : Utilisez des noms de test descriptifs
3. **Tests isolés** : Les tests ne doivent pas dépendre les uns des autres
4. **Mocks** : Utilisez des mocks pour les dépendances externes
5. **Couverture** : Visez une couverture de code élevée, mais pas à 100% à tout prix

## Dépannage

Si vous rencontrez des problèmes avec les tests :

1. Vérifiez que toutes les dépendances sont installées
2. Assurez-vous que les chemins d'importation sont corrects
3. Utilisez `console.log` ou les outils de débogage pour inspecter l'état du composant
4. Consultez la documentation de [Vitest](https://vitest.dev/) et [Vue Test Utils](https://test-utils.vuejs.org/)
