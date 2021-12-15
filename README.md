# PWA - TP3 - Todolist Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Lancer le projet
`npm i` 
`ng serve`

### Version 1

Cette version est une version amélioré du tp3 proposé.

#### Architecture 
Un composant **todo-list**
Un composant **todo-item**
Un composant **todo-pannel**

Le composant **todo-list** est le composant parent du composant **todo-item** et du composant **todo-pannel**

#### Todo-list 

Le undo/redo est ajouté et fonctionnelle.<br/>
Supprimé tous deviens supprimé affiché. supprimant tous ce qui est affiché par le filtre choisis ex : filtre = completed alors tous les completed sont supprimé. <br/>
Un icone est affiché à coté du titre de la liste. <br/>

#### Todo-item

Pas d'ajout de fonctionnalité par rapport au tp3 

#### Todo-pannel

Nouveau composant affiché en dessous du contenu de **Todo-list**.
Il comporte un input pour modifier le titre de la liste. *(output : update())*
Il comporte un input pour modifier l'icone de la liste. *(output : updateI())*

#### Le Service

On modifie l'interface todo-list pour y intégrer un icone. 
On ajoute deux fonctions une pour update le titre et une pour update l'icone d'une liste.

#### Assets 

Un dossier icone est ajouté contenant 9 icone de base il n'est pas possible pour l'utilisateur d'en rajouter de lui même. 


### Version multi list (2)

Dans cette version on souhaite cette fois-ci avoir accés a plusieurs list, les créer et les gerer de la mêmes manieres que precedemments. 

#### Architecture 
Un composant **todo-list**
Un composant **todo-item**

Le composant **todo-list** est le composant parent du composant **todo-item** 

Un composant **todo-acceuil**
Un composant **todo-viz**

Le composant **todo-acceuil** est le composant parent du composant **todo-viz**

#### Routing
On creer un router pour pouvoir se deplacer entre les deux composants parents **todo-list** et **todo-acceuil**. Une route par default pour revenir sur le **todo-acceuil** et une route parametrique pour se deplacer au sein des différentes listes avec un id. 

On ajoute une interface todolistception qui représente un tableau de todolist et seras stocké dans le localservice.

On creer un nouveau composant nommé todo-acceuil représentant la page contenant l'affichage des todolist disponible. 

On creer ensuite des routes pour liéer la page d'acceuil et les listes. Les routes des listes sont paramétriques avec un id pour afficher la bonne list. 
-une fonction changeCurrent est ajouter dans le service pour suivre la liste selectionner par une route paramétriques. 

On creer un nouveau composant pour gerer l'affichage des listes dans todo-acceuil nommé todo-viz.

Une todo-viz comporte le nom de la liste une croix pour la supprimer ainsi que le nombre d'élements restant d'une liste. 

Dans le service toutes les fonctions sont modifié pour permettre d'accepter le nouveau format de données. Le localStorage contient alors une list de todolist
  -les fonctons append/remove/update de todolist sont modifié
  -les fonctions managepersistency et manageUndoRedo sont modifié 

Un bouton pour ajouter des listes et créer dans le todo-acceuil et une fonction dans le service appendList est rajouter. 

Un bouton de suppréssion d'une listes et créer et integrer au composant todo-viz avec une fonction dans le service nommé removeList. 

Un bouton pour remonter d'une liste au todo-acceuil est ajouter. 

On souhaite supprimer le todo-pannel pour garder l'interface de base donc les titres d'une todolist et les icones deviennent en cas de doubleclick modifiable. On conserve ainsi la logique de la liste. 

On réalise une manoeuvre similaire pour que le titre affiché dans todo-acceuil soit modifiable de la même maniere. 
-une fonction updateTitleList est ajouter au service

#### Problème rencontré
Le format avec un seul localstorage contenant toutes les listes complexifie l'utilisation du undo/redo et ce n'est plus disponible sur la version multilist. 

