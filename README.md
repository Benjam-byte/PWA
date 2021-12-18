# PWA - TP3 - Todolist Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Lancer le projet
`npm i` 
`ng serve`

## Version 1 :memo:

Cette version est une version améliorée du tp3 proposé.

### Architecture :ballot_box_with_check:
  -  Un composant **todo-list**<br/>
  -  Un composant **todo-item**<br/>
  -  Un composant **todo-panel**<br/>

Le composant **todo-list** est le composant parent du composant **todo-item** et du composant **todo-panel**

### Todo-list :ballot_box_with_check:

  -  Le undo/redo est ajouté et fonctionnelle.<br/>
  -  Supprimer tous deviens supprimer affiché. supprimant tous ce qui est affiché par le filtre choisit ex : filtre = completed alors tous les completed sont supprimés. <br/>
  -  Un icone est affiché à coté du titre de la liste. <br/>

### Todo-item :ballot_box_with_check:

Pas d'ajout de fonctionnalité par rapport au tp3 

### Todo-panel :ballot_box_with_check:

Nouveau composant affiché en dessous du contenu de **Todo-list**.<br/>
  -  Il comporte un input pour modifier le titre de la liste. *(output : update())*<br/>
  -  Il comporte un input pour modifier l'icone de la liste. *(output : updateI())*<br/>

<p align="center">
  <img src="https://mitnoos.com/read.me/todo-pannel.PNG" />
</p>

### Le Service :ballot_box_with_check:

  -  On modifie l'interface todo-list pour y intégrer un icone. <br/>
  -  On ajoute deux fonctions une pour update le titre et une pour update l'icone d'une liste.

### Assets :art:

Un dossier icone est ajouté contenant 9 icones de base. Il n'est pas possible pour l'utilisateur d'en rajouter de lui même. 


## Version multi list (2) :trophy:

Dans cette version on souhaite cette fois-ci avoir accés à plusieurs listes, les créer et les gérér de la mêmes manieres que precedemments. 

### Architecture :ballot_box_with_check:
  -  Un composant **todo-list**<br/>
  -  Un composant **todo-item**<br/>

Le composant **todo-list** est le composant parent du composant **todo-item** 

  -  Un composant **todo-acceuil**<br/>
  -  Un composant **todo-viz**<br/>

Le composant **todo-acceuil** est le composant parent du composant **todo-viz**

### Routing :ballot_box_with_check:
On créer un router pour pouvoir se deplacer entre les deux composants parents **todo-list** et **todo-acceuil**. Une route par default pour revenir sur le **todo-acceuil** et une route parametrique pour se deplacer au sein des différentes listes avec un id. 

### Todo-accueil :ballot_box_with_check:

  -  On créer un nouveau composant parent servant de *page d'acceuil* à notre projet. <br/>
  -  Le titre de ce composant est modifiable en cas de doubleclick <br/>
  -  Ce composant affiche *n* **todo-viz** avec *n* étant le nombre de liste au sein de notre localstorage. <br/>
  -  Les **todo-viz** sont affichées dans l'ordre croissant de leur date de modification. <br/>
  -  Un bouton permet de créer une nouvelle liste.<br/>

<p align="center">
  <img src="https://mitnoos.com/read.me/todoacceuil.PNG" />
</p>


### Todo-viz :ballot_box_with_check:

  -  On créer un nouveau composant enfants servant à afficher une partie des informations d'une liste.<br/>
  -  Ce composant affiche le titre de la liste.<br/>
  -  Ce composant affiche le nombre d'items restant non complétés.<br/>
  -  Ce composant comporte un bouton de suppréssion de la liste pour laquelle il est affiché. <br/>

### Todo-list :ballot_box_with_check:

  -  Le composant **todo-panel** est retiré. <br/>
  -  Le titre est modifiable en cas de doubleClick.<br/>
  -  L'icone est modifiable en cas de doubleClick. <br/>
  -  Un bouton retour est ajouter en haut de la liste. <br/>

<p align="center">
  <img src="https://mitnoos.com/read.me/todolist.PNG" />
</p>

### Todo-item :ballot_box_with_check:

Pas de modification. 

### Le service :ballot_box_with_check:

On stocke dans le localStorage une **todolistception**, il faut donc la transformer pour que tous fonctionnne. On obtiens deux objets "current", un pour la **todolistception** et l'autre pour la **todo-list** manipulée par l'utilisateur. <br/>

  -  Une interface **todoListception** est crée représentant un tableau de **todo-list**. <br/>
  -  Les fonctions update/remove/append sont modifiées pour permettre de conserver leurs fonctionnalités mais au sein d'une **todolistception**<br/>
  -  les fonctions managepersistency et manageUndoRedo sont modifiées pour les mêmes raisons. <br/>
  -  Les fonction appendList , updateTilteList et removeList sont ajoutées. <br/>
  -  Une fonction changeCurrent est ajoutée pour permetre au service de modifier l'observable en fonction de la list affichée à l'utilisateurs. <br/>


### Problème rencontré :closed_lock_with_key:
Le format avec un seul localstorage contenant toutes les listes complexifie l'utilisation du *undo/redo* et ce n'est plus disponible sur la version multilist. 


## Version ionic multi list (3) :trophy:

Dans cette version on souhaite cette fois-ci réalisé l'application sous ionic on reprend donc l'ensemble des fonctionnalités de la version multi list.

### Architecture :ballot_box_with_check:

On retrouve une architecture ce composent similaire a la version multi list simplement on rajoute deux pages a notres projets.
Une page home et une page list. L'une contient les composant **todo-acceuil** et **todo-viz** et l'autre contenant **todo-list** et **todo-item**. 

### Problème rencontré :closed_lock_with_key:
Comprendre le format ionic et l'utilisation de composant au sein de page fut le plein long. On pourrait rajouter aussi qu'il a fallut réadapter le css car ionic possède une certaine quantité de scss prédifinis lors de la création d'un projet même "blank". 