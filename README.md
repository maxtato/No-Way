# BORNE — quiz de culture générale

Jeu de quiz (direction visuelle « riso club »), en un seul écran, jouable
dans le navigateur.

## Structure des fichiers

| Fichier         | Rôle                                                                 |
|-----------------|----------------------------------------------------------------------|
| `index.html`    | Interface, styles et logique du jeu (~55 Ko).                        |
| `questions.js`  | Banque de questions extraite pour alléger le HTML (~120 Ko, 561 questions). |

`index.html` charge `questions.js` **avant** son propre script :

```html
<script src="questions.js"></script>
<script> /* logique du jeu */ </script>
```

`questions.js` expose la globale `Q`, utilisée par le jeu.

## Format des questions

```js
const Q = {
  geo: [
    {
      q: "Énoncé de la question ?",
      a: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      c: 0,            // index (0-3) de la bonne réponse
      e: "Explication affichée après la réponse."
    },
    // ...
  ],
  histo: [ /* ... */ ],
  // 14 thèmes : geo, histo, sci, espace, pop, sport, wtf,
  //             litt, musique, art, cuisine, techno, animaux, langue
};
```

Pour ajouter ou modifier des questions, il suffit d'éditer `questions.js` :
le fichier `index.html` n'a pas besoin d'être touché.

## Lancer le jeu

Ouvrir `index.html` dans un navigateur. Comme la page charge `questions.js`
en local, servez le dossier via un petit serveur si votre navigateur bloque
les `file://` :

```sh
python3 -m http.server
# puis ouvrir http://localhost:8000/ (index.html est servi automatiquement)
```
