# Votely - Application de Votes

Bienvenue dans **Votely**, une application de vote conçue avec Angular v16 pour permettre aux utilisateurs de voter et de consulter des candidats. L'application utilise **JSON Server** comme backend pour la gestion des données des candidats et des votes.

## Membre de groupe

- [Thierry Pavone TCHOUAMOU PAYONG](https://github.com/Pathi14)
- [Paul-Henry NGANKAM NGOUNOU](https://github.com/Paul-HenryN)
- [Maxime Loïc NKWEMI  NJIKI](https://github.com/MaximeLoic)

## Table des matières

- [Caractéristiques](#caractéristiques)
- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancer l'application](#lancer-lapplication)

## Caractéristiques

- **Gestion des votes** : Inscription, Informations sur les candidats, vote, et consultation des résultats.
- **Affichage dynamique des candidats** : Les candidats sont listés avec leurs détails (nom, biographie, photo, etc.).
- **Backend simple** : Utilisation de **JSON Server** pour simuler une API RESTful pour les candidats et les votes.
- **Composants réutilisables** : Développement modulaire et scalable avec Angular.

## Technologies

- **Frontend** : Angular v16 (TypeScript, HTML, CSS)
- **Backend** : JSON Server pour simuler une API REST
- **Gestion de styles** : Tailwind CSS
- **Bibliothèques** :
  - Angular Router pour la navigation
  - Angular Forms pour la gestion des formulaires
  - Angular HTTPClient pour les appels API

## Prérequis

Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

- **Node.js** (version 18.x)
- **Angular CLI** (version 16.x)
- **Git** (facultatif, mais recommandé)

## Installation

1. Clonez le dépôt depuis GitHub :

   ```bash
   git clone https://github.com/Pathi14/votely.git

2. Accessez le dossier du projet :

   ```bash
   cd votely
   ```

3. Installez les dépendances du projet :

   ```bash
   npm install
   ```

## Lancer l'application

1. Lancer le backend (JSON Server) :

   ```bash
   cd backend
   npx json-server db.json
   ```

2. Lancez le projet angular :

   ```bash
   ng serve
   ```

3. Accédez à l'URL suivante dans votre navigateur web : http://localhost:4200/
