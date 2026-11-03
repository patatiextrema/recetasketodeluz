# Delights Recipes 🌷

Página web estática y responsive para guardar recetas keto.

## Archivos
- `index.html` — estructura de la página.
- `styles.css` — paleta, layout, animaciones y responsive.
- `script.js` — buscador, favoritos, modo claro/oscuro, modal de recetas y botón “Sorpréndeme”.
- `assets/flower-corner.svg` — flores vectoriales originales para las esquinas.

## Cómo subirlo a GitHub
1. Crea un repositorio nuevo llamado `delights-recipes`.
2. Déjalo como **Public**.
3. Entra al repositorio.
4. Ve a **Add file → Upload files**.
5. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets`.
6. Haz clic en **Commit changes**.

## Cómo publicarlo con GitHub Pages
1. Ve a **Settings** dentro del repositorio.
2. Entra a **Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la branch `main`.
5. Selecciona la carpeta `/ (root)`.
6. Guarda.

La URL tendrá una forma parecida a:
`https://TU-USUARIO.github.io/delights-recipes/`

## Cómo poner tus fotos
Sube tus imágenes dentro de `assets`, por ejemplo:
- `assets/cinnamon-rolls.jpg`
- `assets/donuts.jpg`
- `assets/pumpkin-cake.jpg`

Después, en `index.html`, reemplaza:

```html
<div class="recipe-card__image recipe-card__image--cinnamon">
  <span class="photo-label">Tu foto aquí</span>
</div>
```

por:

```html
<div class="recipe-card__image recipe-card__image--cinnamon"
     style="background-image:url('assets/cinnamon-rolls.jpg'); background-size:cover; background-position:center;">
</div>
```

## Cómo editar las recetas
Las recetas están en `script.js` dentro de:

```js
const recipes = {
  cinnamon: { ... },
  donuts: { ... },
  pumpkin: { ... }
};
```

Ahí puedes cambiar ingredientes, pasos y tips.

## Ideas para crecer el sitio
- Agregar categorías.
- Crear una página individual por receta.
- Añadir sección Seasonal.
- Añadir más fotos.
- Añadir ratings y notas personales.
