### Déclarer le composant + monter le composant

Référencer le composant (dans `public/index.html`):

```html
<script type="riot/tag" src="buster-service.html"></script>
```

Ajouter le composant (dans `public/index.html`):

```html
  <div class="ui container">
    <padding-top></padding-top>
    <application-content></application-content>
    <!-- services -->
    <buster-service></buster-service>
  </div>
```

Monter le composant (dans `public/index.html`):

```html
  <script>
    riot.mount('application-header')
    riot.mount('padding-top')
    riot.mount('application-content')

    // mount services tag
    riot.mount('buster-service')

  </script>
```
