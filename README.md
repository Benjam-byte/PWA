# PWA - TP3 - Todolist Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Lancer le projet
`npm i` 
`ng serve`

## Fonctionnalité implémenté

### Version 1

La version 1 comporte le tp3 complet ainsi que les fonctionnalités suivantes fonctionnelles : 
-undo/redo
-supprimer par affichage, permet de supprimer tout ce qui est affiché par les filtres donc si tout le filtre est "completed" supprimer tous supprimeras tous les completés
-un nouveau composant nommé todo-pannel pour modifier le nom d'une liste et l'icone de la liste.
-la liste comporte maintenant un icone, on peu le choisir parmis 9 existant
-Le service comporte donc un nouveau type de todolist et deux nouvelles fonction updateIcone et updateTitle


### Version multi list

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

