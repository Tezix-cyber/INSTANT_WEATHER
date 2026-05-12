# Instant Weather

Instant Weather est une petite application web qui affiche la météo du jour à partir d'un code postal français.

L'utilisateur saisit un code postal, choisit une commune dans un menu déroulant, puis obtient les informations météo principales : temps actuel, températures, pluie, vent, ensoleillement et date de mise à jour.

## Fonctionnalités

- Recherche des communes avec un code postal français.
- Menu déroulant pour choisir la bonne commune.
- Récupération de la météo du jour avec Meteo Concept.
- Affichage mobile first sous forme de cartes.
- Fond de page dynamique selon la météo.
- Petites animations météo : soleil, nuages, pluie, neige, brouillard, orage.
- Favicon animé en JavaScript.

## Technologies

- HTML
- CSS
- JavaScript vanilla
- API Geo du gouvernement français
- API Meteo Concept

## Structure du projet

```text
INSTANT_WEATHER/
├── index.html
├── CSS/
│   └── style.css
├── js/
│   └── app.js
├── images/
│   └── favicon.ico
└── README.md
```

## Utilisation

Ouvrir simplement `index.html` dans un navigateur.

Étapes :

1. Saisir un code postal, par exemple `50440`.
2. Choisir une commune dans la liste.
3. Cliquer sur `Valider`.
4. Consulter la météo affichée.

## APIs utilisées

### Communes

Les communes sont récupérées avec :

```text
https://geo.api.gouv.fr/communes
```

Cette API permet de transformer un code postal en liste de communes, avec leur code INSEE.

### Météo

La météo est récupérée avec :

```text
https://api.meteo-concept.com/api/forecast/daily/0
```

Meteo Concept utilise le code INSEE de la commune pour retourner les prévisions.

## Configuration du token

Le token Meteo Concept est défini dans `js/app.js` :

```js
const TOKEN_METEO = "...";
```

Attention : comme ce projet fonctionne côté navigateur, le token est visible dans le code JavaScript. Pour un vrai site public, il faudrait plutôt passer par un backend afin de ne pas exposer le token.

## Fichiers importants

- `index.html` : structure de la page et formulaire.
- `CSS/style.css` : design mobile first, fonds dynamiques et animations.
- `js/app.js` : appels API, affichage des communes, affichage météo et animation du favicon.

## Vérification JavaScript

Pour vérifier la syntaxe du fichier JavaScript :

```bash
node --check js/app.js
```

