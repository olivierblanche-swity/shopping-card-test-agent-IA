# Shopping Cart — Vue.js et agents IA

Ce projet est un exercice de panier d’achat réalisé avec Vue.js,
chargé directement via un CDN, sans installation npm ni étape de build.

Il sert aussi à expérimenter une équipe d’agents IA que j’ai créée
et configurée pour m’aider à analyser un projet, écrire du code,
préparer et exécuter des tests, relire les changements et documenter
le travail.

Les agents interviennent sous supervision humaine : les modifications
sont proposées avant application et validées étape par étape.

## Technologies

- HTML et CSS
- Bootstrap 4.3.1
- Vue.js 3.5.22 via CDN
- JavaScript avec données locales, sans API ni base de données

## Fonctionnalités

- Affichage des produits avec Vue et v-for
- Augmentation et diminution des quantités, avec un minimum de 1
- Calcul du nombre total d’articles avec reduce()
- Calcul du montant par ligne et du sous-total
- Ajout de frais de livraison fixes de 5 €

Les quantités sont réinitialisées au rechargement de la page.
La suppression des produits, les codes promotionnels et le paiement
ne sont pas implémentés.

## Organisation

- index.html : interface du panier
- app.css : styles
- products.js : produits et quantités initiales
- app.js : état réactif et calculs Vue
- documents/ : maquette HTML/CSS initiale conservée

## Utilisation

Ouvrir index.html dans un navigateur récent.
Une connexion Internet est nécessaire pour les ressources externes :
Vue, Bootstrap, polices et images.

## Vérifications réalisées

La syntaxe JavaScript et plusieurs scénarios de calcul ont été
vérifiés en mémoire avec Node.js.

Aucune suite de tests automatisés n’est fournie dans ce dépôt.
Le rendu et les interactions réelles dans le navigateur restent
à vérifier.

## Objectif pédagogique

Ce projet est un terrain d’apprentissage de Vue.js et de collaboration
avec des agents IA. Il ne constitue pas une boutique prête pour
la production.
