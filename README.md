# **Newsletter API Project**

## **Description**

Ce projet est une API RESTful pour gérer les newsletters, les abonnés et les campagnes. Il est construit avec **Laravel 12**, utilisant **Laravel Sanctum** pour l'authentification et **Swagger** pour la documentation de l'API.

## **Prérequis**

Avant de commencer, assure-toi d'avoir les outils suivants installés sur ta machine :
- **PHP 8.0+**
- **Composer**
- **Laravel 12**
- **PostgreSQL ou MySQL** (selon ta configuration de base de données)
- **Node.js** et **npm** (pour Swagger et les outils de développement)

---

## **Installation**

1. **Clonez le projet** :

   Clone ce projet depuis GitHub dans le répertoire de ton choix :

   ```bash
   git clone https://github.com/ton-repository/newsletter-api.git
   cd newsletter-api

2. **Installe les dépendances du projet**:

    Installe les dépendances via Composer :

    ```bash
    composer install

3. **Configure ton environnement**:

    Duplique le fichier .env.example et renomme-le en .env :

    ```bash
    cp .env.example .env

    Puis configure les paramètres de la base de données dans le fichier .env :

    ```ini
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=newsletter_system
    DB_USERNAME=ton_user
    DB_PASSWORD=ton_mot_de_passe

4. **Génère la clé d'application**:

    Exécute la commande suivante pour générer la clé d'application :

    ```bash
    php artisan key:generate

5. **Exécute les migrations**

    Crée les tables nécessaires dans la base de données avec les migrations :

    ```bash
    php artisan migrate

## **Configuration de l'authentification**

Le projet utilise Laravel Sanctum pour l'authentification des API.

1. **Publie la configuration de Sanctum** :

    Si ce n'est pas déjà fait, publie les fichiers de configuration pour Sanctum avec cette commande :

    ```bash
    php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

2. **Crée un token pour l'authentification** :

Lorsque tu veux tester l'API, tu dois obtenir un token d'accès. Tu peux t'inscrire via la route `POST /api/register` et te connecter via `POST /api/login` pour obtenir un token.

## **Routes API disponibles**

1. **Authentification**

    * **POST /api/register** : Créer un utilisateur.

    * **POST /api/login** : Se connecter et obtenir un token d'accès.

    * **POST /api/logout** : Se déconnecter (nécessite d'être authentifié).

2. **Newsletters**

    * **GET /api/newsletters** : Lister toutes les newsletters.

    * **POST /api/newsletters** : Créer une nouvelle newsletter.

    * **GET /api/newsletters/{id}** : Obtenir une newsletter par son ID.

    * **PUT /api/newsletters/{id}** : Mettre à jour une newsletter.

    * **DELETE /api/newsletters/{id}** : Supprimer une newsletter.

3. **Abonnés**

    * **GET /api/subscribers** : Lister tous les abonnés.

    * **POST /api/subscribers** : Ajouter un nouvel abonné.

    * **GET /api/subscribers/{id}** : Obtenir un abonné par son ID.

    * **PUT /api/subscribers/{id}** : Mettre à jour un abonné.

    * **DELETE /api/subscribers/{id}** : Supprimer un abonné.

4. **Campagnes**

    * **GET /api/campaigns** : Lister toutes les campagnes.

    * **POST /api/campaigns** : Créer une nouvelle campagne.

    * **GET /api/campaigns/{id}** : Obtenir une campagne par son ID.

    * **PUT /api/campaigns/{id}** : Mettre à jour une campagne.

    * **DELETE /api/campaigns/{id}** : Supprimer une campagne.

## **Documentation Swagger**

La documentation Swagger de l'API est générée automatiquement. Pour la consulter, lance l'application et accède à l'URL suivante dans ton navigateur :

    http://127.0.0.1:8000/api/documentation

Cette documentation te permettra de tester les routes directement et de consulter les détails des paramètres et des réponses.

## **Structure des fichiers**

* app/Http/Controllers : Contient les contrôleurs pour l'authentification et les entités (Newsletter, Subscriber, Campaign).

* app/Models : Contient les modèles correspondants à la base de données (User, Newsletter, Subscriber, Campaign).

* routes/api.php : Contient les routes API pour l'authentification, la gestion des newsletters, des abonnés et des campagnes.

* config/l5-swagger.php : Configuration de Swagger pour générer la documentation API.