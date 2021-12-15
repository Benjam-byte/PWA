# PWA - TP3 - Todolist Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Lancer le projet
`npm i` 
`ng serve`

## Version 1

Cette version est une version amélioré du tp3 proposé.

### Architecture 
Un composant **todo-list**
Un composant **todo-item**
Un composant **todo-pannel**

Le composant **todo-list** est le composant parent du composant **todo-item** et du composant **todo-pannel**

### Todo-list 

Le undo/redo est ajouté et fonctionnelle.<br/>
Supprimé tous deviens supprimé affiché. supprimant tous ce qui est affiché par le filtre choisis ex : filtre = completed alors tous les completed sont supprimé. <br/>
Un icone est affiché à coté du titre de la liste. <br/>

### Todo-item

Pas d'ajout de fonctionnalité par rapport au tp3 

### Todo-pannel

Nouveau composant affiché en dessous du contenu de **Todo-list**.<br/>
Il comporte un input pour modifier le titre de la liste. *(output : update())*<br/>
Il comporte un input pour modifier l'icone de la liste. *(output : updateI())*<br/>

### Le Service

On modifie l'interface todo-list pour y intégrer un icone. <br/>
On ajoute deux fonctions une pour update le titre et une pour update l'icone d'une liste.

### Assets 

Un dossier icone est ajouté contenant 9 icone de base il n'est pas possible pour l'utilisateur d'en rajouter de lui même. 


## Version multi list (2)

Dans cette version on souhaite cette fois-ci avoir accés a plusieurs list, les créer et les gerer de la mêmes manieres que precedemments. 

### Architecture 
Un composant **todo-list**
Un composant **todo-item**

Le composant **todo-list** est le composant parent du composant **todo-item** 

Un composant **todo-acceuil**
Un composant **todo-viz**

Le composant **todo-acceuil** est le composant parent du composant **todo-viz**

### Routing
On creer un router pour pouvoir se deplacer entre les deux composants parents **todo-list** et **todo-acceuil**. Une route par default pour revenir sur le **todo-acceuil** et une route parametrique pour se deplacer au sein des différentes listes avec un id. 

### Todo-accueil

On créer un nouveau composant parent servant de *page d'acceuil* à notre projet. <br/>
Le titre de ce composant est modifiable en cas de doubleclick <br/>
Ce composant affiche *n* **todo-viz** avec *n* étant le nombre de liste au sein de notre localstorage. <br/>
Les **todo-viz** sont affiché dans l'ordre de croissant de leur date de modification. <br/>
Un bouton permet de créer une nouvelle liste.<br/>

### Todo-viz 

On créer un nouveau composant enfants servant à afficher une partie des informations d'une liste.<br/>
Ce composant affiche le titre de la liste.<br/>
Ce composant affiche le nombre d'item restant non complétes.<br/>
Ce composant comporte un bouton de suppréssion de la liste pour laquelle il est affiché. <br/>

### Todo-list 

Le composant **todo-pannel** est retiré. <br/>
Le titre est modifiable en cas de doubleClick.<br/>
L'icone est modifiable en cas de doubleClick. <br/>
Un bouton retour est ajouter en haut de la liste. <br/>

### Todo-item 

Pas de modification. 

### Le service 

On stocke dans le localStorage une **todolistception**, il faut donc le transformé pour que tous fonctionnne. On obtiens deux objets "current", un pour la **todolistception** et l'autre pour la **todo-list** manipulé par l'utilisateur. <br/>

Une interface **todoListception** est créer représentant un tableau de **todo-list**. <br/>
Les fonctions update/remove/append sont modifiés pour permettre de conserver leur fonctionnalités mais au sein d'une todolistCeption<br/>
Les fonctions les fonctions managepersistency et manageUndoRedo sont modifié pour les mêmes raisons. <br/>
Les fonction appendList , updateTilteList et removeList sont ajoutés. <br/>
Une fonction changeCurrent est ajoutés pour permetre au service de modifié l'observable en fonction de la list affiché à l'utilisateurs. <br/>


### Problème rencontré
Le format avec un seul localstorage contenant toutes les listes complexifie l'utilisation du undo/redo et ce n'est plus disponible sur la version multilist. 

