
const recipes = {
  cinnamon: {
    eyebrow: "FLUFFY • KETO • CINNAMON",
    title: "Cinnamon Rolls Keto",
    intro: "Suaves, altos y con centro de canela. Esta versión usa King Arthur Keto Wheat Baking Flour.",
    ingredients: [
      "1 taza (aprox. 120 g) de King Arthur Keto Wheat Baking Flour",
      "1 cucharadita de levadura seca instantánea",
      "1½ cucharadas de allulose o endulzante granulado",
      "¼ cucharadita de sal",
      "¼ taza (60 ml) de leche de almendras sin azúcar, tibia",
      "1 huevo a temperatura ambiente",
      "1 cucharada (14 g) de mantequilla sin sal",
      "½ cucharadita de vainilla, opcional",
      "Relleno: 1½ cucharadas de mantequilla suave",
      "3 cucharadas de sustituto de azúcar morena",
      "1–1½ cucharaditas de canela",
      "Frosting: 45–50 g de cream cheese + 1 cucharada de mantequilla + endulzante en polvo"
    ],
    steps: [
      "Activa la levadura con la leche tibia. Si quieres comprobarla, añade una pequeña cantidad de miel o azúcar y espera 5–10 minutos.",
      "Mezcla harina, endulzante y sal. Agrega huevo, leche con levadura, mantequilla y vainilla.",
      "Amasa 7–10 minutos hasta obtener una masa suave, elástica y ligeramente pegajosa.",
      "Deja levar tapada durante 60–90 minutos, o hasta que se vea claramente más inflada.",
      "Estira en un rectángulo, unta mantequilla y agrega el relleno de canela.",
      "Enrolla, corta 5–6 piezas y deja hacer un segundo levado de 35–60 minutos.",
      "Hornea a 350°F / 175–180°C durante 18–23 minutos.",
      "Deja reposar 5–10 minutos y agrega el frosting."
    ],
    tip: "No agregues harina de más solo porque la masa esté un poco pegajosa. Una masa ligeramente húmeda suele dar un roll más fluffy."
  },
  donuts: {
    eyebrow: "FILLED • FLUFFY • KETO",
    title: "Donuts Keto Rellenas",
    intro: "Tipo bomboloni: suaves, aireadas y pensadas para rellenar con crema de vainilla o pistacho.",
    ingredients: [
      "2 tazas de King Arthur Keto Wheat Baking Flour",
      "2 cucharaditas de levadura seca instantánea",
      "3 cucharadas de allulose",
      "½ cucharadita de sal",
      "¾ taza de leche de almendras sin azúcar, tibia",
      "2 huevos a temperatura ambiente",
      "3 cucharadas de mantequilla suave",
      "1 cucharadita de vainilla",
      "Aceite neutro o de aguacate para freír",
      "Crema de vainilla o crema de pistacho para rellenar"
    ],
    steps: [
      "Mezcla harina, levadura, allulose y sal.",
      "Agrega leche, huevos y vainilla. Cuando se forme la masa, incorpora la mantequilla poco a poco.",
      "Amasa 10–12 minutos hasta que esté lisa, elástica y ligeramente pegajosa.",
      "Deja levar 60–90 minutos.",
      "Estira a 1.5–2 cm de grosor y corta círculos de 7–8 cm.",
      "Deja un segundo levado de 35–60 minutos, hasta que parezcan pequeños cojincitos.",
      "Fríe a 325–335°F / 163–168°C durante 1½–2 minutos por lado.",
      "Deja enfriar completamente y rellena con manga pastelera."
    ],
    tip: "Para una textura tipo bomboloni, no uses aceite demasiado caliente. Una fritura moderada permite que el centro se cocine sin dorarse demasiado rápido."
  },
  pumpkin: {
    eyebrow: "MOIST • SPICED • KETO",
    title: "Pumpkin Cake Keto",
    intro: "Húmedo, especiado y perfecto con cream cheese frosting.",
    ingredients: [
      "1 lata de 100% pure pumpkin (aprox. 425 g)",
      "2½ tazas de harina de almendra fina",
      "¼ taza de harina de coco",
      "4 huevos grandes",
      "½ taza de mantequilla derretida o aceite de aguacate",
      "½ taza de sour cream o yogur griego natural",
      "¾ taza de allulose o mezcla monk fruit/allulose",
      "2 cucharaditas de vainilla",
      "2 cucharaditas de polvo de hornear",
      "½ cucharadita de bicarbonato",
      "½ cucharadita de sal",
      "Canela, jengibre, nuez moscada y clavo",
      "Cream cheese frosting, opcional"
    ],
    steps: [
      "Precalienta el horno a 350°F / 175°C y prepara un molde de 9×13 pulgadas.",
      "Mezcla pumpkin, huevos, mantequilla o aceite, sour cream, endulzante y vainilla.",
      "En otro bowl mezcla las harinas, leudantes, sal y especias.",
      "Incorpora los secos a los húmedos sin batir de más.",
      "Deja reposar la mezcla 5 minutos para que la harina de coco absorba parte de la humedad.",
      "Hornea aproximadamente 32–40 minutos.",
      "Retira cuando un palillo salga con algunas miguitas húmedas, no completamente seco.",
      "Enfría por completo antes de poner el cream cheese frosting."
    ],
    tip: "Si quieres que permanezca especialmente moist incluso después de refrigerar, usa aceite de aguacate o mitad aceite y mitad mantequilla."
  }
};

const modal = document.getElementById("recipeModal");
const modalClose = document.getElementById("modalClose");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalIntro = document.getElementById("modalIntro");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalTip = document.getElementById("modalTip");
const search = document.getElementById("recipeSearch");
const emptyState = document.getElementById("emptyState");
const themeButton = document.getElementById("themeButton");
const surpriseButton = document.getElementById("surpriseButton");

function openRecipe(key) {
  const recipe = recipes[key];
  if (!recipe) return;
  modalEyebrow.textContent = recipe.eyebrow;
  modalTitle.textContent = recipe.title;
  modalIntro.textContent = recipe.intro;
  modalIngredients.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");
  modalSteps.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join("");
  modalTip.textContent = recipe.tip;
  modal.showModal();
  document.body.style.overflow = "hidden";
}

document.querySelectorAll(".open-recipe").forEach(button => {
  button.addEventListener("click", () => openRecipe(button.dataset.recipe));
});

modalClose.addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});
modal.addEventListener("close", () => {
  document.body.style.overflow = "";
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll(".recipe-card")];
  let visible = 0;
  cards.forEach(card => {
    const matches = card.dataset.title.includes(query);
    card.classList.toggle("hidden-card", !matches);
    if (matches) visible += 1;
  });
  emptyState.hidden = visible !== 0;
});

const storedTheme = localStorage.getItem("delights-theme");
if (storedTheme === "dark") {
  document.body.classList.add("dark");
  themeButton.textContent = "☾";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("delights-theme", dark ? "dark" : "light");
  themeButton.textContent = dark ? "☾" : "☼";
});

document.querySelectorAll(".favorite").forEach(button => {
  const key = button.dataset.favorite;
  const isFavorite = localStorage.getItem(`favorite-${key}`) === "true";
  if (isFavorite) {
    button.classList.add("is-favorite");
    button.textContent = "♥";
  }
  button.addEventListener("click", () => {
    const active = button.classList.toggle("is-favorite");
    button.textContent = active ? "♥" : "♡";
    localStorage.setItem(`favorite-${key}`, active);
  });
});

surpriseButton.addEventListener("click", () => {
  const keys = Object.keys(recipes);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  openRecipe(randomKey);
});
