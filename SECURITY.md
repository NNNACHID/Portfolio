# Politique de Sécurité du Projet

Ce document décrit les mesures de sécurité mises en place pour le projet Portfolio.

## Outils de Sécurité Intégrés

- **ESLint** avec des règles de sécurité
- **Husky** pour les hooks Git sécurisés
- **Snyk** pour l'analyse des vulnérabilités
- **OWASP Dependency-Check** pour l'analyse des dépendances
- **GitHub Actions** pour l'intégration continue sécurisée

## Bonnes Pratiques de Sécurité

### 1. Gestion des Dépendances
- Toutes les dépendances sont verrouillées avec `package-lock.json`
- Analyse de vulnérabilités avec `npm audit` et Snyk
- Mises à jour régulières des dépendances

### 2. Sécurité du Code
- Analyse statique du code avec ESLint et des règles de sécurité
- Détection des vulnérabilités courantes (XSS, injection, etc.)
- Validation des entrées utilisateur

### 3. CI/CD Sécurisé
- Exécution de tests de sécurité à chaque commit
- Analyse des dépendances dans le pipeline CI/CD
- Validation des builds avant déploiement

### 4. Gestion des Secrets
- Ne jamais stocker de secrets dans le code source
- Utiliser des variables d'environnement pour les informations sensibles
- Utiliser des outils comme HashiCorp Vault pour la gestion des secrets en production

## Signalement des Vulnérabilités

Si vous découvrez une vulnérabilité de sécurité dans ce projet, veuillez nous en informer immédiatement à [votre-email@exemple.com](mailto:votre-email@exemple.com).

Nous examinerons toutes les vulnérabilités signalées et nous efforcerons de publier un correctif dès que possible.
