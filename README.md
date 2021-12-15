# PWA - TP3 - Todolist Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Lancer le projet
`npm i` 
`ng serve`

## Version 1

Cette version est une version améliorée du tp3 proposé.

### Architecture 
Un composant **todo-list**<br/>
Un composant **todo-item**<br/>
Un composant **todo-pannel**<br/>

Le composant **todo-list** est le composant parent du composant **todo-item** et du composant **todo-pannel**

### Todo-list 

Le undo/redo est ajouté et fonctionnelle.<br/>
Supprimer tous deviens supprimer affiché. supprimant tous ce qui est affiché par le filtre choisit ex : filtre = completed alors tous les completed sont supprimés. <br/>
Un icone est affiché à coté du titre de la liste. <br/>

### Todo-item

Pas d'ajout de fonctionnalité par rapport au tp3 

### Todo-pannel

Nouveau composant affiché en dessous du contenu de **Todo-list**.<br/>
Il comporte un input pour modifier le titre de la liste. *(output : update())*<br/>
Il comporte un input pour modifier l'icone de la liste. *(output : updateI())*<br/>

![Image todo-pannel](https://mitnoos.com/read.me/todo-pannel.PNG)

### Le Service

On modifie l'interface todo-list pour y intégrer un icone. <br/>
On ajoute deux fonctions une pour update le titre et une pour update l'icone d'une liste.

### Assets 

Un dossier icone est ajouté contenant 9 icones de base. Il n'est pas possible pour l'utilisateur d'en rajouter de lui même. 


## Version multi list (2)

Dans cette version on souhaite cette fois-ci avoir accés à plusieurs listes, les créer et les gérér de la mêmes manieres que precedemments. 

### Architecture 
Un composant **todo-list**<br/>
Un composant **todo-item**<br/>

Le composant **todo-list** est le composant parent du composant **todo-item** 

Un composant **todo-acceuil**<br/>
Un composant **todo-viz**<br/>

Le composant **todo-acceuil** est le composant parent du composant **todo-viz**

### Routing
On créer un router pour pouvoir se deplacer entre les deux composants parents **todo-list** et **todo-acceuil**. Une route par default pour revenir sur le **todo-acceuil** et une route parametrique pour se deplacer au sein des différentes listes avec un id. 

### Todo-accueil

On créer un nouveau composant parent servant de *page d'acceuil* à notre projet. <br/>
Le titre de ce composant est modifiable en cas de doubleclick <br/>
Ce composant affiche *n* **todo-viz** avec *n* étant le nombre de liste au sein de notre localstorage. <br/>
Les **todo-viz** sont affichées dans l'ordre croissant de leur date de modification. <br/>
Un bouton permet de créer une nouvelle liste.<br/>

![Image todo-acceuil](https://mitnoos.com/read.me/todoacceuil.PNG)

### Todo-viz 

On créer un nouveau composant enfants servant à afficher une partie des informations d'une liste.<br/>
Ce composant affiche le titre de la liste.<br/>
Ce composant affiche le nombre d'items restant non complétés.<br/>
Ce composant comporte un bouton de suppréssion de la liste pour laquelle il est affiché. <br/>

### Todo-list 

Le composant **todo-pannel** est retiré. <br/>
Le titre est modifiable en cas de doubleClick.<br/>
L'icone est modifiable en cas de doubleClick. <br/>
Un bouton retour est ajouter en haut de la liste. <br/>

![Image todo-list](https://mitnoos.com/read.me/todolist.PNG)

### Todo-item 

Pas de modification. 

### Le service 

On stocke dans le localStorage une **todolistception**, il faut donc la transformer pour que tous fonctionnne. On obtiens deux objets "current", un pour la **todolistception** et l'autre pour la **todo-list** manipulée par l'utilisateur. <br/>

Une interface **todoListception** est crée représentant un tableau de **todo-list**. <br/>
Les fonctions update/remove/append sont modifiées pour permettre de conserver leurs fonctionnalités mais au sein d'une **todolistception**<br/>
les fonctions managepersistency et manageUndoRedo sont modifiées pour les mêmes raisons. <br/>
Les fonction appendList , updateTilteList et removeList sont ajoutées. <br/>
Une fonction changeCurrent est ajoutée pour permetre au service de modifier l'observable en fonction de la list affichée à l'utilisateurs. <br/>


### Problème rencontré
Le format avec un seul localstorage contenant toutes les listes complexifie l'utilisation du *undo/redo* et ce n'est plus disponible sur la version multilist. 

